import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          AI Assess
        </Link>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link to="/">Home</Link>
          <Link to="/assessment">Assessment</Link>
          <Link to="/results">Results</Link>
        </div>

        <Button>
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;