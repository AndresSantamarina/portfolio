import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import imgAndres from "../../public/imgAndres.png";
import { Image } from "react-bootstrap";
import petshop from "../../public/petShop.png";
import parrillada from "../../public/parrillada.png";
import bank from "../../public/bank.png";
import design from "../../public/design.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

const Inicio = () => {
  return (
    <>
      <section>
        <div className="text-center px-6 py-10 md:p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Andrés Santamarina
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl  dark:text-white">
            Full Stack Web Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white">
            Hola, soy Andrés, un apasionado desarrollador Full Stack con una
            sólida experiencia en la creación de soluciones web completas y
            eficientes. Mi enfoque se centra en la combinación de habilidades
            front-end y back-end para ofrecer experiencias de usuario
            excepcionales.
          </p>
        </div>
        <div className="text-6xl flex justify-center gap-16 py-2 text-gray-600 md:text-7xl">
          <a
            href="https://github.com/AndresSantamarina"
            target="_blank"
            className="dark:text-white"
          >
            {" "}
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/andrés-eduardo-santamarina"
            target="_blank"
            className="dark:text-white"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div className="realtive mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
          <Image src={imgAndres} fluid className="imgAndres" />
        </div>
      </section>

      <div className="py-5">
        <h3 className="text-center text-3xl py-4 text-teal-600">
          Mis habilidades
        </h3>
        <p className="text-center text-md py-2 leading-8 md:text-xl max-w-xl mx-auto text-gray-800  dark:text-white">
          Tengo experiencia en el desarrollo web utilizando tecnologías como{" "}
          <span className="text-teal-500">HTML5</span>,{" "}
          <span className="text-teal-500">CSS</span>,{" "}
          <span className="text-teal-500">JavaScript</span>,{" "}
          <span className="text-teal-500">ReactJS</span>,{" "}
          <span className="text-teal-500">NodeJS</span>,{" "}
          <span className="text-teal-500">ExpressJS</span> y{" "}
          <span className="text-teal-500">MongoDB</span>.
        </p>
      </div>

      <h3 className="text-3xl py-1 text-teal-600 text-center pt-5">
        Portfolio
      </h3>
      <div className="lg:flex gap-10 py-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
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
            Esta es una página web sobre un PetShop para mascotas. Se puede
            navegar entre las distintas categorías, ver los productos
            disponibles y la información del equipo.
          </p>
          <h4 className="py-4 text-teal-600">Herramientas de trabajo:</h4>
          <p className="text-gray-800 py-1  dark:text-white">HTML5</p>
          <p className="text-gray-800 py-1  dark:text-white">CSS</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <a href="https://parrillada-santamarina.netlify.app/" target="_blank">
            {" "}
            <img src={parrillada} alt="Parrillada" className="pb-4 img-fluid" />
          </a>
          <a
            href="https://parrillada-santamarina.netlify.app/"
            target="_blank"
            className="text-lg font-medium pt-8 pb-2  dark:text-white"
          >
            Parrillada
          </a>
          <p className="py-2  dark:text-white">
            Esta página web es una Single Page Application, que trata sobre una
            Parrillada, en la que se puede observar información sobre los
            distintos servicios, el menú y los chefs.
          </p>
          <h4 className="py-4 text-teal-600">Herramientas de trabajo:</h4>
          <p className="text-gray-800 py-1  dark:text-white">HTML5</p>
          <p className="text-gray-800 py-1  dark:text-white">CSS</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <a href="https://rolling-bank-grupo-5.netlify.app/" target="_blank">
            {" "}
            <img src={bank} alt="Banco virtual" className="pb-4 img-fluid" />
          </a>
          <a
            href="https://rolling-bank-grupo-5.netlify.app/"
            target="_blank"
            className="text-lg font-medium pt-8 pb-2  dark:text-white"
          >
            Rolling Bank
          </a>
          <p className="py-2  dark:text-white">
            Esta página web trata sobre un banco virtual, en donde se puede
            navegar en las distintas opciones de la barra de navegación, para
            observar la información sobre precios, seguridad, etc.
          </p>
          <h4 className="py-4 text-teal-600">Herramientas de trabajo:</h4>
          <p className="text-gray-800 py-1  dark:text-white">HTML5</p>
          <p className="text-gray-800 py-1  dark:text-white">CSS</p>
          <p className="text-gray-800 py-1  dark:text-white">Bootsrap</p>
        </div>
      </div>
    </>
  );
};

export default Inicio;
