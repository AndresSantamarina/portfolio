import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import imgAndres from "../assets/img/imgAndres.png";
import { Image } from "react-bootstrap";
import petshop from "../assets/img/petShop.png";
import parrillada from "../assets/img/parrillada.png";
import bank from "../assets/img/bank.png";
import freestyle from "../assets/img/freestyle.png";
import oficios from "../assets/img/portalOficios.png";
import sge from "../assets/img/sge.png";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Inicio = () => {
  return (
    <>
      <section>
        <motion.vid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <article className="text-center px-6 py-10 md:p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Andrés Santamarina
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl  dark:text-white">
              Full Stack Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white">
              Hola, soy Andrés, un apasionado desarrollador Full Stack con una
              sólida experiencia en la creación y diseño de sitios web completos
              y eficientes. Mi enfoque se centra en la combinación de
              habilidades front-end y back-end para ofrecer soluciones y
              servicios a los usuarios.
            </p>
          </article>
        </motion.vid>
        <div className="d-flex justify-center">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="text-6xl flex justify-center gap-16 py-2 text-gray-600 md:text-7xl">
              <a
                href="https://github.com/AndresSantamarina"
                target="_blank"
                className="dark:text-white"
              >
                {" "}
                <AiFillGithub />
              </a>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="text-6xl flex justify-center gap-16 py-2 text-gray-600 md:text-7xl">
              <a
                href="https://www.linkedin.com/in/andrés-eduardo-santamarina"
                target="_blank"
                className="dark:text-white"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="realtive mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
            <Image src={imgAndres} fluid className="imgAndres" />
          </div>
        </motion.div>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <article className="py-5">
            <h3 className="text-center text-3xl py-4 text-teal-600">
              Mis habilidades
            </h3>
            <p className="text-center text-md py-2 leading-8 md:text-xl max-w-xl mx-auto text-gray-800  dark:text-white">
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
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl py-1 text-teal-600 text-center pt-5">
            Proyectos
          </h3>
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <a href="https://estilo-bigotes.netlify.app/" target="_blank">
                <img src={petshop} alt="Petshop" className="pb-4 img-fluid" />
              </a>
              <a
                href="https://estilo-bigotes.netlify.app/"
                target="_blank"
                className="text-lg font-medium pt-8 pb-2  dark:text-white"
              >
                Estilo Bigotes - PetShop
              </a>
              <p className="py-2  dark:text-white">
                Proyecto que trata sobre un PetShop para mascotas. Se puede
                navegar entre las distintas categorías, ver los productos
                disponibles y la información del equipo.
              </p>
              <h4 className="py-4 text-teal-600">Herramientas de trabajo:</h4>
              <div className="flex justify-center gap-8 text-3xl text-center py-4">
                <FaHtml5 className="dark:text-white" />
                <FaCss3 className="dark:text-white" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <a
                href="https://parrillada-santamarina.netlify.app/"
                target="_blank"
              >
                {" "}
                <img
                  src={parrillada}
                  alt="Parrillada"
                  className="pb-4 img-fluid"
                />
              </a>
              <a
                href="https://parrillada-santamarina.netlify.app/"
                target="_blank"
                className="text-lg font-medium pt-8 pb-2  dark:text-white"
              >
                Parrillada
              </a>
              <p className="py-2  dark:text-white">
                Esta página web es una Single Page Application, que trata sobre
                una parrillada, en la que se puede observar información sobre
                los distintos servicios, el menú y los chefs.
              </p>
              <h4 className="py-4 text-teal-600">Herramientas de trabajo:</h4>
              <div className="flex justify-center gap-8 text-3xl text-center py-4">
                <FaHtml5 className="dark:text-white" />
                <FaCss3 className="dark:text-white" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <a
                href="https://rolling-bank-grupo-5.netlify.app/"
                target="_blank"
              >
                {" "}
                <img
                  src={bank}
                  alt="Banco virtual"
                  className="pb-4 img-fluid"
                />
              </a>
              <a
                href="https://rolling-bank-grupo-5.netlify.app/"
                target="_blank"
                className="text-lg font-medium pt-8 pb-2  dark:text-white"
              >
                Rolling Bank
              </a>
              <p className="py-2  dark:text-white">
                Esta página trata sobre un banco virtual, en donde se puede
                navegar en las distintas opciones de la barra de navegación,
                para observar la información sobre precios, seguridad, etc.
              </p>
              <h4 className="py-4 text-teal-600">Herramientas de trabajo:</h4>
              <div className="flex justify-center gap-8 text-3xl text-center py-4">
                <FaHtml5 className="dark:text-white" />
                <FaCss3 className="dark:text-white" />
                <FaBootstrap className="dark:text-white" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <a href="https://as-freestyle.netlify.app/" target="_blank">
                {" "}
                <img
                  src={freestyle}
                  alt="Portfolio Freestyle"
                  className="pb-4 img-fluid"
                />
              </a>
              <a
                href="https://as-freestyle.netlify.app/"
                target="_blank"
                className="text-lg font-medium pt-8 pb-2  dark:text-white"
              >
                Portfolio de Freestyle Fútbol
              </a>
              <p className="py-2  dark:text-white">
                Este es mi portfolio personal de Freestyle Fútbol, que incluye
                información sobre competencias, eventos, shows, y en donde se me
                puede contactar. Utilicé Framer Motion para las animaciones, CSS
                Gradient para la gama de colores y VideoJS para los videos, que
                son importaciones desde Youtube.
              </p>
              <h4 className="py-4 text-teal-600">Herramientas de trabajo:</h4>
              <div className="flex justify-center gap-8 text-3xl text-center py-4">
                <FaHtml5 className="dark:text-white" />
                <FaCss3 className="dark:text-white" />
                <FaBootstrap className="dark:text-white" />
              </div>
              <div className="flex justify-center gap-8 text-3xl text-center py-4">
                <FaReact className="dark:text-white" />
                <FaJs className="dark:text-white" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <a
                href="https://portal-de-oficios-concepcion.netlify.app/"
                target="_blank"
              >
                {" "}
                <img
                  src={oficios}
                  alt="Portal de Oficios"
                  className="pb-4 img-fluid"
                />
              </a>
              <a
                href="https://portal-de-oficios-concepcion.netlify.app/"
                target="_blank"
                className="text-lg font-medium pt-8 pb-2  dark:text-white"
              >
                Portal de Oficios - Municipalidad de Concepción
              </a>
              <p className="py-2  dark:text-white">
                Portal de Oficios desarrollado para la Municipalidad de la
                ciudad de Concepción (Tucumán, Argentina). Permite registrarse
                como administrador, profesional o cliente. El propósito
                principal es contactar con diversos profesionales para contratar
                sus servicios.
              </p>
              <h4 className="py-4 text-teal-600">Herramientas de trabajo:</h4>
              <div className="flex justify-center gap-8 text-3xl text-center py-4">
                <FaHtml5 className="dark:text-white" />
                <FaCss3 className="dark:text-white" />
                <FaBootstrap className="dark:text-white" />
              </div>
              <div className="flex justify-center gap-8 text-3xl text-center py-4">
                <FaReact className="dark:text-white" />
                <FaJs className="dark:text-white" />
                <SiExpress className="dark:text-white" />
              </div>
              <div className="flex justify-center gap-8 text-3xl text-center py-4">
                <SiMongodb className="dark:text-white" />
                <FaNodeJs className="dark:text-white" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <a
                href="https://github.com/AndresSantamarina/proyectoFinalReactAdv"
                target="_blank"
              >
                {" "}
                <img
                  src={sge}
                  alt="Sistema de Gestión Educativa"
                  className="pb-4 img-fluid"
                />
              </a>
              <a
                href="https://github.com/AndresSantamarina/proyectoFinalReactAdv"
                target="_blank"
                className="text-lg font-medium pt-8 pb-2  dark:text-white"
              >
                Sistema de Gestión Educativa
              </a>
              <p className="py-2  dark:text-white">
                Proyecto final para el curso avanzado de React dictado por
                RollingCode. Se trata de un sistema de administración educativa,
                en donde se permite gestionar los usuarios (administradores,
                docentes y alumnos), cursos, materias, horarios, asistencias,
                calificaciones y novedades. Para el manejo de estados globales,
                se usó Zustand.
              </p>
              <h4 className="py-4 text-teal-600">Herramientas de trabajo:</h4>
              <div className="flex justify-center gap-8 text-3xl text-center py-4">
                <FaHtml5 className="dark:text-white" />
                <FaCss3 className="dark:text-white" />
                <FaBootstrap className="dark:text-white" />
              </div>
              <div className="flex justify-center gap-8 text-3xl text-center py-4">
                <FaReact className="dark:text-white" />
                <FaJs className="dark:text-white" />
              </div>
            </div>
          </article>
        </motion.div>
      </section>
    </>
  );
};

export default Inicio;
