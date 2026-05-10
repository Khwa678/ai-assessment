import { motion } from "framer-motion";

const Button = ({
  children,
  type = "button",
  className = "",
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;