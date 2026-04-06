import termsData from "../data/termData";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 mt-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-10">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Terms and Conditions
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Last Updated: {termsData.lastUpdated}
        </p>

        <p className="text-gray-700 mb-10">
          {termsData.introduction}
        </p>

        {termsData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {index + 1}. {section.title}
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
};

export default TermsAndConditions;
