'use client';

import React, { useRef } from "react";
import "./stylecontact.scss"; 
import 'bootstrap/scss/bootstrap.scss';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_5sp9zbk',        // ID del servicio que has configurado en EmailJS
          'template_dd9wbs8',       // ID de la plantilla de correo que has configurado en EmailJS
          form.current,             // El formulario actual
          'xTJcrwsYQM-yeb82R'      // Tu clave pública (API Key) de EmailJS
        )
        .then(
          () => {
            console.log('SUCCESS!');
            // Aquí puedes agregar un mensaje de éxito
          },
          (error) => {
            console.log('FAILED...', error.text);
            // Aquí puedes agregar un mensaje de error
          }
        );
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contacto</h2>
      <p className="text text-center">Enviame tu propuesta y hagamos el proyecto ¡Ahora!</p>
      <form
        className="bg-blue-100 p-6 contact-form"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="Ingrese su nombre"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Ingrese su apellido"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Ingrese su correo"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={4}
            placeholder="Escribe tu mensaje"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
}
