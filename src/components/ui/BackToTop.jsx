import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={volverArriba}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          whileHover={{
            scale: 1.08,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="fixed bottom-20 right-8 z-[999] flex h-14 w-14 items-center justify-center rounded-full border border-zinc-700 hover:bg-zinc-900/70 backdrop-blur-xl text-white shadow-[0_10px_40px_rgba(0,0,0,.45)] transition hover:border-zinc-500"
        >
          <FiArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
