import { IoIosArrowForward } from "react-icons/io";
import { articlesData } from "../../data/articlesData";
import ArticleCard from "../ui/ArticleCard";

const ArticlesSection = () => {
  return (
    <article>
      <section id="articles" className="py-4 bg-[#2a2929] text-white">

        {/* Header Row */}
        <div className="container mx-auto px-4 py-4 flex items-center justify-between mb-4">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Our <span className="font-caveat text-yellow-400">
              Articles
            </span>
          </h2>

          {/* Button */}
          <a
            href="/articles"
            className="
      bg-[#45414a]
      rounded-2xl
      px-3 py-2 sm:px-6
      flex items-center justify-center
      text-white font-medium
      hover:bg-[#5a5661]
      transition
    "
          >
            {/* Text → hidden on small screens */}
            <span className="hidden sm:inline">
              see all articles
            </span>

            {/* Icon → always visible */}
            <IoIosArrowForward className="text-lg sm:ml-2" />
          </a>

        </div>


        {/* Cards Section */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-6 px-8">
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

      </section>
    </article>
  );
};

export default ArticlesSection;
