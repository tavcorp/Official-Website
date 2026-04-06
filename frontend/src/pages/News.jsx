const News = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest announcements, product updates,
            achievements, and insights from our team.
          </p>
        </div>

        {/* Featured News */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
          {/* 
          <div className="h-56 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Featured Image</span>
          </div>
          */}
          <div className="p-8">
            <span className="text-sm text-gray-500">July 2023</span>
            <h2 className="text-2xl font-bold mt-2 mb-4">
              Tavcorp Officially Launches Its Creative & Tech Studio 🚀
            </h2>
            <p className="text-gray-600 mb-6">
              Tavcorp formally opened its creative studio in Abuja, marking the beginning of a new era in branding, design, and digital product development. The launch reflects the company’s commitment to helping businesses solve design and technology challenges through innovation, strategy, and craftsmanship. Tavcorp now serves brands locally and globally with integrated creative and technical solutions.
            </p>
            <button className="text-black font-medium hover:underline">
              Read Full Story →
            </button>
          </div>
        </div>

        {/* News List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* News Item */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-xs text-gray-500">Ongoing</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">
              Tavcorp Expands Its Digital Product Capabilities
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Tavcorp continues to deepen its expertise in automation, custom software development, and website design, strengthening its position as a full-service creative and technology studio. The company is focused on building scalable digital products that improve business efficiency, customer experience, and long-term brand value.
            </p>
            <button className="text-sm font-medium text-black hover:underline">
              Read More →
            </button>
          </div>

          {/* News Item */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-xs text-gray-500">Ongoing</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">
              Tavcorp Strengthens Its Collaborative Studio Model
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Built as both a creative space and tech hub, the Tavcorp studio is designed to foster collaboration, experimentation, and problem-solving. By combining an expert team with innovative processes, the studio supports brands from strategy to execution, ensuring every project is intentional, functional, and visually compelling.
            </p>
            <button className="text-sm font-medium text-black hover:underline">
              Read More →
            </button>
          </div>

          {/* News Item */}
          {/* <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-xs text-gray-500">October 2025</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">
              Awarded for Innovation in Web Development
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Our studio was recognized for building scalable and impactful web
              solutions across multiple industries.
            </p>
            <button className="text-sm font-medium text-black hover:underline">
              Read More →
            </button>
          </div> */}

          {/* News Item */}
          {/* <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-xs text-gray-500">September 2025</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">
              Expanding Our Team 🎉
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We welcomed new developers and designers to strengthen our product
              and innovation efforts.
            </p>
            <button className="text-sm font-medium text-black hover:underline">
              Read More →
            </button>
          </div> */}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Never miss an update
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to get the latest news delivered directly to your inbox.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition mb-10">
            Subscribe Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default News;
