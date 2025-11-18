import React from 'react'

const benefits = [
  { title: 'Ultra Fast Turnaround', desc: 'Get full image and video packs in 24–48 hours, every time.', icon: '⚡' },
  { title: 'Photorealistic Quality', desc: 'Studio-quality visuals without the cost of models, sets, or equipment.', icon: '🎨' },
  { title: 'Creative Strategy Included', desc: 'Hooks, angles, scripts, concepts — crafted based on real ad performance data.', icon: '💡' },
  { title: 'Flexible Packages', desc: 'From single creative packs to memberships to full ad systems.', icon: '🧩' },
  { title: 'Scalable & Automated', desc: 'Our AI pipeline ensures consistent quality and predictable deliveries.', icon: '🔁' },
  { title: 'Transparent Flat Pricing', desc: 'No hidden fees — just clear, productized tiers.', icon: '💰' },
]

export default function WhyUs() {
  return (
    <section className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Why LUMN Studio?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-3xl">{b.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-blue-100/90">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
