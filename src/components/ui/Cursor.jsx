import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 300,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 300,
    damping: 25,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      className="hidden lg:block fixed top-0 left-0 w-5 h-5 rounded-full border border-white/40 pointer-events-none z-[999]"
    />
  );
}

export default Cursor;
