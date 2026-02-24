import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [showToast, setShowToast] = useState(false)

  function validate() {
    const e = {}
    if (!form.name) e.name = 'Required'
    if (!form.email || !form.email.includes('@')) e.email = 'Valid email required'
    if (!form.message) e.message = 'Please enter a message'
    return e
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setSent(true)
      setShowToast(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 3000)
      setTimeout(() => setShowToast(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-semibold mb-6">Contact</motion.h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4" noValidate>
          <div>
            <label className="block text-sm">Name</label>
            <input id="name" name="name" aria-invalid={errors.name ? 'true' : 'false'} aria-describedby={errors.name ? 'error-name' : undefined} value={form.name} onChange={handleChange} className={`w-full mt-2 p-3 rounded-lg bg-slate-900 border ${errors.name ? 'border-red-500 ring-1 ring-red-200' : 'border-slate-700 focus:ring-2 focus:ring-accent/30'} text-slate-100`} />
            {errors.name && <div id="error-name" className="text-red-500 text-sm mt-1">{errors.name}</div>}
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input id="email" name="email" type="email" aria-invalid={errors.email ? 'true' : 'false'} aria-describedby={errors.email ? 'error-email' : undefined} value={form.email} onChange={handleChange} className={`w-full mt-2 p-3 rounded-lg bg-slate-900 border ${errors.email ? 'border-red-500 ring-1 ring-red-200' : 'border-slate-700 focus:ring-2 focus:ring-accent/30'} text-slate-100`} />
            {errors.email && <div id="error-email" className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm">Message</label>
            <textarea id="message" name="message" aria-invalid={errors.message ? 'true' : 'false'} aria-describedby={errors.message ? 'error-message' : undefined} value={form.message} onChange={handleChange} rows={6} className={`w-full mt-2 p-4 rounded-lg bg-slate-900 border ${errors.message ? 'border-red-500 ring-1 ring-red-200' : 'border-slate-700 focus:ring-2 focus:ring-accent/30'} text-slate-100`} />
            {errors.message && <div id="error-message" className="text-red-500 text-sm mt-1">{errors.message}</div>}
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="px-6 py-3 rounded-lg bg-accent text-white shadow hover:shadow-lg transform-gpu hover:-translate-y-0.5 active:scale-95 transition">Send Message</button>
            {sent && <div className="text-green-600">Message queued (demo)</div>}
          </div>
        </form>
        {showToast && (
          <div role="status" aria-live="polite" className="fixed right-6 bottom-6 bg-slate-800 text-slate-100 shadow-lg border border-white/6 rounded-md px-4 py-3">
            <div className="font-semibold">Message sent</div>
            <div className="text-sm text-slate-300">Thanks — I will reply soon.</div>
          </div>
        )}
      </div>
    </section>
  )
}
