import { useState } from "react";
import { faqSections } from "../data/FAQpageData";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (sectionIndex, faqIndex) => {
    const id = `${sectionIndex}-${faqIndex}`;
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="pt-24 min-h-screen w-full px-4 sm:px-8 pb-16" style={{ backgroundColor: "#1B1B1B", color: "#F1F1F1" }}>
      <div className="mx-auto w-[95%] md:w-[60%] lg:w-[50%]">

        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span data-aos="zoom-in" data-aos-delay="100" data-aos-duration="700">Frequently Asked </span>
            <span style={{ color: "#DF9931", fontStyle: "italic", fontWeight: 600 }} data-aos="zoom-in" data-aos-delay="150" data-aos-duration="700">Questions</span>
          </h1>
          <p className="text-white" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
            Find answers to common questions about our services, process, and
            collaboration.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqSections.map((section, sIndex) => (
            <div key={sIndex} className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white uppercase" data-aos="fade-up">
                {section.title}
              </h2>
              
              <div className="space-y-4">
                {section.faqs.map((faq, fIndex) => {
                  const id = `${sIndex}-${fIndex}`;
                  const isOpen = openIndex === id;
                  return (
                    <div
                      key={faq.id || fIndex}
                      className="rounded-xl overflow-hidden transition-colors duration-300"
                      style={{ 
                        backgroundColor: isOpen ? "#DF9931" : "#252525"
                      }}
                      data-aos="fade-up"
                      data-aos-delay={`${100 + (fIndex * 50)}`}
                      data-aos-duration="700"
                    >
                      <button
                        onClick={() => toggleFAQ(sIndex, fIndex)}
                        className="w-full flex justify-between items-center px-3 sm:px-6 py-3 sm:py-4 text-left"
                      >
                        <span className="text-base sm:text-lg font-medium text-white">
                          {faq.question}
                        </span>
                        <span className="text-2xl text-white font-light">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-3 sm:px-6 pb-3 sm:pb-4 text-white whitespace-pre-wrap text-sm sm:text-base font-medium">
                          {faq.answer}
                          {faq.link && faq.linkText && (
                            faq.link.startsWith('http') || faq.link.startsWith('mailto') ? (
                              <a 
                                href={faq.link} 
                                target={faq.link.startsWith('http') ? "_blank" : undefined} 
                                rel={faq.link.startsWith('http') ? "noopener noreferrer" : undefined} 
                                className="block mt-2 font-bold hover:underline opacity-90 transition-opacity"
                              >
                                {faq.linkText}
                              </a>
                            ) : (
                              <Link to={faq.link} className="block mt-2 font-bold hover:underline opacity-90 transition-opacity">
                                {faq.linkText}
                              </Link>
                            )
                          )}
                          {faq.links && (
                            <div className="mt-2 font-bold opacity-90">
                              {faq.links.map((linkItem, i) => (
                                <span key={i}>
                                  {linkItem.prefix && <span className="font-normal mx-2 opacity-80">{linkItem.prefix}</span>}
                                  {linkItem.url.startsWith('http') ? (
                                    <a 
                                      href={linkItem.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="hover:underline transition-opacity inline-block"
                                    >
                                      {linkItem.text}
                                    </a>
                                  ) : (
                                    <Link to={linkItem.url} className="hover:underline transition-opacity inline-block">
                                      {linkItem.text}
                                    </Link>
                                  )}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="700">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#DD992F" }} data-aos="zoom-in" data-aos-delay="150" data-aos-duration="700">
            Still have questions?
          </h2>
          <p className="text-white mb-6" data-aos="fade-up" data-aos-delay="180" data-aos-duration="700">
            Feel free to reach out to us. We're happy to help.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition mb-2 font-medium" data-aos="zoom-in" data-aos-delay="210" data-aos-duration="700">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQs;
