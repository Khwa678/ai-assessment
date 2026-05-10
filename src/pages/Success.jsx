import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Button from "../components/ui/Button";

const Success = () => {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <Navbar />

      <div className="flex items-center justify-center min-h-screen px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-12 text-center max-w-xl"
        >

          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto text-5xl">
            ✓
          </div>

          <h1 className="text-5xl font-bold mt-8">
            Assessment Submitted
          </h1>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Your assessment has been successfully submitted and your report has been emailed.
          </p>

          <Button className="mt-8">
            Back To Home
          </Button>

        </motion.div>

      </div>
    </div>
  );
};

export default Success;