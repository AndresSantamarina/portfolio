import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ModalContacto() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const servicio = import.meta.env.VITE_SERVICE_KEY;
  const template = import.meta.env.VITE_TEMPLATE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(servicio, template, form.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <button
        className="bg-gradient-to-r from-cyan-700 to-teal-400 text-white px-4 mx-2 py-2 rounded-md md:mx-5"
        onClick={handleShow}
      >
        Contacto
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-teal-600">Contactame!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="nombreInput">
              <Form.Label>Ingresa tu nombre</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Tu nombre"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mailInput">
              <Form.Label>Ingresa tu mail</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="nombre@gmail.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mensajeInput">
              <Form.Label>Ingresá tu mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" />
            </Form.Group>
            <button
              className="bg-teal-500 hover:bg-teal-600 px-4 mx-2 py-2 rounded-md md:mx-5 text-white"
              onClick={handleClose}
              type="submit"
              value="Send"
            >
              Enviar
            </button>
            <button
              className="bg-teal-500 hover:bg-teal-600 px-4 mx-2 py-2 rounded-md md:mx-5 text-white"
              onClick={handleClose}
            >
              Cancelar
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalContacto;
