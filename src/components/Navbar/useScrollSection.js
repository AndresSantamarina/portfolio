import { useState, useEffect } from "react";

export const useScrollSection = (sections = []) => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.documentElement.style.scrollPaddingTop?.replace("px", "") || 0;
      const scrollPosition = window.scrollY + parseInt(navHeight);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return [activeSection, setActiveSection];
};
