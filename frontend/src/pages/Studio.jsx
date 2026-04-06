const Studio = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Studios
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our creative space where ideas, technology, and strategy come
            together to build meaningful digital experiences.
          </p>
        </div>

        {/* Our Creative Space */}
        <div className="bg-white rounded-2xl shadow-md p-10 mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            Our Creative Space
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Tavcorp, our studio is more than just an office - it’s a creative
            hub and technology playground where ideas come to life and business
            challenges are solved. Designed for collaboration and innovation,
            our space empowers our team and clients to explore, experiment, and
            achieve extraordinary results.
          </p>
        </div>

        {/* What Happens Here */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

          <div className="bg-black text-white rounded-2xl p-10">
            <h2 className="text-2xl font-semibold mb-4">
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
          <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">
              A Space Built for Innovation
            </h3>
            <p className="text-gray-600">
              Our environment encourages curiosity, experimentation, and
              forward thinking - ensuring every project benefits from fresh
              perspectives and focused execution.
            </p>
          </div>

        </div>

        {/* Why Our Studio Stands Out */}
        <div className="bg-white rounded-2xl shadow-md p-10 mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Why Our Studio Stands Out
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6">
              <h4 className="font-semibold mb-2">
                Collaborative Environment
              </h4>
              <p className="text-gray-600">
                Designed to encourage teamwork, communication, and idea
                exchange across disciplines.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h4 className="font-semibold mb-2">
                Expert Team
              </h4>
              <p className="text-gray-600">
                Skilled professionals across branding, design, and technology
                working together under one roof.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h4 className="font-semibold mb-2">
                Innovative Processes
              </h4>
              <p className="text-gray-600">
                Streamlined workflows and cutting-edge tools to solve complex
                business problems efficiently.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h4 className="font-semibold mb-2">
                Futuristic Design
              </h4>
              <p className="text-gray-600">
                A studio space that reflects our forward - thinking mindset and
                premium standards.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black text-white rounded-2xl p-12 text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Step inside our studio
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            See how Tavcorp transforms ideas into reality through creativity,
            technology, and collaboration.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Visit Our Studio
          </button>
        </div>

      </div>
    </div>
  );
};

// export default Studio;


export default Studio;
