import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'
import { MotionConfig } from 'motion/react'
import './App.css'
import { AboutTrust } from './components/AboutTrust'
import { ContactPage } from './components/ContactPage'
import { CaseStudies, ProjectCaseStudy } from './components/CaseStudies'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServicesSection } from './components/ServicesSection'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'
import { scrollToElement, setSmoothScrollInstance } from './smoothScroll'

function App() {
  const { hash, pathname } = useLocation()

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

  useEffect(() => {
    if (!hash) return

    const target = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) scrollToElement(target)
  }, [hash, pathname])

  return (
    <MotionConfig reducedMotion="user">
      <Header />

      <main id="top">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ServicesSection />
                <AboutTrust />
                <Testimonials />
                <WhyUs />
              </>
            }
          />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<ProjectCaseStudy />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </MotionConfig>
  )
}

export default App
