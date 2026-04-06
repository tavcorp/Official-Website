import { useState } from "react";

const services = [
  {
    title: "Branding & Brand Identity",
    description:
      "We build strong, distinctive brands that communicate clearly and connect meaningfully with their audience.",
    scope: [
      "Brand strategy and positioning",
      "Brand identity design",
      "Visual systems and guidelines",
    ],
    deliverables: ["Logo systems", "Brand assets", "Brand guidelines"],
    timeline: "Project timeline vary based on scope and complexity",
    idealFor:
      "Startups, growing brands, and established businesses seeking clarity and consistency",
  },
  {
    title: "Design",
    description:
      "We create thoughtful, modern design balancing aesthetics with functionality across digital and physical touchpoints.",
    scope: ["Visual design", "UI/UX design", "Marketing and digital assets"],
    deliverables: ["Design files", "Interface layouts", "Visual assets"],
    timeline: "Determined by project requirements",
    idealFor: "Brands looking to elevate visual presence and user experience",
  },
  {
    title: "Website Development",
    description:
      "We design and build high-performing websites that are fast, functional, and conversion-focused.",
    scope: ["Website strategy", "Design and development", "Performance optimization"],
    deliverables: [
      "Fully functional website",
      "Responsive layouts",
      "Optimized user experience",
    ],
    timeline: "Based on site size, features, and integrations",
    idealFor: "Businesses seeking a strong digital presence",
  },
  {
    title: "Automation",
    description:
      "We streamline operations by designing systems that reduce manual work and improve efficiency.",
    scope: ["Workflow automation", "System integration", "Process optimization"],
    deliverables: ["Automated systems", "Documentation", "Deployment support"],
    timeline: "Defined after process evaluation",
    idealFor: "Businesses aiming to improve efficiency and scalability",
  },
  {
    title: "Coding & Development",
    description:
      "We develop reliable, scalable solutions that support business growth and digital transformation.",
    scope: [
      "Frontend and backend development",
      "System architecture",
      "Performance optimization",
    ],
    deliverables: [
      "Custom-built solutions",
      "Source code",
      "Technical documentation",
    ],
    timeline: "Depends on technical complexity",
    idealFor: "Businesses requiring tailored digital solutions",
  },
  {
    title: "Custom Software Development",
    description:
      "We build bespoke software solutions designed around specific business needs and workflows.",
    scope: [
      "Requirement analysis",
      "Software design and development",
      "Testing and deployment",
    ],
    deliverables: [
      "Custom software",
      "User documentation",
      "Ongoing support (optional)",
    ],
    timeline: "Determined by project scale and features",
    idealFor: "Organizations with unique operational requirements",
  },
  {
    title: "3D Design & Visualization",
    description:
      "We create realistic, immersive 3D visuals that enhance product presentation and storytelling.",
    scope: ["3D modeling", "Product visualization", "Rendering"],
    deliverables: ["High-quality 3D assets", "Rendered visuals"],
    timeline: "Based on design complexity",
    idealFor: "Product-based brands and presentations",
  },
  {
    title: "Digital Product Development",
    description:
      "We design and build digital products that solve problems and create meaningful user experiences.",
    scope: ["Product strategy", "Design and development", "Testing and launch"],
    deliverables: ["Digital products", "Design & development assets"],
    timeline: "Based on product scope",
    idealFor: "Startups and businesses launching digital solutions",
  },
  {
    title: "Consulting Services",
    description:
      "We provide strategic guidance to help businesses make informed decisions in branding, design, and technology.",
    scope: [
      "Brand and digital strategy",
      "Product and technology consulting",
      "Process evaluation",
    ],
    deliverables: ["Strategic insights", "Actionable recommendations"],
    timeline: "Based on engagement type",
    idealFor: "Businesses seeking clarity and expert direction",
  },
];

export default function ServicesAndPricing() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16 mt-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold">Our Services & Pricing</h1>
          <p className="text-gray-600">
            At Tavcorp, we provide strategic creative and technology solutions
            designed to solve real business problems. Our services are tailored to each client's goal, scope, and stage of growth, ensuring every solution delivers measurable value. 
          </p>
          <p> 
            All services are <strong>custom-priced</strong> based on scope,
            complexity, and requirements.<br></br>
            A <strong>percentage of payment may be required before work begins
            </strong>, with terms agreed upon before project kickoff.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="text-sm font-medium underline"
              >
                {activeIndex === index ? "Hide details" : "View details"}
              </button>

              {activeIndex === index && (
                <div className="mt-6 space-y-4 text-sm text-gray-700">
                  <div>
                    <p className="font-medium">Scope of Work</p>
                    <ul className="list-disc list-inside">
                      {service.scope.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium">Deliverables</p>
                    <ul className="list-disc list-inside">
                      {service.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    <span className="font-medium">Timeline:</span> {service.timeline}
                  </p>
                  <p>
                    <span className="font-medium">Ideal For:</span> {service.idealFor}
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
