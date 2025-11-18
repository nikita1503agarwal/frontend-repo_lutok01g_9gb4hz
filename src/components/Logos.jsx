import React from 'react'

export default function Logos() {
  return (
    <section className="relative w-full bg-slate-950 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-medium text-blue-200/70">Trusted by brands across LATAM & the US</p>
        <div className="mt-6 grid grid-cols-2 gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex h-16 items-center justify-center rounded-xl border border-white/5 bg-white/2.5">
              <div className="h-6 w-24 rounded bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
