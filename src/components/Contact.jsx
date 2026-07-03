import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const enviarFormulario = async (e) => {
    e.preventDefault();

    if (
      !formulario.nombre.trim() ||
      !formulario.email.trim() ||
      !formulario.mensaje.trim()
    ) {
      toast.error("Completa todos los campos");
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre: formulario.nombre,
          email: formulario.email,
          mensaje: formulario.mensaje,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Mensaje enviado correctamente");

      setFormulario({
        nombre: "",
        email: "",
        mensaje: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("No se pudo enviar el mensaje");
    }
  };

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-10 text-center">Contacto</h2>

      <form onSubmit={enviarFormulario} className="space-y-6">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
          className="w-full bg-slate-800 rounded-lg p-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formulario.email}
          onChange={manejarCambio}
          className="w-full bg-slate-800 rounded-lg p-4"
        />

        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje..."
          rows="6"
          value={formulario.mensaje}
          onChange={manejarCambio}
          className="w-full bg-slate-800 rounded-lg p-4"
        />

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-lg font-semibold"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
