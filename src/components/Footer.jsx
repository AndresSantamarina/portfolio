import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-center py-3 md:py-5 font-burtons bg-gradient-to-t from-cyan-200 dark:bg-gray-900">
      <div className="flex justify-center gap-8 text-2xl py-2">
        <a
          href="https://github.com/AndresSantamarina"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-teal-600 dark:text-white dark:hover:text-teal-400 transition-colors"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/andrés-eduardo-santamarina"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-teal-600 dark:text-white dark:hover:text-teal-400 transition-colors"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <p className="text-sm dark:text-white">
        © {new Date().getFullYear()} Andrés Santamarina
      </p>
    </footer>
  );
};

export default Footer;
