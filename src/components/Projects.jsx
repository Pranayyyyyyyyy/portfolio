const Projects = () => {
    const projects = [
      {
        title: "Biodegradable Plastic Business",
        description: "Created biodegradable plastic using corn starch and set up a monetization model through ads printed on the plastic. The business model allows shopkeepers to distribute this eco-friendly plastic for free.",
        technologies: ["Chemical Engineering", "Business Strategy"],
        features: ["Monetization through advertisements", "Eco-friendly solution"],
        image: "/projects/bio-plastic.jpg", // Add your image path
      },
      {
        title: "Real Estate Tokenization Platform",
        description: "Developed a platform that enables property tokenization for fractional ownership, integrating smart contracts to automate lease agreements, rent payments, and maintenance requests.",
        technologies: ["Solidity", "React", "Smart Contracts"],
        features: ["Property tokenization", "Automated lease agreements", "Investment buttons"],
        image: "/projects/real-estate.jpg", // Add your image path
      },
      {
        title: "AI-Powered Medical Platform",
        description: "A centralized platform that links hospital records to patients' Aadhaar IDs, enabling easy access to medical history across hospitals.",
        technologies: ["AI", "Database Management", "Web Development"],
        features: ["Centralized database", "Secure patient data"],
        image: "/projects/medical.jpg", // Add your image path
      },
      {
        title: "Freelance Platform - Areion",
        description: "Created a freelance platform called Areion, addressing key issues like traffic management, subscription models, enhanced UI, and crypto payments with an escrow system.",
        technologies: ["React", "Web3", "AI", "Solidity"],
        features: ["Freelance management", "Subscription model", "Social media integration"],
        image: "/projects/areion.jpg", // Add your image path
      }
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50" />
                  {/* You can add actual images here */}
                  {/* <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full"
                  /> */}
                </div>
  
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
  
                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Key Features
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
  
                  {/* Project Links */}
                  <div className="mt-6 flex gap-4">
                    <a
                      href="#"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      View Project
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View More Projects
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;