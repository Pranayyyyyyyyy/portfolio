const About = () => {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* About Text */}
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I started my tech journey as a developer with a focus on web development, 
                  and over the years, I've gained expertise in full-stack development. 
                  My passion for innovation led me to explore Web3, and I've attended 
                  notable events like Unfold '23 and ETHMumbai.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Besides tech, I'm a keen business strategist with two startups and 
                  a co-founded business development agency. I also enjoy capturing 
                  moments through photography.
                </p>
              </div>
  
              {/* Achievements */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Notable Achievements
                </h3>
                <div className="space-y-4">
                  <AchievementCard
                    title="Smart India Hackathon"
                    description="Shortlisted for SIH"
                    icon="🏆"
                  />
                  <AchievementCard
                    title="IBW Conference 2024"
                    description="Volunteered at India Blockchain Week"
                    icon="🌟"
                  />
                  <AchievementCard
                    title="Microsoft Learn"
                    description="Student Ambassador Program"
                    icon="📚"
                  />
                  <AchievementCard
                    title="Web3 Events"
                    description="Attended Unfold '23 and ETHMumbai"
                    icon="🎯"
                  />
                </div>
              </div>
            </div>
  
            {/* Key Skills Overview */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <SkillPill text="Full-Stack Development" />
                <SkillPill text="Web3 Development" />
                <SkillPill text="Smart Contracts" />
                <SkillPill text="AI Integration" />
                <SkillPill text="Photography" />
                <SkillPill text="Business Strategy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  // Achievement Card Component
  const AchievementCard = ({ title, description, icon }) => {
    return (
      <div className="flex items-start space-x-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    )
  }
  
  // Skill Pill Component
  const SkillPill = ({ text }) => {
    return (
      <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
        {text}
      </div>
    )
  }
  
  export default About