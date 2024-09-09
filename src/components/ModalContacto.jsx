import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function ModalContacto() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const servicio = import.meta.env.VITE_SERVICE_KEY;
  const template = import.meta.env.VITE_TEMPLATE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(servicio, template, form.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          Swal.fire({
            title: "Mensaje enviado!",
            text: `El email fue enviado correctamente`,
            icon: "success",
          });
          handleClose();
          reset();
        },
        (error) => {
          Swal.fire({
            title: "Ocurrió un error",
            text: `El email no pudo ser enviado, intente esta operación en unos minutos.`,
            icon: "error",
          });
        }
      );
  };

  return (
    <>
      <button
        className="bg-gradient-to-r from-cyan-700 to-teal-400 text-white px-4 mx-2 py-2 rounded-md md:mx-5 btnContacto"
        onClick={handleShow}
      >
        Contacto
      </button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-teal-600">Contactame!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="formContacto"
          >
            <Form.Group className="mb-3" controlId="nombreInput">
              <Form.Label>Ingresa tu nombre</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Tu nombre"
                autoFocus
                {...register("user_name", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener como mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 40,
                    message: "El nombre debe tener como máximo 40 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.user_name?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="mailInput">
              <Form.Label>Ingresa tu mail</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="nombre@gmail.com"
                {...register("user_email", {
                  required: "El mail es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Debe ingresar una dirección de correo válida",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.user_email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="mensajeInput">
              <Form.Label>Ingresá tu mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                {...register("message", {
                  required: "El mensaje es obligatorio",
                  minLength: {
                    value: 5,
                    message: "El mensaje debe tener como mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 200,
                    message: "El mensaje debe tener como máximo 200 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.message?.message}
              </Form.Text>
            </Form.Group>
            <button
              className="bg-teal-500 hover:bg-teal-600 px-4 mx-2 py-2 rounded-md md:mx-5 text-white"
              type="submit"
              value="Send"
              onClick={handleSubmit(sendEmail)}
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
