import { pricingPlans } from "../../data/pricingData";
import PricingCard from "../ui/PricingCard";
import { useNavigate } from "react-router-dom";


const PricingSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6" data-aos="fade-up">

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" data-aos="fade-up">
        {pricingPlans.map((plan, index) => (
          <div key={plan.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
      
      {/* Bottom CTA */}
      <div className="mt-6 sm:mt-8 text-gray-400 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-center" data-aos="fade-up" data-aos-delay="300">
        <p className="text-sm sm:text-base">
          Can't find your plan! Want to setup a tailor-plan for only you? 
        </p>
        <button
          onClick={() => {
            navigate("/contact");         
          }}
          className="text-[#DF9931] underline text-sm sm:text-base"
        >Contact Us</button>
        {/* <a 
          href="/contact" className="text-[#DF9931] underline text-sm sm:text-base"
        > */}
          {/* <Link to="/contact">Contact Us</Link> */}
        {/* </a> */}
      </div>
    </div>
  );
};

export default PricingSection;
