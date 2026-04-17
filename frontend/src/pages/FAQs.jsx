import { useState } from "react";
import { faqPage } from "../data/FAQpageData";


const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 min-h-screen w-full px-4 sm:px-8" style={{ backgroundColor: "#1B1B1B", color: "#F1F1F1" }}>
      <div className="mx-auto w-[95%] md:w-[50%]">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span>Frequently Asked </span>
            <span style={{ color: "#DF9931", fontStyle: "italic", fontWeight: 600 }}>Questions</span>
          </h1>
          <p className="text-gray-400">
            Find answers to common questions about our services, process, and
            collaboration.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqPage.map((faq, id) => (
            <div
              key={id}
              className="rounded-xl overflow-hidden transition-colors duration-300"
              style={{ 
                backgroundColor: openIndex === id ? "#DF9931" : "#252525"
              }}
            >
              <button
                onClick={() => toggleFAQ(id)}
                className="w-full flex justify-between items-center px-3 sm:px-6 py-3 sm:py-4 text-left"
              >
                <span className="text-base sm:text-lg font-medium text-white">
                  {faq.question}
                </span>
                <span className="text-2xl text-white font-light">
                  {openIndex === id ? "−" : "+"}
                </span>
              </button>

              {openIndex === id && (
                <div className="px-3 sm:px-6 pb-3 sm:pb-4 text-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Still have questions?
          </h2>
          <p className="text-gray-400 mb-6">
            Feel free to reach out to us. We're happy to help.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition mb-2 font-medium">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQs;
