import { motion } from 'motion/react'
import { fadeUpVariants, inViewOptions, staggerVariants } from './motion'

const clients = [
  {
    role: 'Co-founder, Cogniflow Automation',
    name: 'Rishabh Sharma',
    review:
      'Working with Moneh on my AI Calling Agent was a great experience. I was building a platform to automate inbound and outbound calls using human-like AI agents, and Moneh helped turn the idea into a working product. They understood the requirements quickly, handled the web development smoothly, and were responsive throughout the process. The final result was clean, modern, and aligned with what I had in mind. I’d definitely recommend Moneh to anyone looking for a team that can handle web development and turn an idea into a real product.',
    image: '/images/clients/RishabSharma.jpeg',
  },
  {
    role: 'Founder, ShiftSwip',
    name: 'Manoj Prajapati',
    review:
      'We had an idea for a platform that could connect cafes and warehouses with workers looking for shifts, but turning the idea into an actual product was the challenging part. Moneh made that process much easier. They took care of the development, understood what we were trying to build, and were flexible when we wanted to make changes along the way. The marketplace turned out really well and is something we can actually build on going forward. Great team to work with.',
    image: '/images/clients/Manojprajapati.jpeg',
    isLogo: true,
  },

  {
    role: 'CFO, Onlydevs',
    name: 'Priyanka Singh',
    image: '/images/clients/priyankasingh.jpeg',
    isLogo: true,
    review:
      'I loved working with Moneh on my developer community platform. They understood the idea really well and brought it to life with a clean, engaging experience around hot takes, open source, and hackathons. Really happy with how it turned out!',
  },
]

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
            href="/contact#contact-options"
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
          {clients.map((client) => (
            <motion.article
              key={client.name}
              className="tm-card"
              variants={fadeUpVariants}
              whileHover={{ y: -6 }}
            >
              <div className="tm-who">
                <img
                  className={`tm-av${client.isLogo ? ' tm-av-logo' : ''}`}
                  src={client.image}
                  alt={`${client.name}${client.isLogo ? "'s company logo" : ''}`}
                />
                <div className="tm-profile">
                  <b>{client.name}</b>
                  <span className="mute">{client.role}</span>
                </div>
              </div>
              <p className="tm-q">{client.review}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
