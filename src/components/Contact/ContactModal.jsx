import Modal from "react-bootstrap/Modal";
import ContactForm from "./ContactForm";

const ContactModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-teal-600">Contactame!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm onCancel={onClose} />
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
