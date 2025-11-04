import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import ValueSection from './components/ValueSection'
import IngredientsSection from './components/IngredientsSection'
import HowToUse from './components/HowToUse'
import ResultsTimeline from './components/ResultsTimeline'
import TestimonialSlider from './components/TestimonialSlider'
import TrustGuarantee from './components/TrustGuarantee'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import ClosingMessage from './components/ClosingMessage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProblemSection />
      <ValueSection />
      <IngredientsSection />
      <HowToUse />
      <ResultsTimeline />
      <TestimonialSlider />
      <TrustGuarantee />
      <PricingSection />
      <FAQSection />
      <ClosingMessage />
      <Footer />
    </div>
  )
}

export default App
