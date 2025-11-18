import React from 'react'

const steps = [
  {
    title: 'Choose a Creative Pack',
    desc: 'Pick the image, video, or full production plan that fits your brand.',
  },
  {
    title: 'Upload Your Brand Assets',
    desc: 'Logos, colors, product images, moodboard, examples.',
  },
  {
    title: 'AI Creative Production Begins',
    desc: 'We generate images, videos, angles, hooks, and variations within 24–48 hours.',
  },
  {
    title: 'Receive Ready-to-Use Ads',
    desc: 'Delivered in a clean folder, optimized for Meta, TikTok, or your ad platform.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">How It Works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">{i + 1}</div>
              <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-blue-100/90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
