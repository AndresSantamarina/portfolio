import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="text-center shadow-lg p-10 rounded-xl my-10 hover:shadow-xl transition-shadow"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="pb-4 img-fluid w-full h-48 object-cover rounded-lg"
        />
      </a>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-medium pt-8 pb-2 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
      >
        {project.title}
      </a>
      <p className="py-2 dark:text-white text-sm md:text-base">
        {project.description}
      </p>
      <h4 className="py-4 text-teal-600">Herramientas de trabajo:</h4>
      <div className="flex flex-wrap justify-center gap-4 text-2xl py-2">
        {project.tools.map((tool, index) => (
          <div
            key={index}
            className="dark:text-white hover:text-teal-500 dark:hover:text-teal-400"
          >
            {tool}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
