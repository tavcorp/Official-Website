import React from "react";
import privacyPolicyData from "../data/privacyPolicyData";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 mt-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-10">

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Last Updated: {privacyPolicyData.lastUpdated}
        </p>

        <p className="text-gray-700 mb-10">
          {privacyPolicyData.introduction}
        </p>

        {privacyPolicyData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {index + 1}. {section.title}
            </h2>

            {Array.isArray(section.content) &&
              typeof section.content[0] === "object" ? (
              section.content.map((block, i) => (
                <div key={i} className="mb-4">
                  {block.subtitle && (
                    <p className="font-medium text-gray-700 mb-2">
                      {block.subtitle}
                    </p>
                  )}

                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>

                  {block.note && (
                    <p className="text-sm text-gray-600 mt-2">
                      {block.note}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default PrivacyPolicy;
