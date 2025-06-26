import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaBootstrap,
  FaPalette,
} from "react-icons/fa";
import { RiBearSmileFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiExpo,
  SiExpress,
} from "react-icons/si";

const techStack = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "SCSS", icon: <FaSass /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Material UI", icon: <FaPalette /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "ExpressJS", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Expo Go", icon: <SiExpo /> },
    ],
  },
  {
    title: "State Management",
    items: [
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Zustand", icon: <RiBearSmileFill /> },
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const SkillsSection = () => {
  return (
    <section id="habilidades" className="pb-5">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-center text-3xl pt-2 pb-4 mb-5 text-teal-600">
          STACK
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {techStack.map((category, idx) => (
            <motion.div
              key={category.title}
              custom={idx}
              variants={itemVariants}
              className="flex flex-col  text-center
             dark:bg-gray-800 rounded-lg p-6 shadow-md
             border border-gray-200 dark:border-gray-700
            "
            >
              <h4 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-4">
                {category.title}
              </h4>
              <ul className="space-y-3">
                {category.items.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center justify-center gap-3 text-gray-800 dark:text-white"
                  >
                    <span className="text-xl text-teal-500">{tech.icon}</span>
                    <span className="text-md">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
