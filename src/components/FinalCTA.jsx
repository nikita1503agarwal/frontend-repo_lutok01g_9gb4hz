import React from 'react'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready to scale your creative production?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100/90">
          Get AI-powered ads, images, and videos delivered fast — every week.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600">
            Get Started
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
            Book a Strategy Call
          </a>
        </div>
        <div className="mt-10 text-center text-sm text-blue-300/70">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <a href="#" className="hover:text-white">Socials</a>
            <span className="hidden sm:inline text-blue-700">•</span>
            <a href="#" className="hover:text-white">Contact</a>
            <span className="hidden sm:inline text-blue-700">•</span>
            <a href="#" className="hover:text-white">Terms</a>
            <span className="hidden sm:inline text-blue-700">•</span>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
          <p className="mt-3">LUMN Studio ©</p>
        </div>
      </div>
    </section>
  )
}
