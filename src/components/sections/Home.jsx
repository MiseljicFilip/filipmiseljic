import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({darkMode}) => {
  return (
    <>
      <section>
        <RevealOnScroll>
          <div
            id="home"
            className="min-h-screen flex relative items-center justify-center"
          >
            <div className="text-center z-10 px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r dark:from-blue-500 dark:to-cyan-200 from-blue-500 to-purple-500 leading-right text-transparent bg-clip-text">
                Hi, I'm Filip
              </h1>
              <p className="dark:text-gray-100 text-gray-800 mb-8 text-lg max-w-lg font-semibold">
                Ever since I started coding, my goal has been simple: build web
                apps that look great, run fast, and make life easier for the
                people who use them.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#projects"
                  className="rounded border-1 border-blue-500/50 py-3 px-6 text-blue-500 font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  Projects
                </a>{" "}
                <a
                  href="#contact"
                  className="rounded bg-blue-500 py-3 px-6 text-white font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
