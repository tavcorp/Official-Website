import { useState } from "react";
import { services } from "../data/servicesData";

export default function ServicesAndPricing() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen px-6 py-16 pt-24" style={{ backgroundColor: "#1B1B1B", color: "#F1F1F1" }}>
      <div className="mx-auto w-[100%] md:w-[70%] space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white" style={{ color: "#DF9931" }} data-aos="zoom-in" data-aos-delay="100">Our Services & Pricing</h1>
          <p className="text-white" data-aos="fade-up" data-aos-delay="200">
            At Tavcorp, we provide strategic creative and technology solutions
            designed to solve real business problems. Our services are tailored to each client's goal, scope, and stage of growth, ensuring every solution delivers measurable value. 
          </p>
          <p data-aos="fade-up" data-aos-delay="300">
            All services are <strong style={{ color: "#DF9931" }}>custom-priced</strong> based on scope,
            complexity, and requirements.<br></br>
            A <strong style={{ color: "#DF9931" }}>percentage of payment may be required before work begins
            </strong>, with terms agreed upon before project kickoff.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-2xl shadow-sm p-3 sm:p-6 transition duration-300 cursor-pointer"
              style={{ 
                backgroundColor: hoveredIndex === index ? "#DF9931" : "#252525",
                color: hoveredIndex === index ? "#FFFFFF" : "#F1F1F1"
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="zoom-in"
              data-aos-delay={`${100 + (index * 100)}`}
            >
              <h2 className="text-xl font-semibold mb-2" style={{ color: hoveredIndex === index ? "#FFFFFF" : "#DF9931" }}>{service.title}</h2>
              <p className={`mb-4 ${hoveredIndex === index ? "text-white" : "text-gray-300"}`}>{service.description}</p>

              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className={`text-sm font-medium underline ${hoveredIndex === index ? "text-white" : "text-white"}`}
              >
                {activeIndex === index ? "Hide details" : "View details"}
              </button>

              {activeIndex === index && (
                <div className="mt-6 space-y-4 text-sm" style={{ color: hoveredIndex === index ? "#FFFFFF" : "#E0E0E0" }}>
                  <div>
                    <p className="font-medium text-white">Scope of Work</p>
                    <ul className="list-disc list-inside">
                      {service.scope.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium text-white">Deliverables</p>
                    <ul className="list-disc list-inside">
                      {service.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    <span className="font-medium text-white">Timeline:</span> {service.timeline}
                  </p>
                  <p>
                    <span className="font-medium text-white">Ideal For:</span> {service.idealFor}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        {/* <div className="bg-white rounded-2xl p-8 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-gray-700">
            All services are <strong>custom-priced</strong>. A percentage of payment
            may be required before work begins, with terms agreed upon prior to
            project kickoff.
          </p>
        </div> */}
      </div>
    </div>
  );
}
