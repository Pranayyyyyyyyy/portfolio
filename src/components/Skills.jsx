const Skills = () => {
    const skillCategories = [
      {
        title: "Programming Languages",
        skills: ["Python", "JavaScript", "Solidity", "C++"],
        icon: "💻"
      },
      {
        title: "Web Development",
        skills: ["HTML", "CSS", "React", "Node.js", "Express.js"],
        icon: "🌐"
      },
      {
        title: "Blockchain",
        skills: ["Solidity", "Web3.js", "Smart Contracts", "Tokenization"],
        icon: "⛓️"
      },
      {
        title: "AI/ML",
        skills: ["AI Integration", "Python for ML", "TensorFlow"],
        icon: "🤖"
      },
      {
        title: "Tools & Platforms",
        skills: ["Git", "GitHub", "Firebase", "MongoDB", "Devfolio"],
        icon: "🛠️"
      },
      {
        title: "Business Development",
        skills: ["Marketing Strategy", "Growth Hacking", "Business Planning"],
        icon: "📈"
      }
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Skills & Expertise
          </h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills