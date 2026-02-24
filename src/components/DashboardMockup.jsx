import React from 'react'
import { motion } from 'framer-motion'

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-full"
    >
      <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-black/50 to-slate-900 border border-white/10">
        <div className="flex flex-col md:flex-row">
          <aside className="w-full md:w-56 min-w-0 bg-slate-900/60 p-4 md:p-4 border-b md:border-b-0 md:border-r border-white/5">
            <div className="h-8 w-full mb-6 rounded bg-slate-800/60" />
            <nav className="space-y-3">
              <div className="h-3 rounded bg-slate-800/50 w-3/4" />
              <div className="h-3 rounded bg-slate-800/50 w-2/3" />
              <div className="h-3 rounded bg-slate-800/50 w-1/2" />
              <div className="h-3 rounded bg-slate-800/50 w-2/5" />
            </nav>
          </aside>

          <div className="flex-1 min-w-0 p-4 md:p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-2">
                <div className="h-5 w-44 bg-slate-800 rounded" />
                <div className="h-3 w-28 bg-slate-800 rounded" />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded bg-slate-800" />
                <div className="h-9 w-9 rounded bg-slate-800" />
              </div>
            </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-slate-800 shadow-sm border border-white/5">
                <div className="h-3 w-28 bg-slate-700 rounded mb-4" />
                <div className="h-8 bg-gradient-to-r from-indigo-700 to-indigo-600 rounded" />
              </div>
              <div className="p-4 rounded-lg bg-slate-800 shadow-sm border border-white/5">
                <div className="h-3 w-20 bg-slate-700 rounded mb-4" />
                <div className="h-8 bg-gradient-to-r from-rose-700 to-rose-600 rounded" />
              </div>
              <div className="p-4 rounded-lg bg-slate-800 shadow-sm border border-white/5">
                <div className="h-3 w-24 bg-slate-700 rounded mb-4" />
                <div className="h-8 bg-gradient-to-r from-emerald-700 to-emerald-600 rounded" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 p-4 rounded-lg bg-slate-800 shadow border border-white/5">
                <div className="h-44 sm:h-36 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center text-4xl">📈</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-800 shadow border border-white/5">
                <div className="space-y-3">
                  <div className="h-6 w-3/4 bg-slate-700 rounded" />
                  <div className="h-3 bg-slate-700 rounded" />
                  <div className="h-3 bg-slate-700 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
