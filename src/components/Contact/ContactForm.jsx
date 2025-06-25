import Form from "react-bootstrap/Form";
import { useContactForm } from "./useContactForm";

const ContactForm = ({ onCancel }) => {
  const { formRef, register, handleSubmit, errors } = useContactForm();

  return (
    <Form ref={formRef} onSubmit={handleSubmit} className="formContacto">
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
        <Form.Text className="text-danger">{errors.message?.message}</Form.Text>
      </Form.Group>

      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-md text-white transition-colors"
          type="submit"
        >
          Enviar
        </button>
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-md text-white transition-colors"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </Form>
  );
};

export default ContactForm;
