const PricingCard = ({ plan }) => {
  return (
    <div className="bg-[#101010] border border-gray-800 rounded-2xl p-6 
                    hover:border-yellow-400 transition
                    flex flex-col h-full">

      {/* Plan Name */}
      <h2 className="text-2xl font-bold text-white mb-2">
        {plan.name}
      </h2>

      {/* Price */}
      <p className="text-gray-400 text-sm">{plan.priceStart}</p>
      <p className="text-4xl font-bold text-yellow-400 mb-4">
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
              <span className="text-yellow-400 mr-2">✓</span>
              <span>{plan[featureKey]}</span>
            </li>
          ))}
      </ul>

      {/* Button pushed to bottom */}
      <button className="mt-auto w-full bg-yellow-400 text-black font-medium py-2 
                         rounded-lg hover:bg-yellow-300 transition">
        Pick this package &gt;
      </button>
    </div>
  );
};



export default PricingCard;