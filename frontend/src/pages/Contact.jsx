const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center px-4 pt-24 pb-12">
      <div className="w-full max-w-md bg-[#252525] rounded-xl shadow-lg p-6 text-[#F1F1F1] ">

        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Contact Us
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded bg-[#1B1B1B] border border-[#DF9931] focus:outline-none focus:ring-2 focus:ring-[#DF9931]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded bg-[#1B1B1B] border border-[#DF9931] focus:outline-none focus:ring-2 focus:ring-[#DF9931]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              subject
            </label>
            <textarea
              rows="1"
              placeholder="Your Message"
              className="w-full px-3 py-2 rounded bg-[#1B1B1B] border border-[#DF9931] focus:outline-none focus:ring-2 focus:ring-[#DF9931] resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
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
