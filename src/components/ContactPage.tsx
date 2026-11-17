import { motion } from 'motion/react'
import { fadeUpVariants, inViewOptions } from './motion'

const contactChannels = [
  {
    name: 'WhatsApp',
    description: 'Chat with our team directly about your project.',
    status: 'Direct link coming soon',
  },
  {
    name: 'Instagram',
    description: 'Follow our work and send us a direct message.',
    status: 'Profile link coming soon',
  },
  {
    name: 'Email',
    description: 'Send us a note about your project and we’ll get back to you.',
    status: 'hello@rubultanti.in',
    href: 'mailto:hello@rubultanti.in',
  },
]

export function ContactPage() {
  return (
    <section className="contact-page" id="contact-options">
      <div className="wrap">
        <motion.div
          className="contact-intro"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          viewport={inViewOptions}
        >
          <p className="wy-lab">Contact</p>
          <h1>Let’s talk about what you’re building.</h1>
          <p className="contact-lede">
            Choose the channel that works best for you. We’re getting our direct contact links ready.
          </p>
        </motion.div>

        <div className="contact-options">
          {contactChannels.map((channel, index) => (
            <motion.article
              className="contact-option"
              key={channel.name}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.12 }}
            >
              <span className="contact-option-label">Talk to us on</span>
              <h2>{channel.name}</h2>
              <p>{channel.description}</p>
              {channel.href ? (
                <a className="contact-status" href={channel.href}>
                  {channel.status}
                </a>
              ) : (
                <span className="contact-status">{channel.status}</span>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
