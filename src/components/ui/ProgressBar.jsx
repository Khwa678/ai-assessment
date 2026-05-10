import { motion } from "framer-motion";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4 }}
        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
      />
    </div>
  );
};

export default ProgressBar;