const Studio = () => {
  return (
    <div className="pt-24 min-h-screen w-full px-4 sm:px-8" style={{ backgroundColor: "#1B1B1B" }}>
      <div className="mx-auto w-[95%] md:w-[70%]">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ color: "#DF9931" }} data-aos="zoom-in" data-aos-delay="100" data-aos-duration="700">
            Studios
          </h1>
          <p className="text-white max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
            Our creative space where ideas, technology, and strategy come
            together to build meaningful digital experiences.
          </p>
        </div>

        {/* Our Creative Space */}
        <div className="rounded-2xl shadow-md p-4 sm:p-10 mb-20" style={{ backgroundColor: "#252525" }} data-aos="fade-up" data-aos-delay="100" data-aos-duration="700">
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{ color: "#DF9931" }}>
            Our Creative Space
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At Tavcorp, our studio is more than just an office - it’s a creative
            hub and technology playground where ideas come to life and business
            challenges are solved. Designed for collaboration and innovation,
            our space empowers our team and clients to explore, experiment, and
            achieve extraordinary results.
          </p>
        </div>

        {/* What Happens Here */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

          <div className="text-white rounded-2xl p-4 sm:p-10" style={{ backgroundColor: "#252525" }} data-aos="fade-up" data-aos-delay="100" data-aos-duration="700">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#DF9931" }}>
              What Happens Here
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our studio brings together a blend of creativity, technology, and
              strategy. From branding and digital product design to custom
              software development, this is where concepts transform into
              tangible solutions.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Every corner of our space is optimized to spark innovation and
              foster collaboration, making it a true incubator for creative
              excellence.
            </p>
          </div>

          {/* Visual / Highlight Card */}
          <div className="rounded-2xl shadow-md p-4 sm:p-10 flex flex-col justify-center" style={{ backgroundColor: "#252525" }} data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
            <h3 className="text-xl font-semibold mb-4 text-white" style={{ color: "#DF9931" }}>
              A Space Built for Innovation
            </h3>
            <p className="text-gray-300">
              Our environment encourages curiosity, experimentation, and
              forward thinking - ensuring every project benefits from fresh
              perspectives and focused execution.
            </p>
          </div>

        </div>

        {/* Why Our Studio Stands Out */}
        <div className="rounded-2xl shadow-md p-4 sm:p-10 mb-20" style={{ backgroundColor: "#252525" }} data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-8 text-center text-white" style={{ color: "#DF9931" }} data-aos="zoom-in" data-aos-delay="100" data-aos-duration="700">
            Why Our Studio Stands Out
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-gray-700 rounded-xl p-3 sm:p-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="700">
              <h4 className="font-semibold mb-2 text-white" style={{ color: "#DF9931" }}>
                Collaborative Environment
              </h4>
              <p className="text-gray-300">
                Designed to encourage teamwork, communication, and idea
                exchange across disciplines.
              </p>
            </div>

            <div className="border border-gray-700 rounded-xl p-3 sm:p-6" data-aos="fade-up" data-aos-delay="130" data-aos-duration="700">
              <h4 className="font-semibold mb-2 text-white" style={{ color: "#DF9931" }}>
                Expert Team
              </h4>
              <p className="text-gray-300">
                Skilled professionals across branding, design, and technology
                working together under one roof.
              </p>
            </div>

            <div className="border border-gray-700 rounded-xl p-3 sm:p-6" data-aos="fade-up" data-aos-delay="160" data-aos-duration="700">
              <h4 className="font-semibold mb-2 text-white" style={{ color: "#DF9931" }}>
                Innovative Processes
              </h4>
              <p className="text-gray-300">
                Streamlined workflows and cutting-edge tools to solve complex
                business problems efficiently.
              </p>
            </div>

            <div className="border border-gray-700 rounded-xl p-3 sm:p-6" data-aos="fade-up" data-aos-delay="190" data-aos-duration="700">
              <h4 className="font-semibold mb-2 text-white" style={{ color: "#DF9931" }}>
                Futuristic Design
              </h4>
              <p className="text-gray-300">
                A studio space that reflects our forward - thinking mindset and
                premium standards.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-6 sm:p-12 text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="700">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4" style={{ color: "#DF9931" }} data-aos="zoom-in" data-aos-delay="150" data-aos-duration="700">
            Step inside our studio
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-6" data-aos="fade-up" data-aos-delay="180" data-aos-duration="700">
            See how Tavcorp transforms ideas into reality through creativity,
            technology, and collaboration.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium transition" data-aos="zoom-in" data-aos-delay="210" data-aos-duration="700" onMouseEnter={(e) => { e.target.style.backgroundColor = "#DF9931"; e.target.style.color = "white"; }} onMouseLeave={(e) => { e.target.style.backgroundColor = "white"; e.target.style.color = "black"; }}>
            Visit Our Studio
          </button>
        </div>

      </div>
    </div>
  );
};

// export default Studio;


export default Studio;
