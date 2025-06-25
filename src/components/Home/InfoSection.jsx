import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Image } from "react-bootstrap";
import imgAndres from "../../assets/img/imgAndres.png";
import { motion } from "framer-motion";

const InfoSection = () => {
  return (
    <section id="inicio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <article className="text-center px-6 py-10 md:p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Andrés Santamarina
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
            Full Stack Web Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
            Hola, soy Andrés, un apasionado desarrollador Full Stack con una
            sólida experiencia en la creación y diseño de sitios web completos y
            eficientes. Mi enfoque se centra en la combinación de habilidades
            front-end y back-end para ofrecer soluciones y servicios a los
            usuarios.
          </p>
        </article>
      </motion.div>

      <div className="flex justify-center gap-16">
        <motion.a
          href="https://github.com/AndresSantamarina"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-5xl text-gray-600 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
        >
          <AiFillGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/andrés-eduardo-santamarina"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-5xl text-gray-600 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
        >
          <AiFillLinkedin />
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
          <Image src={imgAndres} fluid className="imgAndres" />
        </div>
      </motion.div>
    </section>
  );
};

export default InfoSection;
