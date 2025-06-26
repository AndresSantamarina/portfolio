import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import ContactButton from "../Contact/ContactButton";
import { IoMdMail } from "react-icons/io";

const NavbarIconGroup = ({ modo, setModo, isMobile = false }) => {
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
    </div>
  );
};

export default NavbarIconGroup;
