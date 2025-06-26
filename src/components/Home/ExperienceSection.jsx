import certificado from "../../assets/img/certificado.png";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-center text-3xl py-4 text-teal-600">EXPERIENCIA</h3>
        <p className="text-center text-md py-3 leading-8 md:text-xl max-w-xl mx-auto text-gray-800 dark:text-white">
          Me gradué como{" "}
          <span className="text-teal-500">
            Técnico Universitario en Programación
          </span>{" "}
          en la Universidad Tecnológica Nacional (Tucumán, Argentina).
        </p>
        <p className="text-center text-md py-3 leading-8 md:text-xl max-w-xl mx-auto text-gray-800 dark:text-white">
          {" "}
          Tuve la suerte de ser becado dos veces por el instituo{" "}
          <a href="https://rollingcode.co/" target="_blank">
            {" "}
            <span className="text-teal-500"> RollingCode</span>
          </a>
          , ampliando mis conocimientos en:
        </p>
        <p className="text-center text-md py-3 leading-8 md:text-xl max-w-xl mx-auto text-gray-800 dark:text-white">
          {" "}
          <a
            href="https://certs.rollingcodeschool.com//YW5kcmVzZXNhbnRhbWFyaW5hQGdtYWlsLmNvbQ==-1716320958439-1.png"
            target="_blank"
          >
            {" "}
            <span className="text-teal-500">
              Curso de Desarrollo Web Fullstack
            </span>
          </a>
          <br />
          <a
            href="https://certs.rollingcodeschool.com/YW5kcmVzZXNhbnRhbWFyaW5hQGdtYWlsLmNvbQ==-1726843268724-1.png"
            target="_blank"
          >
            {" "}
            <span className="text-teal-500">
              Curso de Especialización en React
            </span>
          </a>
        </p>

        <p className="text-center text-md py-3 leading-8 md:text-xl max-w-xl mx-auto text-gray-800 dark:text-white">
          Actualmente me sigo formando como profesional en la StartUp{" "}
          <a
            href="https://www.linkedin.com/company/cybersinn-solutions"
            target="_blank"
          >
            <span className="text-teal-500"> Cybersinn Solutions</span>
          </a>
          , en donde estoy a cargo del desarrollo Frontend.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative mx-auto w-80 h-80 mt-5 md:h-96 md:w-96">
          <Image src={certificado} fluid className="imgCertificado" />
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
