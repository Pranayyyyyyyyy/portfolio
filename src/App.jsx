import { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects' // Make sure this import is correct
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects /> {/* Make sure this component exists */}
        <Experience />
        <Contact />
      </main>
      <footer className="text-center py-6">
        <p className="text-gray-600">"Building a better tomorrow, one line of code at a time."</p>
        <p className="text-sm text-gray-500 mt-2">© 2024 Pranay. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App