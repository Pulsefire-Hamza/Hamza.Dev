import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
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
    <section className='border-neutral-900 pb-4' aria-label="Projects Section">
      <motion.h2
        {...fadeInUp}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <article key={index} className='mb-8 flex flex-wrap lg:justify-center' aria-label={`Project: ${project.title}`}>
            <motion.div
              {...fadeInLeft}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img 
                src={project.image} 
                width={150} 
                height={150} 
                alt={project.title}  
                className='mb-6 rounded'
              />
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div className='mt-4'>
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className='mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
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
}

export default Projects;
