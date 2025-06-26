import { useState } from "react";
import ContactModal from "./ContactModal";
import { IoMdMail } from "react-icons/io";

const ContactButton = ({
  asIcon = false,
  icon = <IoMdMail className="text-2xl" />,
  label = "Contacto",
  className = "",
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`${
          asIcon ? "p-2" : "px-4 py-2"
        } ${className} text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors`}
        aria-label="Contacto por email"
      >
        {asIcon ? icon : label}
      </button>
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default ContactButton;
