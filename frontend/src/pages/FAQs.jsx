import { useState } from "react";
import { faqPage } from "../data/FAQpageData";


const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Find answers to common questions about our services, process, and
            collaboration.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqPage.map((faq, id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(id)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-500">
                  {openIndex === id ? "−" : "+"}
                </span>
              </button>

              {openIndex === id && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to us. We’re happy to help.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition mb-2">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQs;
