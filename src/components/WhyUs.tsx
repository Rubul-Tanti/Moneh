import { motion } from 'motion/react'
import { fadeUpVariants, inViewOptions, staggerVariants } from './motion'

export function WhyUs() {
  return (
    <motion.section id="why">
      <div className="wrap border-t border-gray-300">
        <div className="wy-top pt-14">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOptions}
          >
            <p className="wy-lab ">Why choose us?</p>
            <h2>Your growth is our priority</h2>
          </motion.div>
          <motion.a
            className="btn"
            href="mailto:hello@rubultanti.in"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOptions}
            whileHover={{ y: -3 }}
          >
            Get in touch
          </motion.a>
        </div>

        <motion.div
          className="wy-grid"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOptions}
        >
          <motion.article className="wy-card" variants={fadeUpVariants} whileHover={{ y: -6 }}>
            <div>
              <p className="k">One team</p>
              <h3>Design, development and marketing under one roof.</h3>
            </div>
            <p className="t">
              Your website, app, logo and marketing are handled by the same people, so nothing gets lost between three
              agencies and you only have one partner to talk to.
            </p>
          </motion.article>

          <motion.article className="wy-card" variants={fadeUpVariants} whileHover={{ y: -6 }}>
            <div>
              <p className="k">Clear pricing</p>
              <h3>You know the cost before we start.</h3>
            </div>
            <p className="t">
              Every project begins with a discovery call and a proposal with scope, timeline and price. Monthly
              packages have fixed prices, with no hidden costs.
            </p>
          </motion.article>

          <motion.article className="wy-card" variants={fadeUpVariants} whileHover={{ y: -6 }}>
            <div>
              <p className="k">Fast delivery</p>
              <h3>Regular updates, not silence.</h3>
            </div>
            <p className="t">
              You approve the look and direction first, then follow progress as we build, with time to give feedback and
              request revisions before launch.
            </p>
          </motion.article>

          <motion.article className="wy-card" variants={fadeUpVariants} whileHover={{ y: -6 }}>
            <div>
              <p className="k">Support after launch</p>
              <h3>We stay with you after you go live.</h3>
            </div>
            <p className="t">
              Launch is not the end. We support your site or app afterwards, and you own the final design and code after
              full payment.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  )
}
