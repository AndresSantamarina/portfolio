import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export const useContactForm = () => {
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        formRef.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => {
          Swal.fire({
            title: 'Mensaje enviado!',
            text: 'El email fue enviado correctamente',
            icon: 'success',
          });
          reset();
          return true;
        },
        () => {
          Swal.fire({
            title: 'Ocurrió un error',
            text: 'El email no pudo ser enviado, intente esta operación en unos minutos.',
            icon: 'error',
          });
          return false;
        }
      );
  };

  return {
    formRef,
    register,
    handleSubmit: handleSubmit(sendEmail),
    errors,
  };
};