import { useState } from "react";
import { CheckCircle, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setToast({
      show: true,
      message: "Sending your message...",
      type: "info"
    });

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

      const submittedName = contact.username;
      
      // Reset form after successful submission
      setContact(defaultContactFormData);

      console.log(data);
      setToast({ 
        show: true, 
        message: `Thank you ${submittedName}! Your message has been sent successfully.`,
        type: "success" 
      });
      setTimeout(() => setToast({ show: false, message: "", type: "success" }), 5000);
    } catch (error) {
      console.log(error);
      setToast({ 
        show: true, 
        message: "Sorry, your message could not be sent. Please try again.",
        type: "error" 
      });
      setTimeout(() => setToast({ show: false, message: "", type: "error" }), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center px-4 pt-24 pb-12 relative overflow-hidden">
      
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
            disabled={isLoading}
            className={`w-full py-2 mt-2 rounded font-semibold transition ${
              isLoading 
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                : 'bg-[#DF9931] text-[#1B1B1B] hover:bg-[#E8A649]'
            }`}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;