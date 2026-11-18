import { motion } from 'motion/react'

import { fadeUpVariants, inViewOptions } from './motion'
import { siGmail, siInstagram, siWhatsapp } from 'simple-icons'

const contactChannels = [
  {
    name: 'WhatsApp',
    description: 'Chat with our team directly about your project.',
    status: 'Chat on WhatsApp',
    href: 'https://wa.me/918638860645',
    icon: siWhatsapp,
  },
  {
    name: 'Instagram',
    description: 'Follow our work and send us a direct message.',
    status: '@moneh_studio',
    href: 'https://www.instagram.com/moneh_studio/',
    icon: siInstagram,
  },
  {
    name: 'Email',
    description:
      'Send us a note about your project and we’ll get back to you.',
    status: 'hello@rubultanti.in',
    href: 'mailto:hello@rubultanti.in',
    icon: siGmail,
  },
]

export function ContactPage() {
  return (
    <section className="contact-page" id="contact-options">
      <div className="wrap">
        {/* Logo */}
        <motion.div
          className="mb-12"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          viewport={inViewOptions}
        >
          <img
            src="/logo.png"
            alt="Moneh"
            width={2172}
            height={724}
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Intro */}
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
            Have an idea, a business that needs a better digital presence,
            or a product you want to build? Let’s talk.
          </p>
        </motion.div>

        {/* Contact options */}
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
              {/* Brand icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white">
                <svg
                  role="img"
                  aria-label={channel.name}
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current text-black"
                >
                  <path d={channel.icon.path} />
                </svg>
              </div>

              <span className="contact-option-label">
                Talk to us on
              </span>

              <h2>{channel.name}</h2>

              <p>{channel.description}</p>

              <a
                className="contact-status"
                href={channel.href}
                target={
                  channel.name !== 'Email'
                    ? '_blank'
                    : undefined
                }
                rel={
                  channel.name !== 'Email'
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                {channel.status} ↗
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}