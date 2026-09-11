import React, { useState } from "react";
import { featuredNews, newsData } from "../data/newsData";

const News = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-24 min-h-screen w-full px-4 sm:px-8" style={{ backgroundColor: "#1B1B1B", color: "#F1F1F1" }}>
      <div className="mx-auto w-[95%] md:w-[70%]">

        {/* Header */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ color: "#DF9931" }} data-aos="zoom-in" data-aos-delay="100">
            Latest News & Updates
          </h1>
          <p className="text-white max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Stay updated with our latest announcements, product updates,
            achievements, and insights from our team.
          </p>
        </div>

        {/* Featured News */}
        {featuredNews && (
          <div className="rounded-2xl shadow-md overflow-hidden mb-12" style={{ backgroundColor: "#252525" }} data-aos="fade-up" data-aos-delay="100">
            <div className="p-4 sm:p-8">
              <span className="text-sm text-gray-400">{featuredNews.date}</span>
              <h2 className="text-2xl font-bold mt-2 mb-4" style={{ color: "#DF9931" }}>
                {featuredNews.title}
              </h2>
              <p className="text-gray-300 mb-6">
                {featuredNews.description}
              </p>
            </div>
          </div>
        )}

        {/* News List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.map((item, index) => (
            <div
              key={item.id}
              className="rounded-xl shadow-md p-3 sm:p-6 flex flex-col justify-between"
              style={{ backgroundColor: "#252525" }}
              data-aos="slide-up"
              data-aos-delay={`${100 * (index + 1)}`}
            >
              <div>
                <span className="text-xs text-gray-400">{item.date}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3" style={{ color: "#DF9931" }}>
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Expanded full content */}
                {item.content && expandedId === item.id && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                    {item.content.map((paragraph, pIdx) => {
                      const isHeading =
                        paragraph === paragraph.toUpperCase() &&
                        paragraph.length < 60 &&
                        !paragraph.includes(".");
                      return isHeading ? (
                        <h4
                          key={pIdx}
                          className="text-sm font-bold tracking-wider pt-2"
                          style={{ color: "#DF9931" }}
                        >
                          {paragraph}
                        </h4>
                      ) : (
                        <p key={pIdx} className="text-gray-300 text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Read More / Read Less button */}
              {item.content && (
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="text-sm font-semibold hover:underline mt-4 inline-flex items-center gap-1 cursor-pointer transition-colors w-fit"
                  style={{ color: "#DF9931" }}
                >
                  {expandedId === item.id ? "Read Less ▲" : "Read More →"}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#DF9931" }} data-aos="zoom-in" data-aos-delay="200">
            Never miss an update
          </h2>
          <p className="text-white mb-6" data-aos="fade-up" data-aos-delay="250">
            Subscribe to get the latest news delivered directly to your inbox.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg transition mb-10" data-aos="zoom-in" data-aos-delay="300" onMouseEnter={(e) => { e.target.style.backgroundColor = "#DF9931"; e.target.style.color = "white"; }} onMouseLeave={(e) => { e.target.style.backgroundColor = "white"; e.target.style.color = "black"; }}>
            Subscribe Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default News;
