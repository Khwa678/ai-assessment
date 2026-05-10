import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;