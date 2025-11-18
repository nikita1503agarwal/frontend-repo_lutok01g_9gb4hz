import React from 'react'

const faqs = [
  { q: 'How fast is delivery?', a: '24–48 hours depending on the pack.' },
  { q: 'Are the videos real or AI?', a: 'Videos are AI-generated using advanced creative tools + manual editing.' },
  { q: 'Do I get revisions?', a: 'Yes — up to 2 revisions on Tier 1 packages.' },
  { q: 'Can you match my brand style?', a: 'Yes. We train an individualized AI style for your brand.' },
]

export default function FAQ() {
  return (
    <section className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">FAQs</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-4 open:bg-white/5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-white">
                <span className="text-base font-medium">{f.q}</span>
                <span className="text-blue-300 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-blue-100/90">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
