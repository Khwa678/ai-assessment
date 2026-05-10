import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">

      <Navbar />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <section className="max-w-7xl mx-auto px-6 pt-40 pb-24 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm">
              AI Powered Assessment Platform
            </span>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mt-8">
              Premium{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AI Assessment
              </span>{" "}
              Experience
            </h1>

            <p className="text-gray-300 text-lg mt-8 leading-relaxed">
              Analyze user skills with AI powered assessments,
              dynamic reports, advanced analytics and beautiful
              visual dashboards.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link to="/assessment">
                <Button>
                  Get Started
                </Button>
              </Link>

              <a href="#features">
                <Button className="bg-white/10 border border-white/10">
                  Explore Features
                </Button>
              </a>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <Card className="p-10">

              <div className="space-y-5">

                <div className="h-4 rounded-full bg-cyan-500/50 w-2/3"></div>

                <div className="h-4 rounded-full bg-purple-500/50 w-full"></div>

                <div className="h-4 rounded-full bg-pink-500/50 w-1/2"></div>

              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">

                <Card>
                  <h3 className="text-5xl font-bold">
                    98%
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Accuracy
                  </p>
                </Card>

                <Card>
                  <h3 className="text-5xl font-bold">
                    10K+
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Users
                  </p>
                </Card>

              </div>

            </Card>

          </motion.div>

        </div>

      </section>

      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="grid md:grid-cols-3 gap-8">

          <Card>
            <h2 className="text-2xl font-bold">
              Dynamic Reports
            </h2>

            <p className="text-gray-400 mt-4">
              AI generated PDF reports with analytics.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold">
              Smart Analytics
            </h2>

            <p className="text-gray-400 mt-4">
              Visual insights with charts and graphs.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold">
              Responsive UI
            </h2>

            <p className="text-gray-400 mt-4">
              Premium mobile, tablet and desktop experience.
            </p>
          </Card>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default Home;