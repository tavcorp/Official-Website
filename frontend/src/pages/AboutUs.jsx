const AboutUs = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Tavcorp
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A creative and technology - driven studio building brands,
            systems, and digital products that create lasting value.
          </p>
        </div>

        {/* Who We Are & What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

          {/* Who We Are */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Tavcorp is a creative and technology-driven studio based in Abuja,
              Nigeria, founded on July 28th, 2023. We work at the intersection of
              branding, design, and technology, helping businesses build strong
              identities and digital products that create lasting value.
            </p>
            <p className="text-gray-600">
              Our work is rooted in clarity, strategy, and execution - ensuring
              every solution we deliver serves a real business purpose.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 mb-6">
              We provide end-to-end creative and tech solutions tailored to
              modern businesses.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li>• Branding and brand identity design</li>
              <li>• Digital and product design</li>
              <li>• Website design and development</li>
              <li>• Automation and workflow solutions</li>
              <li>• Coding and custom software development</li>
              <li>• 3D design and visual experiences</li>
              <li>• Consulting and digital product development</li>
            </ul>

            <p className="text-gray-600 mt-6">
              We focus on branding and digital product development, delivering
              solutions that are functional, scalable, and visually compelling.
            </p>
          </div>

        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <div className="bg-black text-white rounded-2xl p-10">
            <h2 className="text-2xl font-semibold mb-4">
              Our Approach
            </h2>
            <p className="text-gray-300 mb-4">
              At Tavcorp, our goal isn’t just to make sales - it’s to build
              customers and keep them satisfied. We believe strong design and
              smart technology solve real business problems, elevate brand
              value, and create meaningful customer experiences.
            </p>
            <p className="text-gray-300">
              We don’t do guesswork. We identify design and system gaps, fix them
              with clarity and precision, and deliver results that help
              businesses grow with confidence.
            </p>
          </div>
        </div>

        {/* Who We Work With */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            Who We Work With
          </h2>
          <p className="text-gray-600">
            We work with all brands and customers - from startups to established
            businesses - both locally and internationally. If you’re looking to
            refine your brand, build a digital product, or solve design and
            technology challenges, Tavcorp is built for you.
          </p>
        </div>

        {/* Why Tavcorp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Why Tavcorp
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Professional yet creative execution</li>
              <li>• Bold ideas backed by strategy and technology</li>
              <li>• A warm, collaborative working process</li>
              <li>• Focus on long-term value, not short-term wins</li>
            </ul>
          </div>

          {/* CTA Card */}
          <div className="bg-black text-white rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              Let’s build something meaningful.
            </h3>
            <p className="text-gray-300 mb-6">
              Work with Tavcorp and turn your ideas into impactful digital
              products and experiences.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition w-fit">
              Work with Tavcorp
            </button>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 text-center">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-3xl font-bold">20+</h4>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-3xl font-bold">10+</h4>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-3xl font-bold">3+</h4>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-3xl font-bold">100%</h4>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
