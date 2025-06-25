import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import petshop from "../../assets/img/petShop.png";
import parrillada from "../../assets/img/parrillada.png";
import bank from "../../assets/img/bank.png";
import freestyle from "../../assets/img/freestyle.png";
import oficios from "../../assets/img/portalOficios.png";
import sge from "../../assets/img/sge.png";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Estilo Bigotes - PetShop",
      description:
        "Proyecto que trata sobre un PetShop para mascotas. Se puede navegar entre las distintas categorías, ver los productos disponibles y la información del equipo.",
      image: petshop,
      link: "https://estilo-bigotes.netlify.app/",
      tools: [<FaHtml5 key="html" />, <FaCss3 key="css" />],
    },
    {
      title: "Parrillada",
      description:
        "Esta página web es una Single Page Application, que trata sobre una parrillada, en la que se puede observar información sobre los distintos servicios, el menú y los chefs.",
      image: parrillada,
      link: "https://parrillada-santamarina.netlify.app/",
      tools: [<FaHtml5 key="html" />, <FaCss3 key="css" />],
    },
    {
      title: "Rolling Bank",
      description:
        "Esta página trata sobre un banco virtual, en donde se puede navegar en las distintas opciones de la barra de navegación, para observar la información sobre precios, seguridad, etc.",
      image: bank,
      link: "https://rolling-bank-grupo-5.netlify.app/",
      tools: [
        <FaHtml5 key="html" />,
        <FaCss3 key="css" />,
        <FaBootstrap key="bootstrap" />,
      ],
    },
    {
      title: "Portfolio de Freestyle Fútbol",
      description:
        "Este es mi portfolio personal de Freestyle Fútbol, que incluye información sobre competencias, eventos, shows, y en donde se me puede contactar. Utilicé Framer Motion para las animaciones, CSS Gradient para la gama de colores y VideoJS para los videos, que son importaciones desde Youtube.",
      image: freestyle,
      link: "https://as-freestyle.netlify.app/",
      tools: [
        <FaHtml5 key="html" />,
        <FaCss3 key="css" />,
        <FaBootstrap key="bootstrap" />,
        <FaReact key="react" />,
        <FaJs key="js" />,
      ],
    },
    {
      title: "Portal de Oficios - Municipalidad de Concepción",
      description:
        "Portal de Oficios desarrollado para la Municipalidad de la ciudad de Concepción (Tucumán, Argentina). Permite registrarse como administrador, profesional o cliente. El propósito principal es contactar con diversos profesionales para contratar sus servicios.",
      image: oficios,
      link: "https://portal-de-oficios-concepcion.netlify.app/",
      tools: [
        <FaHtml5 key="html" />,
        <FaCss3 key="css" />,
        <FaBootstrap key="bootstrap" />,
        <FaReact key="react" />,
        <FaJs key="js" />,
        <SiExpress key="express" />,
        <SiMongodb key="mongo" />,
        <FaNodeJs key="node" />,
      ],
    },
    {
      title: "Sistema de Gestión Educativa",
      description:
        "Proyecto final para el curso avanzado de React dictado por RollingCode. Se trata de un sistema de administración educativa, en donde se permite gestionar los usuarios (administradores, docentes y alumnos), cursos, materias, horarios, asistencias, calificaciones y novedades. Para el manejo de estados globales, se usó Zustand.",
      image: sge,
      link: "https://github.com/AndresSantamarina/proyectoFinalReactAdv",
      tools: [
        <FaHtml5 key="html" />,
        <FaCss3 key="css" />,
        <FaBootstrap key="bootstrap" />,
        <FaReact key="react" />,
        <FaJs key="js" />,
      ],
    },
  ];

  return (
    <section id="proyectos">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl py-1 text-teal-600 text-center pt-5">
          Proyectos
        </h3>
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </article>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
