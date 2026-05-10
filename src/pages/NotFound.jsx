import { Link } from "react-router-dom";

import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#030014] text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-[180px] font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        404
      </h1>

      <p className="text-gray-400 text-xl mt-4">
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="mt-10">
        <Button>
          Go Back Home
        </Button>
      </Link>

    </div>
  );
};

export default NotFound;