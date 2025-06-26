import { useState, useEffect } from "react";

export const useScrollSection = (sections = []) => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      let found = false;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          const isVisible =
            rect.top <= viewportHeight * 0.4 && rect.bottom >= viewportHeight * 0.4;

          if (isVisible) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            found = true;
            break;
          }
        }
      }

      if (!found && sections.length > 0) {
        const lastSection = sections[sections.length - 1];
        setActiveSection(lastSection);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection]);

  return [activeSection, setActiveSection];
};
