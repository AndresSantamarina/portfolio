import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import imgAndres from "../../public/imgAndres.png";
import design from "../../public/design.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { Image } from "react-bootstrap";

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
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
        <div className="realtive mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
          <Image src={imgAndres} fluid className="imgAndres" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-center text-3xl py-4  dark:text-white">Mis habilidades</h3>
          <p className="text-center text-md py-2 leading-8 md:text-xl max-w-xl mx-auto text-gray-800  dark:text-white">
            Tengo experiencia en el desarrollo web utilizando tecnologías como <span className="text-teal-500">HTML5</span>, <span className="text-teal-500">CSS</span>, <span className="text-teal-500">JavaScript</span>, <span className="text-teal-500">ReactJS</span>, <span className="text-teal-500">NodeJS</span>, <span className="text-teal-500">ExpressJS</span> y <span className="text-teal-500">MongoDB</span>.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <img src={design} alt="" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
              Beautiful Designs
            </h3>
            <p className="py-2  dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique sequi, nulla excepturi quae laborum cum accusamus
              dolores consectetur voluptatibus vel!
            </p>
            <h4 className="py-4 text-teal-600">Designs tools I use</h4>
            <p className="text-gray-800 py-1  dark:text-white">Photoshop</p>
            <p className="text-gray-800 py-1  dark:text-white">Illustrator</p>
            <p className="text-gray-800 py-1  dark:text-white">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <img src={design} alt="" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
              Beautiful Designs
            </h3>
            <p className="py-2  dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique sequi, nulla excepturi quae laborum cum accusamus
              dolores consectetur voluptatibus vel!
            </p>
            <h4 className="py-4 text-teal-600">Designs tools I use</h4>
            <p className="text-gray-800 py-1  dark:text-white">Photoshop</p>
            <p className="text-gray-800 py-1  dark:text-white">Illustrator</p>
            <p className="text-gray-800 py-1  dark:text-white">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <img src={design} alt="" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
              Beautiful Designs
            </h3>
            <p className="py-2  dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique sequi, nulla excepturi quae laborum cum accusamus
              dolores consectetur voluptatibus vel!
            </p>
            <h4 className="py-4 text-teal-600">Designs tools I use</h4>
            <p className="text-gray-800 py-1  dark:text-white">Photoshop</p>
            <p className="text-gray-800 py-1  dark:text-white">Illustrator</p>
            <p className="text-gray-800 py-1  dark:text-white">Figma</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            Lorem ipsum dolor sit amet consectetur,
            <span className="text-teal-500">adipisicing</span> elit. Voluptates
            nesciunt accusamus dolores cumque eaque ipsa impedit eveniet autem
            odio ducimus?
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <img src={web1} alt="" className="rounded-lg object-cover" />
          </div>
          <div className="basis-1/3 flex-1">
            <img src={web2} alt="" className="rounded-lg object-cover" />
          </div>
          <div className="basis-1/3 flex-1">
            <img src={web3} alt="" className="rounded-lg object-cover" />
            <div className="basis-1/3 flex-1">
              <img src={web4} alt="" className="rounded-lg object-cover" />
            </div>
            <div className="basis-1/3 flex-1">
              <img src={web5} alt="" className="rounded-lg object-cover" />
            </div>
            <div className="basis-1/3 flex-1">
              <img src={web6} alt="" className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
