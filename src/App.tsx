import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { MotionConfig } from 'motion/react'
import './App.css'
import { AboutTrust } from './components/AboutTrust'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServicesSection } from './components/ServicesSection'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'
import { setSmoothScrollInstance } from './smoothScroll'

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        duration: 1.1,
        smoothWheel: true,
        anchors: true,
      },
    })

    setSmoothScrollInstance(scroll)

    return () => {
      setSmoothScrollInstance(null)
      scroll.destroy()
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <Header />

      <main id="top">
        <Hero />
        <ServicesSection />
        <AboutTrust />
        {/* <CaseStudies /> */}
        <Testimonials />
        <WhyUs />
      </main>

      <Footer />
    </MotionConfig>
  )
}

export default App
