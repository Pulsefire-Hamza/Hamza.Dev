import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export const Experience = () => {
  // Reusable animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="border-b border-neutral-900 pb-4" aria-label="Experience Section">
      <motion.h2
        {...fadeInUp}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <article key={index} className="mb-8 flex flex-wrap lg:justify-center" aria-label={`Experience at ${experience.company}`}>
            <motion.div
              {...fadeInLeft}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} - <span className="text-sm text-purple-100"> {experience.company}</span>
              </h6>
              <p>{experience.description}</p>
              <div className="mt-4">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};
