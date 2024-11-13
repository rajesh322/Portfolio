import { useState } from 'react'
import Navbar from './components/Navbar'
import ProfileSection from './components/ProfileSection'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'  // Add this import
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen flex flex-col">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {activeSection === 'portfolio' ? (
            <Portfolio />
          ) : (activeSection === 'home' || activeSection === 'profile' || activeSection === 'js') ? (
            <ProfileSection />
          ) : (
            <AboutMe />
          )}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
