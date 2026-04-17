import { useNavigate } from "react-router-dom";


const Work = () => {
    const navigate = useNavigate();
  
  return (
    <div className="pt-24 min-h-screen w-full px-4 sm:px-8" style={{ backgroundColor: "#1B1B1B", color: "#F1F1F1" }}>
      <div className="mx-auto w-[95%] md:w-[70%]">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ color: "#DF9931" }}>
            Our Work
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We build high-quality digital products focused on performance,
            usability, and scalability. Here are some of our featured projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project Card */}
          <div className="rounded-2xl shadow-md overflow-hidden" style={{ backgroundColor: "#252525" }}>
            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: "#1B1B1B" }}>
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-3 sm:p-6">
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#DF9931" }}>
                NGO Helper Platform
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                A full-stack web application to help NGOs manage donations,
                volunteers, and campaigns securely.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#1B1B1B", color: "#DF9931" }}>
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#1B1B1B", color: "#DF9931" }}>
                  Node.js
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#1B1B1B", color: "#DF9931" }}>
                  MongoDB
                </span>
              </div>
              <button className="text-sm font-medium text-white hover:underline">
                View Project →
              </button>
            </div>
          </div>

          {/* Project Card */}
          <div className="rounded-2xl shadow-md overflow-hidden" style={{ backgroundColor: "#252525" }}>
            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: "#1B1B1B" }}>
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-3 sm:p-6">
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#DF9931" }}>
                Employee Task Manager
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                An internal tool to assign tasks, track progress, and improve
                team communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#1B1B1B", color: "#DF9931" }}>
                  MERN Stack
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#1B1B1B", color: "#DF9931" }}>
                  Tailwind
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#1B1B1B", color: "#DF9931" }}>
                  JWT Auth
                </span>
              </div>
              <button className="text-sm font-medium text-white hover:underline">
                View Project →
              </button>
            </div>
          </div>

          {/* Project Card */}
          <div className="rounded-2xl shadow-md overflow-hidden" style={{ backgroundColor: "#252525" }}>
            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: "#1B1B1B" }}>
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-3 sm:p-6">
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#DF9931" }}>
                Company Website
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                A modern, responsive website designed to showcase services and
                attract potential clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#1B1B1B", color: "#DF9931" }}>
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#1B1B1B", color: "#DF9931" }}>
                  Tailwind
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#1B1B1B", color: "#DF9931" }}>
                  SEO
                </span>
              </div>
              <button className="text-sm font-medium text-white hover:underline">
                View Project →
              </button>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Want to work with us?
          </h2>
          <p className="text-gray-400 mb-6">
            Let's build something impactful together.
          </p>
          <button 
          onClick={() => {
              navigate("/contact");
          }}
          className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition mb-10 font-medium">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default Work;
