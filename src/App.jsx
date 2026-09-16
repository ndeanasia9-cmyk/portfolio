import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Leadership from './components/Leadership.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ledger dark:bg-ink-950 transition-colors duration-300">
      <Sidebar />
      <main className="lg:pl-72">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
          <About />
          <Experience />
          <Leadership />
          <Education />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </main>
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}
