import { useState } from "react";

const CONTACT_API =
  import.meta.env.VITE_API_URL_CONTACT ||
  (import.meta.env.MODE === "development"
    ? "http://localhost:4000/contact_form"
    : "/contact_form");

const defaultContactFormData = {
  username: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${CONTACT_API}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Reset form after successful submission
      setContact(defaultContactFormData);

      console.log(data);
      alert("Message sent successfully");
    } catch (error) {
      console.log(error);
      alert("Message not successful");
    }
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center px-4 pt-24 pb-12">
      <div className="w-full max-w-md bg-[#252525] rounded-xl shadow-lg p-6 text-[#F1F1F1]">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-white">
          Contact Us
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              required
              type="text"
              name="username"
              value={contact.username}
              onChange={handleInput}
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded bg-[#1B1B1B] border border-[#DF9931] focus:outline-none focus:ring-2 focus:ring-[#DF9931]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={contact.email}
              onChange={handleInput}
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded bg-[#1B1B1B] border border-[#DF9931] focus:outline-none focus:ring-2 focus:ring-[#DF9931]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Subject
            </label>
            <textarea
              required
              name="subject"
              value={contact.subject}
              onChange={handleInput}
              placeholder="Enter subject"
              className="w-full px-3 py-2 rounded bg-[#1B1B1B] border border-[#DF9931] focus:outline-none focus:ring-2 focus:ring-[#DF9931] resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              required
              name="message"
              value={contact.message}
              onChange={handleInput}
              placeholder="Your message..."
              rows="5"
              className="w-full px-3 py-2 rounded bg-[#1B1B1B] border border-[#DF9931] focus:outline-none focus:ring-2 focus:ring-[#DF9931] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 rounded bg-[#DF9931] text-[#1B1B1B] font-semibold hover:bg-[#E8A649] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;