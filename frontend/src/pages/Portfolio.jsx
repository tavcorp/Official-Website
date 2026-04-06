import { useState } from "react";

const projects = [
  {
    name: "Stakio",
    service: "Mobile App Development",
    overview:
      "Stakio required a scalable mobile application that delivered a seamless user experience while supporting future growth.",
    challenge:
      "Building a reliable, intuitive app architecture without compromising usability.",
    solution:
      "We designed and developed a high-performance mobile application with a clean interface and efficient backend structure.",
    outcome:
      "A functional, user-friendly mobile product built for scalability and long-term use.",
  },
  {
    name: "Drven",
    service: "Branding & Website Development",
    overview:
      "Drven needed a strong brand presence and a professional digital platform to support its business goals.",
    challenge:
      "Creating a brand identity and website that communicated trust and innovation.",
    solution:
      "We developed a cohesive brand system and a modern website that aligned visual identity with business positioning.",
    outcome:
      "A bold, recognizable brand supported by a clean, functional website.",
  },
  {
    name: "Cur8",
    service: "Mobile App Development",
    overview:
      "Cur8 sought a mobile solution designed around ease of use and functionality.",
    challenge:
      "Delivering a smooth app experience while maintaining performance and reliability.",
    solution:
      "We built a streamlined mobile application focused on intuitive navigation and efficient performance.",
    outcome:
      "A dependable mobile app that enhances user engagement.",
  },
  {
    name: "Transity",
    service: "Branding & Motion Graphics",
    overview:
      "Transity required a visual identity that could communicate movement, speed, and innovation.",
    challenge:
      "Translating brand values into dynamic visual assets.",
    solution:
      "We created a strong brand identity supported by motion graphics that enhanced brand storytelling.",
    outcome:
      "A modern, energetic brand with engaging visual motion assets.",
  },
  {
    name: "Wondaland",
    service: "Branding & Packaging Design",
    overview:
      "Wondaland needed a brand and packaging system that stood out on shelves and resonated with its audience.",
    challenge:
      "Balancing creativity with clarity in packaging design.",
    solution:
      "We designed a distinctive brand identity and packaging that aligned with product positioning.",
    outcome:
      "Visually appealing packaging that strengthened brand recognition.",
  },
  {
    name: "Lote",
    service: "Packaging Design",
    overview:
      "Lote required packaging that was clean, functional, and visually appealing.",
    challenge:
      "Designing packaging that communicated quality while remaining minimal.",
    solution:
      "We created refined packaging system with strong visual hierarchy.",
    outcome:
      "Packaging that enhanced product presentation and shelf appeal.",
  },
  {
    name: "Herbalist",
    service: "Branding & Packaging Design",
    overview:
      "Herbalist needed branding rooted in trust and authenticity.",
    challenge:
      "Creating a balance between modern branding and natural appeal.",
    solution:
      "We developed a cohesive brand identity and packaging design inspired by wellness and simplicity.",
    outcome:
      "A calm, professional brand presence with strong market appeal.",
  },
  {
    name: "Metra",
    service: "3D & Product Design",
    overview:
      "Metra required realistic product visuals to support development and presentation.",
    challenge:
      "Translating concepts into detailed, accurate 3D representations.",
    solution:
      "We delivered high-quality 3D and product design visuals.",
    outcome:
      "Clear, realistic product visuals ready for presentation and production.",
  },
  {
    name: "Excape",
    service: "Social Media Marketing",
    overview:
      "Excape sought to improve brand visibility and engagement online.",
    challenge:
      "Creating consistent, engaging digital content.",
    solution:
      "We developed a focused social media strategy aligned with brand goals.",
    outcome:
      "Improved brand presence and audience engagement.",
  },
  {
    name: "Dootify",
    service: "Branding & Packaging Design",
    overview:
      "Dootify needed a distinctive brand identity and packaging system.",
    challenge:
      "Standing out in a competitive market with unique design.",
    solution:
    "We designed a bold brand identity and cohesive packaging.",
    outcome:
      "A recognizable brand with strong visual consistency.",
  }
];

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <p className="text-gray-600">
            We collaborate with ambitious brands to solve design, technology,
            and product challenges through strategic thinking and creative
            precision.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center text-gray-400 text-sm">
                Project Image
              </div>

              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-sm text-gray-500 mb-3">
                Service Rendered: {project.service}
              </p>

              <button
                onClick={() => setActive(active === index ? null : index)}
                className="text-sm underline font-medium"
              >
                {active === index ? "Hide details" : "View case study"}
              </button>

              {active === index && (
                <div className="mt-5 space-y-3 text-sm text-gray-700">
                  <p><strong>Overview:</strong> {project.overview}</p>
                  <p><strong>Challenge:</strong> {project.challenge}</p>
                  <p><strong>Solution:</strong> {project.solution}</p>
                  <p><strong>Outcome:</strong> {project.outcome}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
