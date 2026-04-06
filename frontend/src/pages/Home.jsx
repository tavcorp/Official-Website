import Hero from "../components/hero/Hero";
import Hero1 from "../components/hero/Hero1";
import Featured from "../components/featured/featured";
import OurServices from "../components/ourServices/OurServices";
import Testimonials from "../components/testimonials/Testimonials";
import ServicesPlan from "../components/servicesPlan/ServicesPlan";
import PricingCards from "../components/pricing/PricingSection";
import FaqAccordion from "../components/faq/FaqAccordion";
import ArticlesPreview from "../components/articles/ArticlesPreview";



const Home = () => {
  return (
    <>
      <Hero1 />
      <Hero />
      <Featured />
      <OurServices />
      <Testimonials />
      <ServicesPlan />
      <PricingCards />
      <FaqAccordion />
      <ArticlesPreview />
    </>
  );
};

export default Home;
