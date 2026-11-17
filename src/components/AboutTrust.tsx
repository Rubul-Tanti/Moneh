import { motion } from 'motion/react'
import { fadeUpVariants, inViewOptions, staggerVariants } from './motion'

export function AboutTrust() {
  return (
    <>
      <motion.section id="cases" className="wrap">
        <motion.p
          className="wy-lab pt-14"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOptions}
        >
          Featured cases
        </motion.p>
        <div className=" mt-14 abt">
          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOptions}
          >
            Design and engineering partner for scaling and regulated companies
          </motion.h2>
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOptions}
            transition={{ delay: 0.12 }}
          >
            <p>
              We work with healthtech, edtech, and SaaS teams who’ve outgrown what they’ve built. Our process adapts to
              yours as we take your platforms, apps, and websites from research through launch and long-term support.
            </p>
            <motion.a className="btn" href="mailto:hello@rubultanti.in" whileHover={{ y: -3 }}>
              Talk to us
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="trust" id="trust">
        <div className="wrap">
          <motion.div
            className="tr-head"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOptions}
          >
            <p className="wy-lab">Trusted by</p>
            <span className="tm-flag">Sample, replace with real client logos</span>
          </motion.div>
          <motion.div
            className="tr-row"
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOptions}
          >
            {Array.from({ length: 6 }, (_, index) => (
              <motion.div
                key={index}
                className="tr-logo"
                role="img"
                aria-label="Client logo placeholder"
                variants={fadeUpVariants}
                whileHover={{ y: -4 }}
              >
                <i></i>
                <span>Client logo</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
