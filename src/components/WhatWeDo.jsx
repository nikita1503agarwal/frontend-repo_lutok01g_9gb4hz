import React from 'react'
import { Check } from 'lucide-react'

const items = [
  'High-converting ad creatives',
  'AI UGC-style videos',
  'Product photoshoots',
  'Scroll-stopping static ads',
  'Creative strategy & ad angles',
]

export default function WhatWeDo() {
  return (
    <section className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">AI-Powered Creative Production — Done For You.</h2>
        <p className="mt-4 max-w-3xl text-blue-100/90">
          We replace expensive photoshoots, studios, editors, and creative teams with a fully AI-driven creative engine that produces:
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((label) => (
            <div key={label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <Check className="mt-0.5 h-5 w-5 text-blue-400" />
              <p className="text-blue-100">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-blue-200/90">All delivered fast. All on-brand. All ready to plug into your marketing.</p>
      </div>
    </section>
  )
}
