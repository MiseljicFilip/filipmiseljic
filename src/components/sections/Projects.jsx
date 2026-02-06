import { useMemo, useState } from "react";
import { ExternalLink, Filter } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";
import { PROJECTS, PROJECT_TYPES, PROJECT_TECH } from "../../data/projects";

const CARD_CLASS =
  "p-6 rounded-2xl border border-border bg-surface hover:bg-surface-hover hover:-translate-y-1 hover:border-primary/30 transition-all duration-200 focus-within:ring-2 focus-within:ring-ring/30";
const CHIP_CLASS =
  "bg-primary/10 text-primary py-1.5 px-3 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors";
const SECTION_TITLE =
  "text-3xl font-bold mb-8 bg-gradient-to-r from-[var(--app-gradient-start)] to-[var(--app-gradient-end)] bg-clip-text text-transparent text-center";

const ALL = "all";

function FilterChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-surface text-muted hover:bg-surface-hover hover:text-foreground border border-border"
      }`}
      aria-pressed={active}
      aria-label={label === ALL ? "Show all" : `Filter by ${label}`}
    >
      {label === ALL ? "All" : label}
    </button>
  );
}

export const Projects = () => {
  const [typeFilter, setTypeFilter] = useState(ALL);
  const [techFilter, setTechFilter] = useState(ALL);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchType = typeFilter === ALL || project.type === typeFilter;
      const matchTech = techFilter === ALL || project.tech.includes(techFilter);
      return matchType && matchTech;
    });
  }, [typeFilter, techFilter]);

  const hasFilters = typeFilter !== ALL || techFilter !== ALL;
  const clearFilters = () => {
    setTypeFilter(ALL);
    setTechFilter(ALL);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
      aria-labelledby="projects-heading"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 id="projects-heading" className={SECTION_TITLE}>
            Featured Projects
          </h2>

          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="size-4 text-muted shrink-0" aria-hidden />
              <span className="text-sm font-medium text-muted shrink-0">
                Type:
              </span>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Project type filter">
                <FilterChip
                  label={ALL}
                  active={typeFilter === ALL}
                  onClick={() => setTypeFilter(ALL)}
                />
                {PROJECT_TYPES.map((t) => (
                  <FilterChip
                    key={t}
                    label={t}
                    active={typeFilter === t}
                    onClick={() => setTypeFilter(t)}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted shrink-0 w-12">
                Tech:
              </span>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Tech stack filter">
                <FilterChip
                  label={ALL}
                  active={techFilter === ALL}
                  onClick={() => setTechFilter(ALL)}
                />
                {PROJECT_TECH.map((t) => (
                  <FilterChip
                    key={t}
                    label={t}
                    active={techFilter === t}
                    onClick={() => setTechFilter(t)}
                  />
                ))}
              </div>
            </div>
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded self-start"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <p className="text-muted text-center py-12" role="status">
              No projects match the selected filters. Try changing type or tech.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <article key={project.id} className={CARD_CLASS}>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-muted rounded-full bg-surface-hover px-2 py-0.5">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-muted mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className={CHIP_CLASS}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1.5 text-primary hover:opacity-80 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                      target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                      rel={project.liveUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={`View ${project.title} live`}
                    >
                      View project
                      <ExternalLink className="size-4" aria-hidden />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-1.5 text-muted hover:text-primary font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                      >
                        GitHub
                        <ExternalLink className="size-4" aria-hidden />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
