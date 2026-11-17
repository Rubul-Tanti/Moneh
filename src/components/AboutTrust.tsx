import { motion } from 'motion/react'
import { fadeUpVariants, inViewOptions } from './motion'

const clients = [
  { name: 'ShiftSwip', logo: '/images/clients/shiftswip-logo.svg' },
  { name: 'Onlydevs', logo: '/images/clients/onlydevs.jpg' },
  { name: 'Cogniflow Automation', logo: '/images/clients/cogniflow-logo.webp' },
]

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
            <motion.a className="btn" href="/contact#contact-options" whileHover={{ y: -3 }}>
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
          </motion.div>
          <div className="tr-row">
            {clients.map((client) => (
              <div key={client.name} className="mt-8  mx-auto flex flex-col items-center gap-2 justify-center   " role="img" aria-label={client.name}>
                <img src={client.logo} alt={client.name} width="100" height="100"  className="rounded-4xl border border-gray-200" />
                <span className="font-bold">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}
