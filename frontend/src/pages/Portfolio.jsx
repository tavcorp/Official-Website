import { useState } from "react";

import { projects } from "../data/portfolioData";

export default function Portfolio() {
  const [active, setActive] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  // A generic starter gallery for the case study images
  const demoGallery = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="min-h-screen px-6 py-20" style={{ backgroundColor: "#1B1B1B" }}>
      <div className="mx-auto w-[100%] md:w-[70%] space-y-14">
        {/* Header */}
        <div 
          className="text-center max-w-3xl mx-auto space-y-4 mt-3" 
          data-aos="fade-up" 
          data-aos-duration="1500"
        >
          <h1 className="text-4xl font-bold text-white">Portfolio</h1>
          <p className="text-white">
            We collaborate with ambitious brands to solve design, technology,
            and product challenges through strategic thinking and creative
            precision.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => {
            const isWide = index % 4 === 0 || index % 4 === 3;
            
            return (
              <div
                key={project.name}
                className={`group cursor-pointer ${
                  isWide ? "md:col-span-2" : "md:col-span-1"
                }`}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay={(index % 3) * 250}
              >
                {/* Image Container with Hover Effect */}
                <div className="relative overflow-hidden rounded-2xl bg-zinc-900 h-[250px] md:h-[400px] mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900">
                    <img 
                      src={project.image} 
                      alt={`${project.name} preview`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-start px-1">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1 group-hover:text-gray-300 transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {project.service}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setActive(active === index ? null : index)}
                    className="text-sm text-gray-300 hover:text-white underline font-medium transition-colors"
                  >
                    {active === index ? "Close Details" : "View Case Study"}
                  </button>
                </div>

                {/* Expanding Details Section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    active === index ? "max-h-[1200px] opacity-100 mt-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-zinc-900/50 border border-zinc-800 p-3 sm:p-6 rounded-xl flex flex-col md:flex-row gap-8">
                    {/* Text Details */}
                    <div className="md:w-1/2 space-y-4 text-sm text-gray-300">
                      <p><strong className="text-white text-base">Overview:</strong> <br/>{project.overview}</p>
                      <p><strong className="text-white text-base">Challenge:</strong> <br/>{project.challenge}</p>
                      <p><strong className="text-white text-base">Solution:</strong> <br/>{project.solution}</p>
                      <p><strong className="text-white text-base">Outcome:</strong> <br/>{project.outcome}</p>
                    </div>

                    {/* Mini Gallery Strip */}
                    <div className="md:w-1/2">
                      <strong className="text-white text-base block mb-3">Project Gallery</strong>
                      <div className="grid grid-cols-2 gap-3">
                        {((project.gallery && project.gallery[0] !== "") ? project.gallery : demoGallery).map((imgUrl, i) => (
                          <div 
                            key={i}
                            className="relative h-28 overflow-hidden rounded-lg cursor-pointer group/gallery"
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxImage(imgUrl);
                            }}
                          >
                            <img 
                              src={imgUrl}
                              alt={`Gallery view ${i}`}
                              className="w-full h-full object-cover group-hover/gallery:scale-110 transition-transform duration-500 opacity-80 group-hover/gallery:opacity-100"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover/gallery:bg-transparent transition-colors"></div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        Click any image to expand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button 
             className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white text-5xl transition-transform hover:scale-110"
             onClick={() => setLightboxImage(null)}
             aria-label="Close fullscreen"
          >
            &times;
          </button>
          <img 
            src={lightboxImage} 
            alt="Fullscreen view" 
            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
}
