import { motion, AnimatePresence } from "framer-motion";
import NavbarIconGroup from "./NavbarIconGroup";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
};

const NavbarMobile = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  navItems,
  activeSection,
  modo,
  setModo,
  language,
  setLanguage,
  navRef,
}) => {
  const handleLinkClick = (itemId) => {
    const el = document.getElementById(itemId);
    if (el) {
      const navHeight = navRef.current?.offsetHeight || 0;
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - navHeight - 5;
      window.scrollTo({ top, behavior: "smooth" });
      setTimeout(() => setMobileMenuOpen(false), 700);
    }
  };

  return (
    <div className="md:hidden flex items-center gap-4">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        aria-label="Abrir menú"
      >
        {mobileMenuOpen ? (
          <IoMdCloseCircle className="text-xl" />
        ) : (
          <TiThMenu className="text-xl" />
        )}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="absolute top-full left-0 w-full bg-gray-100 dark:bg-gray-800 shadow-lg overflow-hidden z-40"
          >
            <ul className="py-2 px-4">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.id);
                    }}
                    className={`block py-3 transition-colors ${
                      activeSection === item.id
                        ? "text-teal-600 dark:text-teal-400 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="border-t border-gray-200 dark:border-gray-700">
                <NavbarIconGroup
                  isMobile
                  modo={modo}
                  setModo={setModo}
                  language={language}
                  setLanguage={setLanguage}
                />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
