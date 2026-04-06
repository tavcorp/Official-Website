import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 – Page Not Found";

    const timer = setTimeout(() => {
      navigate("/");
    }, 50000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <img
        src="/images/404-illustration.jpg"
        alt="Page not found"
        className="w-64 mb-6"
      />

      <h1 className="text-4xl font-bold mb-3">
        Looks like you’re off course
      </h1>

      <p className="text-gray-600 mb-6 max-w-md">
        The page you’re looking for doesn’t exist. You’ll be redirected home in a
        few seconds — or you can start something new right now.
      </p>

      <div className="flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
        >
          Go Home
        </Link>

        <Link
          to="/start-project"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Start a Project
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
