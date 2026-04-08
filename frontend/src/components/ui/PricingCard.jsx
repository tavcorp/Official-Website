const PricingCard = ({ plan }) => {
  return (
    <div className="bg-[#252525] border border-[#DF9931] rounded-2xl p-6 
                    hover:border-[#E8A649] transition
                    flex flex-col h-full">

      {/* Plan Name */}
      <h2 className="text-2xl font-bold text-white mb-2">
        {plan.name}
      </h2>

      {/* Price */}
      <p className="text-gray-400 text-sm">{plan.priceStart}</p>
      <p className="text-4xl font-bold text-[#DF9931] mb-4">
        {plan.price}
      </p>

      {/* Details */}
      <p className="text-gray-300 text-sm mb-6">
        {plan.details}
      </p>

      <hr className="my-6" />

      {/* Features */}
      <ul className="space-y-2 text-gray-200 text-sm mb-6">
        {Object.keys(plan)
          .filter((key) => key.includes("features") && plan[key])
          .map((featureKey, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#DF9931] mr-2">✓</span>
              <span>{plan[featureKey]}</span>
            </li>
          ))}
      </ul>

      {/* Button pushed to bottom */}
      <button className="mt-auto w-full bg-[#DF9931] text-[#1B1B1B] font-medium py-2 
                         rounded-lg hover:bg-[#E8A649] transition">
        Pick this package &gt;
      </button>
    </div>
  );
};



export default PricingCard;