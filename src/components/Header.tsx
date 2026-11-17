import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

const MotionLink = motion.create(Link)

type NavItem = {
  number: string
  label: string
  to: string
}

export function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const isContactPage = pathname.replace(/\/+$/, '') === '/contact'
  const isCaseStudiesPage = pathname === '/case-studies'
  const homePath = pathname === '/' ? '' : '/'

  const closeMenu = (): void => setMenuOpen(false)

  const navItems: NavItem[] = [
    { number: '01', label: 'Services', to: `${homePath}#e2e` },
    { number: '02', label: 'Case Studies', to: '/case-studies' },
    { number: '03', label: 'Why us', to: `${homePath}#why` },
    { number: '04', label: 'Contact', to: '/contact' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent | TouchEvent): void => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu()
      }
    }

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    closeMenu()
  }, [pathname])

  const isActive = (item: NavItem): boolean => {
    if (item.label === 'Contact') return isContactPage
    if (item.label === 'Case Studies') return isCaseStudiesPage
    return false
  }

  const handleMenuToggle = (): void => {
    setMenuOpen((previous) => !previous)
  }

  return (
    <motion.header
      className="relative z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="wrap relative" ref={menuRef}>
        <nav
          className="flex min-h-[64px] items-center justify-between sm:min-h-[72px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <MotionLink
            className="logo shrink-0"
            to={`${homePath}#top`}
            aria-label="Moneh home"
            whileHover={{ scale: 1.04 }}
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Moneh logo"
              className="h-7 w-auto sm:h-8"
            />
          </MotionLink>

          {/* Desktop navigation */}
          <div className="hidden md:flex" >
          <ul className=" items-center gap-8 ">
            {navItems.map((item) => (
              <li key={item.number}>
                <MotionLink
                  to={item.to}
                  aria-current={isActive(item) ? 'page' : undefined}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-black/70 transition-colors hover:text-black"
                >
                  {item.label}
                </MotionLink>
              </li>
            ))}
          </ul>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={handleMenuToggle}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:bg-black/[0.04] md:hidden"
          >
            <span className="relative block h-4 w-5">
              <motion.span
                initial={false}
                animate={
                  menuOpen
                    ? { rotate: 45, y: 6.25, opacity: 1 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-0 block h-[1.5px] w-5 bg-black"
              />
              <motion.span
                initial={false}
                animate={
                  menuOpen
                    ? { opacity: 0 }
                    : { opacity: 1 }
                }
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-[6px] block h-[1.5px] w-5 bg-black"
              />
              <motion.span
                initial={false}
                animate={
                  menuOpen
                    ? { rotate: -45, y: -6.25, opacity: 1 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-[12px] block h-[1.5px] w-5 bg-black"
              />
            </span>
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 right-0 top-full z-20 mt-2 origin-top rounded-[20px] border border-black/10 bg-white p-2 shadow-[0_16px_50px_rgba(0,0,0,0.10)] md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <MotionLink
                    key={item.number}
                    to={item.to}
                    onClick={closeMenu}
                    whileHover={{ x: 4 }}
                    aria-current={isActive(item) ? 'page' : undefined}
                    className={`flex min-h-[52px] items-center gap-3 rounded-[14px] px-3 text-[15px] font-medium transition-colors ${
                      isActive(item)
                        ? 'bg-black/[0.05] text-black'
                        : 'text-black/70 hover:bg-black/[0.04] hover:text-black'
                    }`}
                  >
                    <span className="w-5 text-[10px] font-semibold tracking-[0.18em] text-black/30">

                    </span>

                    {item.label}

                    <span className="ml-auto text-sm text-black/30">
                      ↗
                    </span>
                  </MotionLink>
                ))}
              </div>


            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}