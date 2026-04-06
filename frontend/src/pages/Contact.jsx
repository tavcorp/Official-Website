const Contact = () => {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4 pt-24 pb-12">
      <div className="w-full max-w-md bg-[#1c1c1c] rounded-xl shadow-lg p-6 text-gray-200 ">

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
              className="w-full px-3 py-2 rounded bg-[#111] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded bg-[#111] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-3 py-2 rounded bg-[#111] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 rounded bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
