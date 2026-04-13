import { IoIosArrowForward } from "react-icons/io";
import { articlesData } from "../../data/articlesData";
import ArticleCard from "../ui/ArticleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const ArticlesSection = () => {
  return (
    <article>
      <section id="articles" className="py-20 bg-[#262626] text-white">
        <div className="w-[90%] lg:w-[68%] mx-auto" data-aos="fade-up">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-6">
            {/* Heading */}
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Our <span 
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 600
                }}
                className="text-[#DF9931] capitalize text-4xl sm:text-5xl md:text-6xl"
              >Articles</span>
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

          {/* Desktop Cards Section */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6" data-aos="fade-up">
            {articlesData.map((item, index) => (
              <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <ArticleCard
                  experience={item.experience}
                  date={item.date}
                  title={item.title}
                  image={item.image}
                />
              </div>
            ))}
          </div>

          {/* Mobile Swiper Section */}
          <div className="block md:hidden w-full overflow-hidden mt-6" data-aos="fade-up">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1.15}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="articles-mobile-swiper pb-4"
            >
              {articlesData.map((item) => (
                <SwiperSlide key={item.id}>
                  <ArticleCard
                    experience={item.experience}
                    date={item.date}
                    title={item.title}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ArticlesSection;
