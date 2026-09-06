import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#09090B]">
      {/* Luz izquierda */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 50, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-52 -left-52 h-[650px] w-[650px] rounded-full bg-white/[0.035] blur-[200px]"
      />

      {/* Luz derecha */}
      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-52 -right-52 h-[700px] w-[700px] rounded-full bg-white/[0.025] blur-[220px]"
      />

      {/* Pequeña luz central */}
      <motion.div
        animate={{
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[140px]"
      />

      {/* Grid muy sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}

export default Background;
