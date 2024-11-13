const Experience = () => {
    const experiences = [
      {
        title: "Co-founder",
        company: "Business Development Agency",
        period: "2023 - Present",
        description: "Lead strategic initiatives, client outreach, and business growth activities.",
        skills: ["Client Relations", "Marketing", "Business Strategy"],
        achievements: [
          "Developed and implemented successful business strategies",
          "Led client acquisition initiatives",
          "Managed team of business development representatives"
        ]
      },
      {
        title: "Hackathon Participant & Volunteer",
        company: "Various Tech Events",
        period: "2023 - 2024",
        description: "Active participation in major hackathons and tech conferences.",
        skills: ["Team Collaboration", "Problem Solving", "Coding"],
        achievements: [
          "Shortlisted for Smart India Hackathon (SIH)",
          "Volunteered at India Blockchain Week (IBW) Conference 2024",
          "Attended Unfold '23 and ETHMumbai"
        ]
      },
      {
        title: "Microsoft Learn Student Ambassador",
        company: "Microsoft",
        period: "2023",
        description: "Selected for the Microsoft Learn Student Ambassador Program.",
        skills: ["Leadership", "Technical Training", "Community Building"],
        achievements: [
          "Conducted technical workshops",
          "Built and engaged with student developer community",
          "Promoted Microsoft technologies and best practices"
        ]
      }
    ];
  
    return (
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Experience
          </h2>
  
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />
  
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 md:mb-20">
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                  }`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500">
                          {exp.period}
                        </span>
                      </div>
  
                      <p className="text-gray-600 mb-4">
                        {exp.description}
                      </p>
  
                      {/* Skills */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
  
                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Key Achievements
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Additional Certifications/Training */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Additional Certifications & Training
            </h3>
            <div className="inline-flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Web3 Development</p>
                <p className="text-sm text-gray-600">ETHMumbai Certificate</p>
              </div>
              <div className="px-6 py-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Blockchain Technology</p>
                <p className="text-sm text-gray-600">Unfold '23 Participant</p>
              </div>
              <div className="px-6 py-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Smart India Hackathon</p>
                <p className="text-sm text-gray-600">Shortlisted Participant</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;