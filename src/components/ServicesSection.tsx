import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { scrollToElement } from '../smoothScroll'

const stageContent = {
  build: {
    number: '01',
    label: 'Build',
    tagline: 'Turn your idea into something people can use.',
    description:
      'From beautiful websites to powerful web applications, we design and build digital experiences that work.',
    services: [
      {
        title: 'Web design',
        description:
          'Modern, responsive websites designed around your brand, audience and goals.',
        img: '/images/services/web-design.webp',
        width: 1024,
        height: 768,
      },
      {
        title: 'Web development',
        description:
          'Fast, scalable websites and full-stack applications built for real businesses.',
        img: '/images/services/ecom_website.png',
        width: 1274,
        height: 794,
      },
    ],
  },

  expand: {
    number: '02',
    label: 'Expand',
    tagline: 'Put your business in your customers’ hands.',
    description:
      'Extend your digital product beyond the browser with mobile experiences and intelligent AI-powered features.',
    services: [
      {
        title: 'Mobile development',
        description:
          'Cross-platform mobile apps for iOS and Android using modern technologies.',
        img: '/images/services/mobile.webp',
        width: 1024,
        height: 768,
      },
      {
        title: 'AI integration',
        description:
          'AI-powered chatbots, automation, assistants and intelligent features integrated into your products.',
        img: '/images/services/ai.png',
        width: 1536,
        height: 1024,
      },
    ],
  },

  grow: {
    number: '03',
    label: 'Grow',
    tagline: 'Look better. Get noticed. Get customers.',
    description:
      'Build a recognisable brand and reach the people who matter with creative marketing and consistent content.',
    services: [
      {
        title: 'Logo & branding',
        description:
          'Distinctive logos and visual identities that make your business instantly recognisable.',
        img: '/images/services/logo.png',
        width: 1536,
        height: 1024,
      },
      {
        title: 'Social media marketing',
        description:
          'Content, campaigns and social media strategy designed to build attention and bring in customers.',
        img: '/images/services/social.webp',
        width: 1024,
        height: 768,
      },
    ],
  },
} as const

const stageOrder = ['build', 'expand', 'grow'] as const

type StageKey = (typeof stageOrder)[number]

export function ServicesSection() {
  const [activeStage, setActiveStage] =
    useState<StageKey>('build')

  const isProgrammaticScroll = useRef(false)

  /*
   * Scrollspy
   * Changes the active service category as the user
   * moves through the page.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return

      const triggerPoint =
        window.scrollY + window.innerHeight * 0.38

      for (const stage of stageOrder) {
        const element = document.getElementById(
          `stage-block-${stage}`,
        )

        if (!element) continue

        const elementTop =
          element.getBoundingClientRect().top +
          window.scrollY

        const elementBottom =
          element.getBoundingClientRect().bottom +
          window.scrollY

        if (
          triggerPoint >= elementTop &&
          triggerPoint < elementBottom
        ) {
          setActiveStage(stage)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      )
    }
  }, [])

  /*
   * Smooth scroll to service category
   */
  const handleTabClick = (stage: StageKey) => {
    setActiveStage(stage)

    isProgrammaticScroll.current = true

    const element = document.getElementById(
      `stage-block-${stage}`,
    )

    if (element) {
      scrollToElement(element, -110)
    }

    window.setTimeout(() => {
      isProgrammaticScroll.current = false
    }, 900)
  }

  return (
    <motion.section
      id="e2e"
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-t border-black/10 bg-[#f7f7f5] py-24 lg:py-32"
    >
      <div className="wrap">

        {/* ====================================================== */}
        {/* HEADER */}
        {/* ====================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">

          {/* LEFT */}
          <div>

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#c9a24b]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/45">
                What we do
              </span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[950px] text-[clamp(3.3rem,7.5vw,8rem)] font-medium leading-[0.84] tracking-[-0.065em] text-black"
              style={{
                fontFamily: 'var(--serif)',
              }}
            >
              We design.
              <br />

              We build.
              <br />

              <span className="text-black/25">
                We grow.
              </span>
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="max-w-[520px] lg:pb-3"
          >
            <p
              className="mb-6 border-l-[3px] border-[#c9a24b] pl-5 text-[1.5rem] font-medium leading-[1.05]"
              style={{
                fontFamily: 'var(--serif)',
              }}
            >
              Everything your business needs to go digital.
            </p>

            <p className="text-[1rem] leading-7 text-black/55">
              Websites, mobile apps, AI integrations, branding
              and social media marketing — all under one roof,
              so you can build, launch and grow without juggling
              multiple teams.
            </p>
          </motion.div>
        </div>

        {/* ====================================================== */}
        {/* SERVICE MARQUEE */}
        {/* ====================================================== */}

        <div className="mt-16 overflow-hidden border-y border-black/10 py-5">
          <motion.div
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex w-max items-center whitespace-nowrap"
          >
            {[
              'WEB DESIGN',
              'WEB DEVELOPMENT',
              'MOBILE DEVELOPMENT',
              'AI INTEGRATION',
              'LOGO & BRANDING',
              'SOCIAL MEDIA MARKETING',
              'WEB DESIGN',
              'WEB DEVELOPMENT',
              'MOBILE DEVELOPMENT',
              'AI INTEGRATION',
              'LOGO & BRANDING',
              'SOCIAL MEDIA MARKETING',
            ].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center"
              >
                <span className="mx-7 text-[11px] font-bold tracking-[0.25em] text-black/45">
                  {item}
                </span>

                <span className="text-[#c9a24b]">
                  •
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ====================================================== */}
        {/* MAIN SERVICE AREA */}
        {/* ====================================================== */}

        <div className="mt-28 lg:mt-40">

          <div className="grid gap-16 lg:grid-cols-[220px_minmax(0,1fr)]">

            {/* ================================================== */}
            {/* STICKY NAVIGATION */}
            {/* ================================================== */}

            <div className="lg:sticky lg:top-28 lg:h-fit">

              <div className="mb-8 hidden text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 lg:block">
                Explore services
              </div>

              <div className="relative">

                {/* Vertical line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-black/10" />

                <div className="flex flex-col gap-8">

                  {stageOrder.map((stage) => {
                    const data =
                      stageContent[stage]

                    const active =
                      activeStage === stage

                    return (
                      <button
                        key={stage}
                        type="button"
                        role="tab"
                        aria-selected={
                          active
                        }
                        onClick={() =>
                          handleTabClick(
                            stage,
                          )
                        }
                        className="group relative flex items-center gap-5 text-left"
                      >

                        {/* Dot */}
                        <span
                          className={[
                            'relative z-10 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full border bg-[#f7f7f5] transition-all duration-300',
                            active
                              ? 'border-[#c9a24b]'
                              : 'border-black/20 group-hover:border-black/50',
                          ].join(
                            ' ',
                          )}
                        >
                          <span
                            className={[
                              'h-[5px] w-[5px] rounded-full bg-[#c9a24b] transition-transform duration-300',
                              active
                                ? 'scale-100'
                                : 'scale-0',
                            ].join(
                              ' ',
                            )}
                          />
                        </span>

                        <div>

                          <span
                            className={[
                              'block text-[1.55rem] font-medium leading-none transition-all duration-300',
                              active
                                ? 'translate-x-1 text-black'
                                : 'text-black/30 group-hover:text-black/60',
                            ].join(
                              ' ',
                            )}
                            style={{
                              fontFamily:
                                'var(--serif)',
                            }}
                          >
                            {data.label}
                          </span>

                          <span
                            className={[
                              'mt-2 block text-[10px] font-bold tracking-[0.2em] transition-opacity duration-300',
                              active
                                ? 'opacity-100'
                                : 'opacity-0',
                            ].join(
                              ' ',
                            )}
                          >
                            {data.number}
                          </span>

                        </div>
                      </button>
                    )
                  })}

                </div>
              </div>
            </div>

            {/* ================================================== */}
            {/* CONTENT */}
            {/* ================================================== */}

            <div className="min-w-0">

              {stageOrder.map(
                (stageKey) => {
                  const stage =
                    stageContent[
                      stageKey
                    ]

                  const active =
                    stageKey ===
                    activeStage

                  return (
                    <motion.div
                      key={
                        stageKey
                      }
                      id={`stage-block-${stageKey}`}
                      role="tabpanel"
                      className="mb-40 scroll-mt-28 last:mb-0"
                      animate={{
                        opacity:
                          active
                            ? 1
                            : 0.38,
                      }}
                      transition={{
                        duration:
                          0.4,
                      }}
                    >

                      {/* ====================================== */}
                      {/* STAGE HEADING */}
                      {/* ====================================== */}

                      <div className="mb-12">

                        <div className="mb-5 flex items-center justify-between">

                          <span className="text-xs font-bold tracking-[0.25em] text-[#c9a24b]">
                            {stage.number}
                          </span>

                          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/25">
                            {stage.label}
                          </span>

                        </div>

                        <h3
                          className="max-w-[950px] text-[clamp(2.8rem,6vw,6.3rem)] font-medium leading-[0.88] tracking-[-0.05em]"
                          style={{
                            fontFamily:
                              'var(--serif)',
                          }}
                        >
                          {stage.tagline}
                        </h3>

                        <p className="mt-7 max-w-[600px] text-base leading-7 text-black/50">
                          {
                            stage.description
                          }
                        </p>

                      </div>

                      {/* ====================================== */}
                      {/* SERVICE CARDS */}
                      {/* ====================================== */}

                      <div className="grid gap-5">

                        {stage.services.map(
                          (
                            service,
                            index,
                          ) => (
                            <motion.article
                              key={
                                service.title
                              }
                              initial={{
                                opacity: 0,
                                y: 35,
                              }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                              }}
                              viewport={{
                                once: true,
                                amount: 0.08,
                              }}
                              transition={{
                                duration:
                                  0.65,
                                delay:
                                  index *
                                  0.1,
                                ease: [
                                  0.16,
                                  1,
                                  0.3,
                                  1,
                                ],
                              }}
                              className={[
                                'group relative overflow-hidden rounded-[28px] bg-black',
                                index %
                                  3 ===
                                1
                                  ? 'h-[580px] lg:h-[650px]'
                                  : 'h-[490px] lg:h-[540px]',
                              ].join(
                                ' ',
                              )}
                            >

                              {/* IMAGE */}

                              <motion.img
                                src={
                                  service.img
                                }
                                alt={
                                  service.title
                                }
                                width={service.width}
                                height={service.height}
                                className="absolute inset-0 h-full w-full object-cover"
                                whileHover={{
                                  scale: 1.055,
                                }}
                                transition={{
                                  duration:
                                    0.9,
                                  ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                  ],
                                }}
                              />

                              {/* Dark gradient */}

                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                              {/* Subtle hover overlay */}

                              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                              {/* ================================= */}
                              {/* TOP CONTENT */}
                              {/* ================================= */}

                              <div className="absolute left-7 right-7 top-7 flex items-start justify-between lg:left-10 lg:right-10 lg:top-10">

                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-[11px] font-bold text-white backdrop-blur-md">
                                  {String(
                                    index +
                                      1,
                                  ).padStart(
                                    2,
                                    '0',
                                  )}
                                </span>

                                <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
                                  {stage.label}
                                </span>

                              </div>

                              {/* ================================= */}
                              {/* BOTTOM CONTENT */}
                              {/* ================================= */}

                              <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-10">

                                <div className="max-w-[800px]">

                                  <h4
                                    className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.04em] text-white"
                                    style={{
                                      fontFamily:
                                        'var(--serif)',
                                    }}
                                  >
                                    {
                                      service.title
                                    }
                                  </h4>

                                  <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                                    <p className="max-w-[520px] text-sm leading-6 text-white/65 lg:text-base">
                                      {
                                        service.description
                                      }
                                    </p>

                                    {/* Arrow */}


                                  </div>

                                </div>

                              </div>

                            </motion.article>
                          ),
                        )}

                      </div>
                    </motion.div>
                  )
                },
              )}

            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* BOTTOM CTA */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-32 border-t border-black/10 pt-12 lg:mt-44"
        >

          {/* <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-black/30">
                Have something in mind?
              </span>

              <h3
                className="max-w-[750px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.05em]"
                style={{
                  fontFamily:
                    'var(--serif)',
                }}
              >
                Let’s build
                <br />
                something
                <span className="text-[#c9a24b]">
                  {' '}
                  great.
                </span>
              </h3>
            </div>

            <button
              type="button"
              className="group flex w-fit items-center gap-5 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:gap-7"
            >
              Start a project

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:-rotate-45">
                ↗
              </span>
            </button>

          </div> */}
        </motion.div>

      </div>
    </motion.section>
  )
}