import { motion } from 'motion/react'
import { fadeUpVariants, inViewOptions } from './motion'

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
          <motion.a
            className="btn"
            href="mailto:hello@rubultanti.in"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>

        <motion.div
          className="ftr-bar"
          initial="hidden"
          whileInView="visible"
          viewport={inViewOptions}
          variants={fadeUpVariants}
        >
          <motion.a className="logo" href="#top" aria-label="Moneh home" whileHover={{ scale: 1.04 }}>
            <img src="/logo.png" alt="Moneh logo" className="h-8 w-auto" />
          </motion.a>
          <nav aria-label="Footer">
            <a href="#e2e">Services</a>
            <a href="#cases">Cases</a>
            <a href="#clients">Clients</a>
            <a href="#why">Why us</a>
            <a href="mailto:hello@rubultanti.in">Contact</a>
          </nav>
          <span className="mute">© Moneh · rubultanti.in</span>
        </motion.div>
      </div>
    </motion.footer>
  )
}
