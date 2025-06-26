import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import { useScrollSection } from "./useScrollSection";
import NavbarMobile from "./NavbarMobile";

const BarraNav = ({ setModo, modo, setLanguage, language }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "experiencia", label: "Experiencia" },
    { id: "habilidades", label: "Habilidades" },
    { id: "proyectos", label: "Proyectos" },
  ];
  const [activeSection, setActiveSection] = useScrollSection(
    navItems.map((i) => i.id)
  );

  useEffect(() => {
    const updateScrollPadding = () => {
      const navHeight = navRef.current?.offsetHeight || 0;
      document.documentElement.style.scrollPaddingTop = `${navHeight}px`;
    };
    updateScrollPadding();
    window.addEventListener("resize", updateScrollPadding);
    return () => window.removeEventListener("resize", updateScrollPadding);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4 md:py-6 flex justify-between items-center bg-gradient-to-b from-cyan-200 to-white dark:from-cyan-900 dark:to-gray-900 px-5 md:px-10 sticky top-0 z-50 bg-opacity-100"
    >
      <a
        href="#inicio"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("inicio");
          if (el) {
            const navHeight = navRef.current?.offsetHeight || 0;
            const top =
              el.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top, behavior: "smooth" });
            setActiveSection("inicio");
          }
        }}
        className="text-lg font-burtons dark:text-white md:text-xl hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
      >
        bienvenido
      </a>

      <NavbarDesktop
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        navRef={navRef}
        modo={modo}
        setModo={setModo}
        language={language}
        setLanguage={setLanguage}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />

      <NavbarMobile
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        modo={modo}
        setModo={setModo}
        language={language}
        setLanguage={setLanguage}
        navRef={navRef}
      />
    </motion.nav>
  );
};

export default BarraNav;
