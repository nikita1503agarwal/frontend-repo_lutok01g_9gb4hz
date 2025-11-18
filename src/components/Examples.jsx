import React from 'react'

export default function Examples() {
  return (
    <section className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Examples</h2>
        <p className="mt-2 text-blue-100/90">All images and videos shown are generated using our AI creative pipeline.</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(59,130,246,0.2)_0%,transparent_60%)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
