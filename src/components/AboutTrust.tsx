import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { fadeUpVariants, inViewOptions } from './motion'

const MotionLink = motion.create(Link)

const clients = [
  { name: 'ShiftSwip', logo: '/images/clients/shiftswip-logo.svg' },
  { name: 'Onlydevs', logo: '/images/clients/onlydevs.jpg' },
  { name: 'Cogniflow Automation', logo: '/images/clients/cogniflow-logo.jpg' },
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
            <MotionLink className="btn" to="/contact#contact-options" whileHover={{ y: -3 }}>
              Talk to us
            </MotionLink>
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
          <div className="flex gap-4 flex-wrap ">
            {clients.map((client) => (
              <div key={client.name} className="mt-8  mx-auto  flex  items-center gap-2 justify-center   " role="img" aria-label={client.name}>
                <img src={client.logo} alt={client.name}   className=" h-auto w-[30px] md:w-[50px] rounded-lg md:rounded-xl   border border-gray-200" />
                <span className="font-bold text-lg md:text-2xl">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}
