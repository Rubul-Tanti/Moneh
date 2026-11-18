import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { fadeUpVariants, inViewOptions } from './motion'

const MotionLink = motion.create(Link)

export function Footer() {
  return (
    <motion.footer id="contact" className="ftr">
      <div className="wrap">
        <motion.div
          className="ftr-cta"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOptions}
        >
          <motion.h2 variants={fadeUpVariants}>Have an idea? Let’s build something great.</motion.h2>
          <MotionLink
            className="btn"
            to="/contact#contact-options"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </MotionLink>
        </motion.div>

        <motion.div
          className="ftr-bar"
          initial="hidden"
          whileInView="visible"
          viewport={inViewOptions}
          variants={fadeUpVariants}
        >
          <MotionLink className="logo" to="/#top" aria-label="Moneh home" whileHover={{ scale: 1.04 }}>
            <img
              src="/logo.png"
              alt="Moneh logo"
              width={2172}
              height={724}
              className="h-8 w-auto"
            />
          </MotionLink>
          <nav aria-label="Footer">
            <Link to="/#e2e">Services</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/#why">Why us</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <span className="mute">© Moneh </span>
        </motion.div>
      </div>
    </motion.footer>
  )
}
