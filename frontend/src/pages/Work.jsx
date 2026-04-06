import { useNavigate } from "react-router-dom";


const Work = () => {
    const navigate = useNavigate();
  
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Work
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We build high-quality digital products focused on performance,
            usability, and scalability. Here are some of our featured projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                NGO Helper Platform
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A full-stack web application to help NGOs manage donations,
                volunteers, and campaigns securely.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  MongoDB
                </span>
              </div>
              <button className="text-sm font-medium text-black hover:underline">
                View Project →
              </button>
            </div>
          </div>

          {/* Project Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Employee Task Manager
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                An internal tool to assign tasks, track progress, and improve
                team communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  MERN Stack
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  JWT Auth
                </span>
              </div>
              <button className="text-sm font-medium text-black hover:underline">
                View Project →
              </button>
            </div>
          </div>

          {/* Project Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Company Website
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A modern, responsive website designed to showcase services and
                attract potential clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  SEO
                </span>
              </div>
              <button className="text-sm font-medium text-black hover:underline">
                View Project →
              </button>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Want to work with us?
          </h2>
          <p className="text-gray-600 mb-6">
            Let’s build something impactful together.
          </p>
          <button 
          onClick={() => {
              navigate("/contact");
          }}
          className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition mb-10">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default Work;
