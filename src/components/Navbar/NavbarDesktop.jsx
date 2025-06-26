import { motion, AnimatePresence } from "framer-motion";
import { IoLanguage } from "react-icons/io5";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import ContactButton from "../Contact/ContactButton";
import { IoMdMail } from "react-icons/io";

const navVariants = {
  hidden: { opacity: 1, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const NavbarDesktop = ({
  navItems,
  activeSection,
  setActiveSection,
  navRef,
  modo,
  setModo,
  language,
  setLanguage,
  showSettings,
  setShowSettings,
}) => {
  return (
    <ul className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <motion.li
          key={item.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href={`#${item.id}`}
            className={`px-3 py-2 relative ${
              activeSection === item.id
                ? "text-teal-600 dark:text-teal-400 font-medium"
                : "text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
            } transition-colors`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.id);
              const navHeight = navRef.current?.offsetHeight || 0;
              const elementPosition =
                element.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({
                top: elementPosition - navHeight,
                behavior: "smooth",
              });
              setActiveSection(item.id);
            }}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.span
                layoutId="navActiveIndicator"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 dark:bg-teal-400"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </a>
        </motion.li>
      ))}

      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <ContactButton
          asIcon
          icon={
            <span className="text-2xl">
              <IoMdMail />
            </span>
          }
        />
      </motion.li>

      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          onClick={() => setModo(!modo)}
          className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          {modo ? (
            <BsFillSunFill className="text-xl" />
          ) : (
            <BsFillMoonStarsFill className="text-xl" />
          )}
        </button>
      </motion.li>

      <motion.li
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <IoLanguage className="text-xl" />
        </button>

        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navVariants}
              className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
            >
              {["es", "en"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setShowSettings(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    language === lang
                      ? "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"
                      : "text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700"
                  } transition-colors`}
                >
                  {lang === "es" ? "Español" : "English"}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.li>
    </ul>
  );
};

export default NavbarDesktop;
