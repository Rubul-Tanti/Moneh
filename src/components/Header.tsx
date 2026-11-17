import { motion } from 'motion/react'

export function Header() {
  const isContactPage = window.location.pathname.replace(/\/+$/, '') === '/contact'
  const homeHref = isContactPage ? '/' : ''

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="wrap">
        <nav aria-label="Main navigation">
          <motion.a className="logo" href={`${homeHref}#top`} aria-label="Moneh home" whileHover={{ scale: 1.04 }}>
            <img src="/logo.png" alt="Moneh logo" className="h-8 w-auto" />
          </motion.a>
          <ul>
            <li>
              <motion.a href={`${homeHref}#e2e`} whileHover={{ y: -2 }}>Services</motion.a>
            </li>
            <li>
              <motion.a href={`${homeHref}#cases`} whileHover={{ y: -2 }}>Cases</motion.a>
            </li>
            <li>
              <motion.a href={`${homeHref}#clients`} whileHover={{ y: -2 }}>Clients</motion.a>
            </li>
            <li>
              <motion.a href={`${homeHref}#why`} whileHover={{ y: -2 }}>Why us</motion.a>
            </li>
            <li>
              <motion.a href="/contact" aria-current={isContactPage ? 'page' : undefined} whileHover={{ y: -2 }}>
                Contact
              </motion.a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}
