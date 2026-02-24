import React from 'react'
import { motion } from 'framer-motion'

// Placeholder URLs (update to real links as needed)
const demoUrl = 'https://example.com/demo'
const sourceUrl = ''

const projects = [
  { title: 'Analytics Platform', desc: 'Real-time metrics and dashboards.', tech: ['React', 'Node', 'Postgres'] },
  { title: 'Marketing Site', desc: 'Conversion focused landing pages.', tech: ['React', 'Tailwind', 'Vercel'] },
  { title: 'E-commerce Admin', desc: 'Inventory and orders management.', tech: ['React', 'Stripe', 'MongoDB'] }
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-semibold mb-6">Projects</motion.h2>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <motion.article
              whileHover={{ translateY: -6 }}
              key={p.title}
              className="bg-slate-900 rounded-2xl shadow-lg border border-white/6 p-4 md:p-5 transition-transform min-h-[160px] md:min-h-[180px]"
              aria-labelledby={`project-${p.title.replace(/\s+/g, '-')}`}
            >
              <div className="h-32 sm:h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-md mb-4 flex items-center justify-center text-4xl">🖼️</div>
              <h3 id={`project-${p.title.replace(/\s+/g, '-')}`} className="font-semibold text-lg text-white">{p.title}</h3>
              <p className="text-sm text-slate-400 my-2">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs bg-slate-800 text-slate-200 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-white font-medium shadow hover:shadow-lg transform-gpu hover:-translate-y-0.5 active:scale-95 transition">View</a>
                {sourceUrl && (
                  <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg border border-white/6 text-slate-200 hover:bg-white/5 active:scale-95 transition">Source</a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
