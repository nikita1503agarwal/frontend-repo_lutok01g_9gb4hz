import React from 'react'
import Hero from './components/Hero'
import Logos from './components/Logos'
import WhatWeDo from './components/WhatWeDo'
import WhyUs from './components/WhyUs'
import Pricing from './components/Pricing'
import Examples from './components/Examples'
import HowItWorks from './components/HowItWorks'
import Industries from './components/Industries'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Logos />
      <WhatWeDo />
      <WhyUs />
      <Pricing />
      <Examples />
      <HowItWorks />
      <Industries />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default App
