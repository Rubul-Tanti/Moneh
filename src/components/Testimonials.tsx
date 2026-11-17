import { motion } from 'motion/react'
import { fadeUpVariants, inViewOptions, staggerVariants } from './motion'

export function Testimonials() {
  return (
    <motion.section id="clients">
      <div className="wrap border-t border-gray-300 ">
        <div className="wy-top">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOptions}
          >
            <p className="wy-lab pt-14">What our clients say</p>
            <h2>Hear it from the people we build for</h2>
          </motion.div>
          <motion.a
            className="btn"
            href="mailto:hello@rubultanti.in"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </div>

        <motion.div
          className="tm-grid"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOptions}
        >
          <motion.article
            className="tm-card"
            variants={fadeUpVariants}
            whileHover={{ y: -6 }}
          >
            <div className="tm-who">
              <span className="tm-av">C</span>
              <div>
                <b>Client name</b>
                <br />
                <span className="mute">Role, company</span>
              </div>
            </div>
            <div className="tm-vid" role="img" aria-label="Video testimonial placeholder">
              <span className="tm-play"></span>
              <span className="tm-cap">Video testimonial</span>
            </div>
            <span className="tm-flag">Sample, replace with a real review</span>
          </motion.article>

          <motion.article
            className="tm-card"
            variants={fadeUpVariants}
            whileHover={{ y: -6 }}
          >
            <div className="tm-who">
              <span className="tm-av">C</span>
              <div>
                <b>Client name</b>
                <br />
                <span className="mute">Role, company</span>
              </div>
            </div>
            <p className="tm-q">
              Your client’s feedback goes here. Share what it was like to work with Moneh and what changed for their
              business.
            </p>
            <span className="tm-mark" aria-hidden="true">
              ”
            </span>
            <span className="tm-flag">Sample, replace with a real review</span>
          </motion.article>

          <motion.article
            className="tm-card"
            variants={fadeUpVariants}
            whileHover={{ y: -6 }}
          >
            <div className="tm-who">
              <span className="tm-av">C</span>
              <div>
                <b>Client name</b>
                <br />
                <span className="mute">Role, company</span>
              </div>
            </div>
            <div className="tm-vid" role="img" aria-label="Video testimonial placeholder">
              <span className="tm-play"></span>
              <span className="tm-cap">Video testimonial</span>
            </div>
            <span className="tm-flag">Sample, replace with a real review</span>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  )
}
