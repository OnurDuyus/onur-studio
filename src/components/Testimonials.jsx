import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Ayşe K.', role: 'CEO, Startup', text: 'Onur Studio, dönüşüm oranlarımızı iki katına çıkarmamıza yardımcı oldu. Temiz ve hızlı bir yeniden yapılanma.' },
  { name: 'Mert T.', role: 'Ürün Yöneticisi', text: 'Hızlı, güvenilir ve çalışması keyifli biri. Kesinlikle tavsiye ederim.' },
  { name: 'Selin R.', role: 'Kurucu', text: 'Takvimin önde teslim eden, profesyonel ve özgün çözümler üreten bir ekip.' }
]

function Stars() {
  return (
    <div className="flex text-yellow-400">
      <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-16">
      <div className="container">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-semibold mb-6 text-white">Referanslar</motion.h2>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <motion.blockquote
              whileHover={{ translateY: -6 }}
              key={t.name}
              className="bg-slate-900 p-4 md:p-5 rounded-2xl shadow border border-white/6 min-h-[160px] md:min-h-[180px] text-slate-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-indigo-700 to-rose-700 flex items-center justify-center">🙂</div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </div>
              <Stars />
              <p className="mt-3 text-slate-300">{t.text}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
