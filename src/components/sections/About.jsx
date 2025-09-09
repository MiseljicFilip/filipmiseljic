import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS"
  ];


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-800 dark:text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all  items-center justify-center flex-col flex">
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className=" text-gray-800 dark:text-gray-300 space-y-2">
                <li>
                  <strong> Higher Educational Technical
School of Professional
Studies Novi Sad</strong>
                </li>
                <li className="font-bold">
                  Relevant Coursework:
                </li>
                <ul className="list-disc space-y-1 list-inside">
                  <li>
                  University of Helsinki – Full Stack Open
                </li>
                <li>
                  HarvardX – CS50’s
                </li>
                <li>
                 Princeton – Algorithms, Part I/II
                </li>
                <li>
                  MIT – The Missing Semester of Your CS Education
                </li>
                </ul>
                
              </ul>
            </div>
            <div className="p-6 rounded-xl border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-800 dark:text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Frontend Developer at Transatlantic Digital
 (Octobar 2023 - December 2024){" "}
                  </h4>
                  <p>
                   Worked on Mint Day Media, an NFT publishing platform — developed React components, integrated Web3 wallets, and contributed to Dockerized deployment.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Frontend Developer at Petkom (May 2024 - September 2025){" "}
                  </h4>
                  <p>
                    Built and deployed the full frontend of ERP system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
