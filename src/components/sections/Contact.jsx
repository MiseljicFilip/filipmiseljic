import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Send, Linkedin, Github, Mail, Check } from "lucide-react";
import { SITE } from "../../data/site";
import { Confetti } from "../Confetti";

const INPUT_CLASS =
  "w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-soft transition focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent";

const FIELDS = [
  { id: "name", name: "name", type: "text", label: "Name", placeholder: "Your name", required: true },
  { id: "email", name: "email", type: "email", label: "Email", placeholder: "example@gmail.com", required: true },
  { id: "message", name: "message", type: "textarea", label: "Message", placeholder: "Your message...", required: true },
];

const getInitialState = () =>
  FIELDS.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {});

export const Contact = () => {
  const [formData, setFormData] = useState(getInitialState);
  const [status, setStatus] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastExiting, setToastExiting] = useState(false);

  const linkedinUrl = SITE.person?.sameAs?.find((u) => u.includes("linkedin.com")) ?? null;
  const githubUrl = SITE.person?.sameAs?.find((u) => u.includes("github.com")) ?? null;
  const hasSocialLinks = linkedinUrl || githubUrl || SITE.email;

  useEffect(() => {
    if (status !== "success") return;
    setShowConfetti(true);
    const t = setTimeout(() => setShowConfetti(false), 2600);
    return () => clearTimeout(t);
  }, [status]);

  useEffect(() => {
    if (emailCopied) {
      const id = requestAnimationFrame(() => setToastVisible(true));
      return () => cancelAnimationFrame(id);
    }
    setToastVisible(false);
  }, [emailCopied]);

  useEffect(() => {
    if (!toastExiting) return;
    const t = setTimeout(() => {
      setEmailCopied(false);
      setToastExiting(false);
      setToastVisible(false);
    }, 300);
    return () => clearTimeout(t);
  }, [toastExiting]);

  const copyEmail = async () => {
    if (!SITE.email) return;
    try {
      await navigator.clipboard.writeText(SITE.email);
      setEmailCopied(true);
      setTimeout(() => setToastExiting(true), 2000);
    } catch {
      setEmailCopied(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = import.meta.env.VITE_EMAILJS_USER_ID ?? import.meta.env.VITE_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;

    if (!userId?.trim()) {
      setStatus("error");
      return;
    }
    if (!serviceId?.trim() || !templateId?.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    emailjs.init(userId.trim());
    emailjs
      .sendForm(serviceId.trim(), templateId.trim(), e.target)
      .then(() => {
        setStatus("success");
        setFormData(getInitialState());
      })
      .catch(() => setStatus("error"));
  };

const SECTION_TITLE =
  "text-3xl font-bold mb-8 bg-gradient-to-r from-[var(--app-gradient-start)] to-[var(--app-gradient-end)] bg-clip-text text-transparent text-center";
const CARD_CLASS =
  "rounded-2xl p-6 sm:p-8 border border-border bg-surface hover:bg-surface-hover hover:-translate-y-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-ring/30";

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
      aria-labelledby="contact-heading"
    >
      {showConfetti && <Confetti />}
      {(emailCopied || toastExiting) && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ease-out ${
            toastExiting ? "translate-y-2 opacity-0" : toastVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 shadow-lg ring-1 ring-black/5">
            <Check className="size-5 shrink-0 text-success" aria-hidden />
            <span className="text-sm font-medium text-foreground">Email copied to clipboard!</span>
          </div>
        </div>
      )}
      <RevealOnScroll>
        <div className="min-w-0 w-full max-w-[700px] mx-auto px-4 sm:px-6">
          <h2 id="contact-heading" className={SECTION_TITLE}>
            Get In Touch
          </h2>
          <div className={`min-w-0 ${CARD_CLASS}`}>
          {hasSocialLinks && (
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-11 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:border-primary/30 hover:-translate-y-0.5 text-foreground transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="size-5" aria-hidden />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-11 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:border-primary/30 hover:-translate-y-0.5 text-foreground transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="GitHub profile"
                >
                  <Github className="size-5" aria-hidden />
                </a>
              )}
              {SITE.email && (
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center size-11 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:border-primary/30 hover:-translate-y-0.5 text-foreground transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`Copy email ${SITE.email}`}
                >
                  {emailCopied ? (
                    <Check className="size-5 text-success" aria-hidden />
                  ) : (
                    <Mail className="size-5" aria-hidden />
                  )}
                </button>
              )}
            </div>
          )}
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {FIELDS.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  {field.label}
                  {field.required && (
                    <span className="text-primary" aria-hidden> *</span>
                  )}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.name}
                    required={field.required}
                    rows={5}
                    value={formData[field.name] ?? ""}
                    className={INPUT_CLASS}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    aria-required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    required={field.required}
                    value={formData[field.name] ?? ""}
                    className={INPUT_CLASS}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    aria-required={field.required}
                  />
                )}
              </div>
            ))}

            {status === "success" && (
              <p className="text-sm text-success" role="status">
                Message sent. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-error" role="alert">
                Something went wrong. Please try again or email me directly.
                {!(import.meta.env.VITE_EMAILJS_USER_ID ?? import.meta.env.VITE_PUBLIC_KEY)?.trim() && (
                  <span className="block mt-1"> (EmailJS User ID not set — add VITE_EMAILJS_USER_ID to .env)</span>
                )}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-6 rounded-xl font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-60 disabled:pointer-events-none"
              aria-label="Send message"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <Send className="size-4" aria-hidden />
            </button>
          </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
