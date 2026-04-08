import { IoIosArrowForward } from "react-icons/io";
import { articlesData } from "../../data/articlesData";
import ArticleCard from "../ui/ArticleCard";

const ArticlesSection = () => {
  return (
    <article>
      <section id="articles" className="py-20 bg-[#262626] text-white">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-6">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Our <span className="text-[#DF9931] capitalize" style={{ fontFamily: "'Brush Script MT', 'Cedarville Cursive', cursive", fontWeight: 400 }}>Articles</span>
            </h2>

            {/* Button */}
            <a
              href="/articles"
              className="
        inline-flex items-center justify-center
        border border-[#DF9931] text-[#DF9931]
        rounded-full
        px-4 py-2 sm:px-5 sm:py-2.5
        font-bold text-base sm:text-lg
        hover:bg-[#DF9931] hover:text-[#1B1B1B]
        transition duration-300 w-fit
      "
            >
              See all articles
              <IoIosArrowForward className="text-xl ml-2" />
            </a>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.map((item) => (
              <ArticleCard
                key={item.id}
                experience={item.experience}
                date={item.date}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default ArticlesSection;
