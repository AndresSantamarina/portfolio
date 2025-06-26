import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import ContactButton from "../Contact/ContactButton";
import { IoMdMail } from "react-icons/io";

const NavbarIconGroup = ({
  modo,
  setModo,
  language,
  setLanguage,
  isMobile = false,
}) => {
  return (
    <div
      className={`flex items-center ${
        isMobile ? "justify-around w-full py-3" : "gap-4"
      }`}
    >
      <ContactButton
        asIcon
        icon={
          <IoMdMail className="text-xl text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
        }
      />
      <button
        onClick={() => setModo(!modo)}
        aria-label="Cambiar tema"
        className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
      >
        {modo ? (
          <BsFillSunFill className="text-xl" />
        ) : (
          <BsFillMoonStarsFill className="text-xl" />
        )}
      </button>
      <div className="flex gap-2 items-center">
        <IoLanguage className="text-xl text-gray-700 dark:text-gray-300" />
        <button
          onClick={() => setLanguage("es")}
          className={`text-sm px-2 py-1 rounded transition-colors ${
            language === "es"
              ? "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"
              : "text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700"
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`text-sm px-2 py-1 rounded transition-colors ${
            language === "en"
              ? "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"
              : "text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default NavbarIconGroup;
