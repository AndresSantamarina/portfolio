import { useState, useEffect } from "react";

export const useScrollSection = (sections = []) => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPadding = parseInt(
        getComputedStyle(document.documentElement).scrollPaddingTop
      ) || 0;

      const scrollPosition = window.scrollY + scrollPadding;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // ejecutar una vez al inicio

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return [activeSection, setActiveSection];
};
