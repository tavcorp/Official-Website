const ArticleCard = ({ experience, date, title, image }) => {
  return (
    <div className="flex flex-col group cursor-pointer h-full">
      <div className="w-full h-[1px] bg-white/30 mb-5 transition-colors duration-300 group-hover:bg-white/50" />

      <div className="flex items-center text-xs md:text-sm mb-4 font-medium tracking-wide">
        <span className="font-bold text-white tracking-normal mr-3">{experience}</span>
        <span className="text-white/60">/ &nbsp; {date}</span>
      </div>

      <h3 className="text-[22px] md:text-2xl font-bold text-white mb-6 leading-snug tracking-tight">
        {title}
      </h3>

      <div className="mt-auto w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ArticleCard;
