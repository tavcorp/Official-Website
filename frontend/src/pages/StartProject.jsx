import { useState } from "react";
import { CheckCircle, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const START_PROJECT_API =
  import.meta.env.VITE_API_URL_START_PROJECT ||
  (import.meta.env.MODE === "development"
    ? "http://localhost:4000/start_Project"
    : "/start_Project");

export default function ProjectInquiryForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const servicesList = [
    "Branding & Brand Identity",
    "Design",
    "Website Development",
    "Automation",
    "Coding & Development",
    "Custom Software Development",
    "3D Design & Visualization",
    "Digital Product Development",
    "Consulting",
    "Social Media Marketing",
  ];



  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    services: [],
    description: "",
    timeline: "",
  });

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (loading) return;

    if (formData.services.length === 0) {
      setToast({
        show: true,
        message: "Please select at least one service.",
        type: "error"
      });
      setTimeout(() => setToast({ show: false, message: "", type: "error" }), 5000);
      return;
    }

    try {
      setLoading(true);
      setToast({
        show: true,
        message: "Sending your inquiry...",
        type: "info"
      });

      const response = await fetch(
        `${START_PROJECT_API}/project-ideas`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setToast({ 
        show: true, 
        message: "Project inquiry submitted successfully!",
        type: "success" 
      });
      setTimeout(() => setToast({ show: false, message: "", type: "success" }), 5000);

      setFormData({
        name: "",
        company: "",
        email: "",
        services: [],
        description: "",
        timeline: "",
      });
    } catch (error) {
      console.error(error);
      setToast({ 
        show: true, 
        message: error.message || "Submission failed. Please try again.",
        type: "error" 
      });
      setTimeout(() => setToast({ show: false, message: "", type: "error" }), 5000);
    } finally {
      setLoading(false);
    }
  };




  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-10 ">
      
      {/* Toast Notification */}
      <div className="fixed top-24 left-0 right-0 md:left-auto md:right-8 z-50 flex justify-center md:block px-4 pointer-events-none">
        <AnimatePresence>
          {toast.show && (
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-md md:w-[400px] pointer-events-auto"
            >
              <div className={`flex items-center w-full bg-[#252525] rounded-xl shadow-2xl overflow-hidden border ${toast.type === 'error' ? 'border-red-500/30' : 'border-[#333]'}`}>
              {/* Left Accent Border */}
              <div className={`w-2 self-stretch ${toast.type === 'error' ? 'bg-red-500' : 'bg-[#DF9931]'}`}></div>
              
              {/* Icon & Message */}
              <div className="flex items-center px-4 py-3 flex-1">
                {toast.type === 'error' && <X className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />}
                {toast.type === 'info' && <Info className="w-6 h-6 text-[#DF9931] mr-3 flex-shrink-0 animate-pulse" />}
                {toast.type === 'success' && <CheckCircle className="w-6 h-6 text-[#DF9931] mr-3 flex-shrink-0" />}
                <span className="text-sm sm:text-base font-medium text-[#F1F1F1] leading-tight">
                  {toast.message}
                </span>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setToast({ show: false, message: "", type: toast.type })}
                className="px-4 py-3 text-gray-400 hover:text-[#DF9931] transition-colors"
                aria-label="Close notification"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 space-y-8 mt-10">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Start Your Project</h1>
          <p className="text-gray-600">We're excited to learn about your project.</p>
          <p className="text-gray-600 mb-2">Whether you're building a brand, developing a digital product, or solving a complex business challenge, this is the first step toward working together.</p>
          <p className="text-gray-600">
            Tell us a bit about what you’re looking to create, and we’ll take it from there.
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-6">

          <span className="text-2xl font-bold">Project Inquiry Form</span>

          {/* Name & Company */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company / Brand Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          {/* Services */}
          <div>
            <p className="font-medium mb-3">Service(s) Needed</p>
            <div className="grid md:grid-cols-2 gap-3">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => toggleService(service)}
                    className="accent-black"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <textarea
            name="description"
            placeholder="Briefly describe your project, goals, and challenges"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          {/* Timeline */}
          <div>
            <p className="font-medium mb-2">Timeline</p>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            >
              <option value="">Select timeline</option>
              <option value="ASAP">ASAP</option>
              <option value="1–3 months">1–3 months</option>
              <option value="3–6 months">3–6 months</option>
              <option value="Flexible">Flexible / Not sure</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Project Inquiry"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-sm text-gray-500 space-y-2">
          <p className="font-medium">What Happens Next</p>
          <ul className="list-disc list-inside">
            <li>We’ll review your inquiry carefully</li>
            <li>If we’re a good fit, we’ll reach out</li>
            <li>Project scope, timelines, and pricing will be clarified</li>
          </ul>
          <p>We aim to respond within <strong>24–48 hours</strong>.</p>
        </div>

      </div>
    </div>
  );
}
