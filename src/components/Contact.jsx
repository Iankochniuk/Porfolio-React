import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

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
        formulario,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Mensaje enviado correctamente");

      setFormulario({
        nombre: "",
        email: "",
        mensaje: "",
      });
    } catch {
      toast.error("No se pudo enviar el mensaje");
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-2 gap-16 items-start"
      >
        {/* IZQUIERDA */}

        <div>
          <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-4">
            Contacto
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            ¿Trabajamos juntos?
          </h2>

          <p className="mt-8 text-zinc-400 leading-8 text-lg">
            Actualmente estoy buscando nuevas oportunidades como
            <span className="text-white font-medium">
              {" "}
              Full Stack Developer
            </span>
            . Si creés que mi perfil puede aportar valor a tu equipo, estaré
            encantado de conversar.
          </p>

          <div className="mt-12 space-y-6">
            <a
              href="mailto:ianisaias@gmail.com"
              className="flex items-center gap-4 text-zinc-400 hover:text-white transition"
            >
              <FiMail size={22} />
              ianisaias@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/ian-isa%C3%ADas-kochniuk/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-zinc-400 hover:text-white transition"
            >
              <FiLinkedin size={22} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Iankochniuk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-zinc-400 hover:text-white transition"
            >
              <FiGithub size={22} />
              GitHub
            </a>
          </div>
        </div>

        {/* DERECHA */}

        <form
          onSubmit={enviarFormulario}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="space-y-6">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-4 outline-none transition focus:border-zinc-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formulario.email}
              onChange={manejarCambio}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-4 outline-none transition focus:border-zinc-500"
            />

            <textarea
              rows={6}
              name="mensaje"
              placeholder="Contame sobre tu proyecto..."
              value={formulario.mensaje}
              onChange={manejarCambio}
              className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-4 outline-none transition focus:border-zinc-500"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl bg-white py-4 font-semibold text-black"
            >
              Enviar mensaje
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
