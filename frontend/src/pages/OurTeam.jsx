// const OurTeam = () => {
//   return (
//     <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-14">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             Our Team
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             We are a group of passionate designers, developers, and strategists
//             working together to build impactful digital products.
//           </p>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//           {/* Team Member */}
//           <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
//             <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
//               <span className="text-gray-500">Photo</span>
//             </div>
//             <h3 className="text-xl font-semibold">Anuj Raj</h3>
//             <p className="text-sm text-gray-500 mb-3">Project Manager & Full-Stack Developer</p>
//             <p className="text-gray-600 text-sm">
//               Leads product development and architecture with a focus on clean
//               code, performance, and scalability.
//             </p>
//           </div>

//           {/* Team Member */}
//           <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
//             <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
//               <span className="text-gray-500">Photo</span>
//             </div>
//             <h3 className="text-xl font-semibold">Rahul Kumar</h3>
//             <p className="text-sm text-gray-500 mb-3">UI/UX Designer</p>
//             <p className="text-gray-600 text-sm">
//               Designs intuitive user experiences and modern interfaces that
//               align with business goals.
//             </p>
//           </div>

//           {/* Team Member */}
//           <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
//             <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
//               <span className="text-gray-500">Photo</span>
//             </div>
//             <h3 className="text-xl font-semibold">Priya Sharma</h3>
//             <p className="text-sm text-gray-500 mb-3">Frontend Developer</p>
//             <p className="text-gray-600 text-sm">
//               Specializes in building responsive, accessible, and high-quality
//               user interfaces using React.
//             </p>
//           </div>

//           {/* Team Member */}
//           <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
//             <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
//               <span className="text-gray-500">Photo</span>
//             </div>
//             <h3 className="text-xl font-semibold">Amit Verma</h3>
//             <p className="text-sm text-gray-500 mb-3">Backend Developer</p>
//             <p className="text-gray-600 text-sm">
//               Works on APIs, databases, and security to ensure reliable and
//               scalable backend systems.
//             </p>
//           </div>

//           {/* Team Member */}
//           <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
//             <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
//               <span className="text-gray-500">Photo</span>
//             </div>
//             <h3 className="text-xl font-semibold">Neha Singh</h3>
//             <p className="text-sm text-gray-500 mb-3">Project Manager</p>
//             <p className="text-gray-600 text-sm">
//               Ensures smooth execution of projects, timelines, and communication
//               between clients and the team.
//             </p>
//           </div>

//           {/* Team Member */}
//           <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
//             <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
//               <span className="text-gray-500">Photo</span>
//             </div>
//             <h3 className="text-xl font-semibold">Karan Patel</h3>
//             <p className="text-sm text-gray-500 mb-3">Marketing & Growth</p>
//             <p className="text-gray-600 text-sm">
//               Focuses on branding, digital marketing, and growth strategies to
//               help products reach the right audience.
//             </p>
//           </div>

//         </div>

//         {/* CTA */}
//         <div className="mt-16 text-center">
//           <h2 className="text-2xl font-semibold mb-4">
//             Want to join our team?
//           </h2>
//           <p className="text-gray-600 mb-6">
//             We’re always looking for passionate people to work with us.
//           </p>
//           <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition mb-10">
//             Careers
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default OurTeam;



const OurTeam = () => {
  return (
    <section className="pt-28 pb-24 min-h-screen bg-gray-50 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The Tavcorp Collective
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            At Tavcorp, our strength lies in a compact, multidisciplinary team of
            creative thinkers, technical experts, and problem-solvers. We work
            collaboratively to design meaningful brands and build intelligent
            digital products that help businesses grow with confidence.
          </p>
        </div>

        {/* Departments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Brand & Strategy */}
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Brand & Strategy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This team shapes how businesses are seen, felt, and remembered.
              They define brand identities, craft clear messaging, and align
              visual direction with business objectives - building brands that are
              distinctive, consistent, and commercially effective.
            </p>
          </div>

          {/* Design */}
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our designers transform ideas into compelling visual experiences.
              From brand identity to digital interfaces and 3D visuals, they
              blend creativity with functionality to produce work that is both
              beautiful and purposeful.
            </p>
          </div>

          {/* Technology & Development */}
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Technology & Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This team builds the systems behind great brands. They develop
              custom software, websites, and automation solutions that improve
              efficiency, scalability, and user experience - ensuring creativity
              is powered by reliable, high-performing technology.
            </p>
          </div>

          {/* Innovation & Product */}
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Innovation & Product
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Focused on digital product development, this team explores new
              tools, processes, and technologies to keep Tavcorp ahead of
              industry trends - bridging creativity and engineering to deliver
              futuristic, intelligent solutions.
            </p>
          </div>

        </div>

        {/* How We Work */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">
            How We Work Together
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Client-first mindset",
                desc: "Every decision starts with your business goals."
              },
              {
                title: "Technical precision",
                desc: "Solutions are built to last, scale, and perform."
              },
              {
                title: "Creative intelligence",
                desc: "Ideas are bold, thoughtful, and strategically grounded."
              },
              {
                title: "Collaborative process",
                desc: "No department works in isolation—every project is a team effort."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Want to join the Tavcorp Collective?
          </h3>
          <p className="text-gray-600 mb-8">
            We’re always looking for sharp minds, creative thinkers, and builders
            who care about quality.
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-lg hover:bg-gray-800 transition">
            View Careers
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
