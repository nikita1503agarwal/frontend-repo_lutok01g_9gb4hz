import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/90 backdrop-blur">
            LUMN Studio
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            AI-Powered Creative Studio for Modern Brands
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-blue-100/90">
            High-performing images, videos, and creative strategy — crafted with AI and delivered fast.
          </p>

          <div className="mt-6 space-y-1 text-blue-100/80">
            <p>⭐ Trusted by ecommerce brands, creators & agencies</p>
            <p>⭐ Premium quality without the production cost</p>
            <p>⭐ 24–48h turnaround on all creative packs</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600">
              Get Started
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
