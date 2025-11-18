import React from 'react'

const industries = [
  'Ecommerce brands',
  'Beauty & skincare',
  'Health & fitness',
  'Supplements',
  'Jewelry & accessories',
  'Clothing & apparel',
  'Creators & coaches',
  'Restaurants / Local businesses',
]

export default function Industries() {
  return (
    <section className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Industries We Serve</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {industries.map((i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 text-blue-100/90">{i}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
