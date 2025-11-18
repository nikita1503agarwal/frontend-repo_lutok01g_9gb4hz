import React from 'react'

const tiers = [
  {
    name: 'Full AI Creative Production',
    badge: '⭐',
    price: '$399–$1,200 / pack',
    retainer: '$1,000–$2,500 / mo',
    features: [
      'Creative strategy call',
      'Brand analysis',
      '6–10 creative angles',
      '12–20 AI images',
      '4–8 AI video ads',
      'Captions included',
      'Ad copy + hooks',
      '48h delivery',
      '2 revisions',
      'Optional automated reporting',
    ],
    cta: 'Order Production Pack',
  },
  {
    name: 'AI Image Pack',
    badge: '🖼',
    price: '$149–$299 / pack',
    retainer: '$99 / mo membership',
    features: [
      '15–30 AI photos',
      'Product-only or lifestyle',
      'Integration with brand colors',
      '24–48h delivery',
      '5 campaign angles',
    ],
    cta: 'Get Image Pack',
  },
  {
    name: 'AI Video Ads',
    badge: '🎬',
    price: '$149–$399',
    features: [
      '3–6 videos',
      'Hooks written by AI',
      'Captions included',
      'Brand voice',
      '48h delivery',
    ],
    cta: 'Get Video Pack',
  },
]

const memberships = [
  { name: 'Starter', price: '$49/mo', bullets: ['30 AI images/month'] },
  { name: 'Growth', price: '$99/mo', bullets: ['50 images + 2 videos'] },
  { name: 'Pro', price: '$199/mo', bullets: ['80 images + 4 videos'] },
  { name: 'Studio', price: '$499/mo', bullets: ['Unlimited images + 10 videos', 'Priority delivery'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Tiers & Pricing</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl">{tier.badge}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-blue-100">{tier.price}</p>
              {tier.retainer && <p className="text-blue-100/80">{tier.retainer}</p>}
              <ul className="mt-4 space-y-2 text-blue-100/90">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue-400">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600">
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Creative Vault Membership (SWaS)</h3>
          <p className="mt-1 text-blue-100/90">Recurring revenue engine — fully automated</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {memberships.map((m) => (
              <div key={m.name} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <h4 className="text-lg font-semibold text-white">{m.name}</h4>
                <p className="text-blue-200">{m.price}</p>
                <ul className="mt-3 space-y-1 text-blue-100/90">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-0.5 text-blue-400">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a href="#cta" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">Join Creative Vault</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
