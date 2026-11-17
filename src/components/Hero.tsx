import { motion } from 'motion/react'

export function Hero() {
  return (
    <div className=" wrap ">
      <div className=" flex gap-16">
      <div className=" hero">
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        Get online. Get found. <span>Get customers.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.28 }}
      >
        Websites, apps, software, design and marketing from one team, so you deal with one partner instead of three.
      </motion.p>
      <motion.div
        className="row"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.42 }}
      >
        <motion.a className="btn" href="/contact#contact-options" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
          Start a project
        </motion.a>
        <motion.a className="btn ghost" href="#e2e" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
          View our services
        </motion.a>
      </motion.div>
      </div>
  {/* <div className="flex items-center justify-center w-full max-w-[420px] ">
    <img className="h-auto  w-full" width="220" height="1220" src="/hero.png" alt="" />
  </div> */}
      </div>

    </div>
  )
}
