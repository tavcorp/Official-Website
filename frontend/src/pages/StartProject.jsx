import { useState } from "react";

export default function ProjectInquiryForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-10 ">
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
          />

          {/* Timeline */}
          <div>
            <p className="font-medium mb-2">Timeline</p>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
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
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Submit Project Inquiry
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
