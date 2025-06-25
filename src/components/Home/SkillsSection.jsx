import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <section id="habilidades">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <article className="py-5">
          <h3 className="text-center text-3xl py-4 text-teal-600">
            Mis habilidades
          </h3>
          <p className="text-center text-md py-2 leading-8 md:text-xl max-w-xl mx-auto text-gray-800 dark:text-white">
            Tengo experiencia en el desarrollo web utilizando tecnologías como{" "}
            <span className="text-teal-500">HTML5</span>,{" "}
            <span className="text-teal-500">CSS</span>,{" "}
            <span className="text-teal-500">JavaScript</span>,{" "}
            <span className="text-teal-500">Tailwind</span>,{" "}
            <span className="text-teal-500">Bootstrap</span>,{" "}
            <span className="text-teal-500">ReactJS</span>,{" "}
            <span className="text-teal-500">NodeJS</span>,{" "}
            <span className="text-teal-500">ExpressJS</span>,{" "}
            <span className="text-teal-500">MongoDB</span>,{" "}
            <span className="text-teal-500">Redux Toolkit</span> y{" "}
            <span className="text-teal-500">Zustand</span>.
          </p>
        </article>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
