import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DashboardMockup from './components/DashboardMockup'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'

function MenuIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Nav({ open, setOpen, scrolled }) {
  return (
    <header className={`fixed w-full z-50 transition-colors ${scrolled ? 'bg-slate-900/60 backdrop-blur-md shadow-sm border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between h-16">
        <div className="text-xl font-extrabold text-accent">Onur Studio</div>
        <nav className="hidden md:flex gap-4 items-center text-sm" id="nav-desktop" aria-label="Primary">
          <a href="#home" className="nav-link text-slate-300">Home</a>
          <a href="#services" className="nav-link text-slate-300">Services</a>
          <a href="#about" className="nav-link text-slate-300">About</a>
          <a href="#projects" className="nav-link text-slate-300">Projects</a>
          <a href="#contact" className="nav-link text-slate-300">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Open menu" className="p-2 rounded-md bg-slate-800/50 backdrop-blur text-slate-200">
            {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="md:hidden fixed inset-x-4 top-20 bg-slate-900/80 backdrop-blur rounded-xl shadow-lg z-40">
              <div className="p-4 flex flex-col gap-3">
                <a href="#home" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-white/5">Home</a>
                <a href="#services" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-white/5">Services</a>
                <a href="#about" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-white/5">About</a>
                <a href="#projects" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-white/5">Projects</a>
                <a href="#contact" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-white/5">Contact</a>
              </div>
            </motion.div>
      )}
    </AnimatePresence>
  )
}

function Hero() {
  return (
    <section id="home" className="py-12 md:py-16">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white">React Frontend Developer — I deliver complete websites</h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-xl">I build production-ready React frontends: landing pages, business websites, and analytics dashboards that are fast and accessible.</p>
          <div className="mt-4 flex gap-3">
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-accent text-white font-semibold shadow hover:shadow-lg transform-gpu hover:-translate-y-0.5 active:scale-95 transition">Hire Me</a>
            <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-lg border border-white/6 text-slate-200 font-semibold active:scale-95 transition">View Work</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
          <div className="rounded-2xl p-4 bg-transparent shadow-2xl max-w-xl mx-auto md:mx-0 overflow-hidden">
            <DashboardMockup />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { icon: '🧭', title: 'Strategy', desc: 'Research-driven roadmaps to reach your goals.' },
    { icon: '💻', title: 'Development', desc: 'Fast, accessible, maintainable web apps.' },
    { icon: '⚡', title: 'Optimization', desc: 'Performance and conversion focused improvements.' }
  ]
  return (
    <section id="services" className="py-12 md:py-16">
      <div className="container">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-semibold mb-6 text-white">Services</motion.h2>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((s) => (
            <motion.div whileHover={{ y: -4 }} key={s.title} className="bg-slate-900 rounded-2xl shadow p-4 md:p-5 border border-white/6 min-h-[160px] md:min-h-[180px] text-slate-200 flex flex-col">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-semibold text-lg text-white">{s.title}</h3>
              <p className="text-sm text-slate-400 mt-2 flex-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">About Us</h2>
          <p className="text-slate-300 mb-3">AcmeCorp partners with companies to deliver thoughtful digital products. We blend design, engineering, and strategy to create solutions that scale.</p>
          <p className="text-slate-300">Our team values clarity, quality, and measurable impact. We focus on outcomes that matter to your customers and your business.</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm h-40 sm:h-56 bg-slate-800 rounded-lg flex items-center justify-center text-4xl">🏢</div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return <ContactForm />
}

function Footer() {
  return (
    <footer className="py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <div>© {new Date().getFullYear()} AcmeCorp. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-200">Twitter</a>
          <a href="#" className="hover:text-slate-200">LinkedIn</a>
          <a href="#" className="hover:text-slate-200">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'services', 'about', 'projects', 'testimonials', 'contact']
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom > 120) {
          current = id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // update nav link active classes
    const links = document.querySelectorAll('.nav-link')
    links.forEach((a) => {
      const href = a.getAttribute('href')?.replace('#', '')
      if (href === active) a.classList.add('text-accent', 'font-semibold')
      else a.classList.remove('text-accent', 'font-semibold')
    })
  }, [active])

  return (
    <div className="min-h-screen">
      <Nav open={open} setOpen={setOpen} scrolled={scrolled} />
      <MobileMenu open={open} setOpen={setOpen} />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </div>
  )
}

export default App
