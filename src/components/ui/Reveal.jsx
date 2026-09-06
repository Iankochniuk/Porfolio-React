import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
