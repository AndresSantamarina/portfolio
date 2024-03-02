import { BsFillMoonStarsFill } from "react-icons/bs";


const BarraNav = ({ setModo, modo }) => {
  return (
   
      <nav className="py-10 flex justify-between bg-gradient-to-b from-cyan-200 dark:bg-gray-900">
        <h1 className="text-xl font-burtons dark:text-white">
          desarrolladoporandrés
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setModo(!modo)}
              className="cursor-pointer text-2xl dark:text-white"
            />
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-700 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
  
  );
};

export default BarraNav;
