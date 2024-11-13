import P from '../assets/PI.jpg'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Business Development Strategist',
        'Full-Stack Developer',
        'Web3 Enthusiast',
        
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    })

    return () => typed.destroy()
  }, [])

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Hi, I'm <span className="text-blue-600">Pranay Nair</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mt-4 text-gray-700">
              I'm a <span ref={el}></span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
              A passionate full-stack developer specializing in both web development 
              and blockchain technology. I love building projects that blend creativity 
              and technology.
            </p>
            <div className="mt-8 flex gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="w-full h-[500px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl">
           <img src={P} alt="Pranay" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero