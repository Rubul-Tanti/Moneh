import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { fadeUpVariants, inViewOptions, staggerVariants } from './motion'
import {
  caseStudies,
  type CaseStudySection,
  type Heading,
  type PreviewType,
} from './caseStudy'

const MotionLink = motion.create(Link)

/* ------------------------------------------------------------------ */
/* Shared class strings                                                */
/* ------------------------------------------------------------------ */

const wrap = 'wrap'
const eyebrowCls = 'wy-lab'
const h2Cls =
  'text-zinc-900'
const bodyCls = 'text-base leading-relaxed text-zinc-600'
const borderCls = 'border-black/10'
const sectionCls = `border-t border-black/10 py-16 sm:py-24`
const chipCls = 'rounded-full border border-black/10 bg-[#f7f7f5] px-3.5 py-1.5 text-sm text-zinc-700'
const primaryBtn = 'btn'
const secondaryBtn = 'btn ghost'

/* ------------------------------------------------------------------ */
/* Product preview (Cogniflow gallery)                                 */
/* ------------------------------------------------------------------ */

const previewTitles: Record<PreviewType, string> = {
  agents: 'AI Dashboard',
  configuration: 'AI Agent Configuration',
  analytics: 'Analytics Dashboard',
  calls: 'Call Management',
}

const barHeights = [34, 52, 43, 68, 51, 82, 61, 93, 70, 100, 79, 88]
const panel = 'rounded-lg border border-zinc-200 bg-white p-3'
const label = 'text-[10px] font-semibold uppercase tracking-wide text-zinc-400'
const inputCls =
  'rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-xs text-zinc-700'

function ProductPreview({ type }: { type: PreviewType }) {
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50"
    >
      <div className="flex w-12 flex-col items-center gap-3 border-r border-zinc-200 py-4">
        <span className="size-5 rounded-md bg-[#08b8c8]" />
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="size-4 rounded bg-zinc-200" />
        ))}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className={label}>Cogniflow</span>
            <strong className="text-sm text-zinc-900">{previewTitles[type]}</strong>
          </div>
          <span className="grid size-6 place-items-center rounded-md bg-[#08b8c8] text-xs text-white">＋</span>
        </div>

        {type === 'configuration' ? (
          <div className="grid flex-1 grid-cols-2 gap-3">
            <div className={`${panel} flex flex-col gap-2`}>
              <span className={label}>Agent name</span>
              <span className={inputCls}>Appointment Assistant</span>
              <span className={label}>Voice & language</span>
              <span className={inputCls}>Warm · Hindi + English</span>
            </div>
            <div className={`${panel} flex flex-col gap-2`}>
              <span className={label}>Agent instructions</span>
              {['w-full', 'w-5/6', 'w-2/3'].map((w) => (
                <span key={w} className={`h-2 rounded bg-zinc-200 ${w}`} />
              ))}
            </div>
          </div>
        ) : type === 'analytics' ? (
          <>
            <div className="grid grid-cols-3 gap-2">
              {[
                ['Calls', 'Activity overview'],
                ['Agents', 'Performance'],
                ['Leads', 'Call outcomes'],
              ].map(([title, sub]) => (
                <span key={title} className={`${panel} flex flex-col`}>
                  <b className="text-xs text-zinc-900">{title}</b>
                  <small className="text-[10px] text-zinc-500">{sub}</small>
                </span>
              ))}
            </div>
            <div className={`${panel} flex flex-1 items-end gap-1.5`}>
              {barHeights.map((h, i) => (
                <i
                  key={i}
                  className="flex-1 rounded-sm bg-[#08b8c8]/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </>
        ) : (
          <div className={`${panel} flex flex-1 flex-col gap-2 text-[11px]`}>
            <div className={`grid grid-cols-3 ${label}`}>
              <span>Contact</span>
              <span>Agent</span>
              <span>Status</span>
            </div>
            {['Inbound lead', 'Appointment query', 'Sales enquiry', 'Support call'].map((call, i) => (
              <div
                key={call}
                className="grid grid-cols-3 items-center border-t border-zinc-100 pt-2 text-zinc-600"
              >
                <span className="font-medium text-zinc-900">{call}</span>
                <span>{type === 'calls' ? 'Follow-up' : ['Reception', 'Sales', 'Booking', 'Support'][i]}</span>
                <span
                  className={
                    type === 'calls' && i === 1
                      ? 'text-amber-600'
                      : 'text-emerald-600'
                  }
                >
                  {type === 'calls' && i === 1 ? 'Missed' : 'Completed'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Case studies list page                                              */
/* ------------------------------------------------------------------ */

export function CaseStudies() {
  return (
    <section className="case-studies-page">
      <div className={wrap}>
        <motion.div
          className="case-studies-content"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          viewport={inViewOptions}
        >
          <div className="case-studies-intro">
            <p className={eyebrowCls}>Selected work</p>
            <h1>
              Products built around real ideas and ambitious teams.
            </h1>
            <p>
              From AI-powered platforms to marketplaces and developer communities, we design and build digital
              products made for real users and real businesses.
            </p>
          </div>

          <motion.div
            className="case-studies-list"
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            viewport={inViewOptions}
          >
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.name}
                variants={fadeUpVariants}
                whileHover={{ y: -5 }}
                className="case-study-card"
              >
                <Link
                  to={study.href}
                  aria-label={`View ${study.name} case study`}
                  className="case-study-card-overlay"
                />

                <div
                  className={`case-study-visual${study.hero ? '' : ' case-study-visual-logo'}`}
                >
                  <img
                    src={study.hero ?? study.logo}
                    alt={study.hero ? `${study.name} project preview` : `${study.name} logo`}
                  />
                  <span className="case-study-number">
                    0{index + 1}
                  </span>
                  <span aria-hidden="true" className="case-study-arrow">
                    ↗
                  </span>
                </div>

                <div className="case-study-content">
                  <div className="case-study-heading">
                    <div className="case-study-copy">
                      <p className="case-study-category">{study.category}</p>
                      <h2>{study.name}</h2>
                      <p className="case-study-description">{study.description}</p>
                    </div>
                    {study.live && (
                      <a
                        href={study.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="case-study-live"
                      >
                        Visit live project <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>

                  <div className="case-study-meta">
                    <p>Technology</p>
                    <ul aria-label={`${study.name} technology`}>
                      {study.tech.map((t) => (
                        <li key={t}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-study-footer">
                    <div className="case-study-services">
                      <span>Services</span>
                      <ul aria-label={`${study.name} services`}>
                        {study.work.map((w) => (
                          <li key={w}>{w}</li>
                        ))}
                      </ul>
                    </div>
                    <span className="case-study-link">
                      View case study <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOptions}
            className="case-studies-cta"
          >
            <div>
              <p className={eyebrowCls}>Start something new</p>
              <h2>Have an idea you’re ready to build?</h2>
            </div>
            <MotionLink
              to="/contact#contact-options"
              className={primaryBtn}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Talk to us
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Dynamic case study page                                             */
/* ------------------------------------------------------------------ */

export function ProjectCaseStudy() {
  const { slug } = useParams()
  const study = caseStudies.find((item) => item.href === `/case-studies/${slug}`)

  if (!study) return <Navigate to="/case-studies" replace />

  const summary = [
    { label: 'Project', value: study.overview.project },
    { label: 'Industry', value: study.overview.industry },
    { label: 'Moneh’s work', value: study.overview.role },
    ...(study.overview.platform ? [{ label: 'Platform', value: study.overview.platform }] : []),
    ...(study.overview.extra ?? []),
  ]

  return (
    <article className="project-case-study">
      {/* HERO */}
      <section className="pb-16 pt-10 sm:pb-24">
        <div className={wrap}>
          <Link
            to="/case-studies"
            className="inline-block text-sm text-zinc-500 transition hover:text-zinc-900"
          >
            ← All case studies
          </Link>

          <motion.div
            className="mt-10 max-w-3xl"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="mb-4 text-sm font-medium text-[#8a6414]">
              Case study <span className="mx-2 text-zinc-400">/</span> {study.category}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
              {study.name}
            </h1>
            <p className={`${bodyCls} mt-6 text-lg sm:text-xl`}>{study.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {study.live && (
                <a href={study.live} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                  Visit live project <span aria-hidden="true">↗</span>
                </a>
              )}
              <Link to="/contact#contact-options" className={secondaryBtn}>
                Start a similar project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={`mt-14 overflow-hidden rounded-2xl border bg-zinc-100 ${borderCls}`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {study.hero ? (
              <img src={study.hero} alt={`${study.name} project preview`} className="w-full" />
            ) : (
              <div className="grid place-items-center p-16">
                <img src={study.logo} alt={`${study.name} logo`} className="max-h-28 w-auto" />
              </div>
            )}
          </motion.div>

          <dl
            aria-label="Project overview"
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4"
          >
            {summary.map((item) => (
              <div key={item.label} className={`border-t pt-4 ${borderCls}`}>
                <dt className="text-sm text-zinc-500">{item.label}</dt>
                <dd className="mt-1 font-medium text-zinc-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* DYNAMIC SECTIONS */}
      {study.sections.map((section, index) => (
        <ProjectSection key={`${study.name}-${index}`} section={section} />
      ))}

      {/* SERVICES */}
      <section className={sectionCls}>
        <div className={wrap}>
          <SectionHeading eyebrow="What I worked on" title="The work behind the product." />
          <ul className="mt-8 flex flex-wrap gap-2">
            {study.work.map((service) => (
              <li key={service} className={chipCls}>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className={sectionCls}>
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <p className={eyebrowCls}>Have a product idea?</p>
            <h2 className={h2Cls}>
              {study.live
                ? `Want to see ${study.name} in action, or build something similar?`
                : 'Let’s build something that moves your business forward.'}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {study.live && (
              <a href={study.live} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
                Visit {study.name} <span aria-hidden="true">↗</span>
              </a>
            )}
            <Link to="/contact#contact-options" className={primaryBtn}>
              Start a similar project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

/* ------------------------------------------------------------------ */
/* Section renderers                                                   */
/* ------------------------------------------------------------------ */

function SectionHeading({ eyebrow, title, lede }: Heading) {
  return (
    <div className="max-w-2xl">
      <p className={eyebrowCls}>{eyebrow}</p>
      <h2 className={h2Cls}>{title}</h2>
      {lede && <p className={`${bodyCls} mt-4`}>{lede}</p>}
    </div>
  )
}

/** Heading on the left, copy on the right (stacks on mobile). */
function SplitSection({ heading, children }: { heading: Heading; children: React.ReactNode }) {
  return (
    <section className={sectionCls}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16`}>
        <SectionHeading {...heading} />
        <div className="space-y-5 [&_p]:max-w-[65ch]">{children}</div>
      </div>
    </section>
  )
}

function ProjectSection({ section }: { section: CaseStudySection }) {
  const heading: Heading = { eyebrow: section.eyebrow, title: section.title, lede: section.lede }

  switch (section.type) {
    case 'text':
      return (
        <SplitSection heading={heading}>
          {section.paragraphs.map((p) => (
            <p key={p} className={bodyCls}>
              {p}
            </p>
          ))}
        </SplitSection>
      )

    case 'bullets':
      return (
        <SplitSection heading={heading}>
          {section.intro && <p className={bodyCls}>{section.intro}</p>}
          <ul className="flex flex-wrap gap-2">
            {section.items.map((item) => (
              <li key={item} className={chipCls}>
                {item}
              </li>
            ))}
          </ul>
          {section.outro && <p className={bodyCls}>{section.outro}</p>}
        </SplitSection>
      )

    case 'contrast':
      return (
        <SplitSection heading={heading}>
          {section.paragraphs.map((p) => (
            <p key={p} className={bodyCls}>
              {p}
            </p>
          ))}
          <div className={`space-y-6 border-t pt-6 ${borderCls}`}>
            <p className="flex flex-col gap-1 text-zinc-500">
              <span className="text-sm">Instead of</span>
              <span className="text-xl line-through decoration-1">{section.before}</span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-sm text-zinc-500">The experience becomes</span>
              <span className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
                {section.after}
              </span>
            </p>
          </div>
        </SplitSection>
      )

    case 'gallery':
      return (
        <section className={sectionCls}>
          <div className={wrap}>
            <SectionHeading {...heading} />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {section.previews.map((preview) => (
                <figure key={preview.type}>
                  <ProductPreview type={preview.type} />
                  <figcaption className="mt-3 text-sm text-zinc-500">{preview.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )

    case 'image-gallery':
      return (
        <section className={sectionCls}>
          <div className={wrap}>
            <SectionHeading {...heading} />
            <div className="mt-10 grid items-start gap-6 sm:grid-cols-2">
              {section.images.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-xl border border-black/10 bg-[#0b0c11]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="mx-auto h-auto max-h-[75vh] w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                  <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-white/80">
                    {image.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )

    case 'pipeline':
      return (
        <section className={sectionCls}>
          <div className={wrap}>
            <SectionHeading {...heading} />
            <ol aria-label={section.label} className="mt-10 flex flex-wrap items-center gap-3">
              {section.steps.map((step, index) => (
                <li key={`${step}-${index}`} className="flex items-center gap-3">
                  <span
                    className={`rounded-lg border px-4 py-2.5 font-medium text-zinc-900 ${borderCls}`}
                  >
                    {step}
                  </span>
                  {index < section.steps.length - 1 && (
                    <i aria-hidden="true" className="not-italic text-zinc-400">
                      →
                    </i>
                  )}
                </li>
              ))}
            </ol>
            {section.notes && (
              <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
                {section.notes.map((note) => (
                  <div key={note.label}>
                    <dt className="font-semibold text-zinc-900">{note.label}</dt>
                    <dd className="mt-1 text-sm text-zinc-500">{note.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </section>
      )

    case 'lifecycle':
      return (
        <section className={sectionCls}>
          <div className={wrap}>
            <SectionHeading {...heading} />

            {section.roles && (
              <ul aria-label="Platform roles" className="mt-8 flex flex-wrap gap-2">
                {section.roles.map((role) => (
                  <li
                    key={role}
                    className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-semibold text-zinc-800"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            )}

            <ol
              aria-label="Shift lifecycle"
              className={`mt-6 grid grid-cols-1 overflow-hidden rounded-xl border sm:grid-cols-5 ${borderCls}`}
            >
              {section.steps.map((step, index) => (
                <li
                  key={step}
                  className={`flex flex-col gap-1 border-b p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 ${borderCls}`}
                >
                  <small className="text-zinc-400">{index + 1}</small>
                  <strong className="text-zinc-900">{step}</strong>
                </li>
              ))}
            </ol>

            {section.footnote && <p className="mt-4 text-sm text-zinc-500">{section.footnote}</p>}
          </div>
        </section>
      )

    case 'groups':
      return (
        <section className={sectionCls}>
          <div className={wrap}>
            <SectionHeading {...heading} />
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <div key={item.title} className={`border-t pt-4 ${borderCls}`}>
                  <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                  <p className={`${bodyCls} mt-1.5 text-[15px]`}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'features':
      return (
        <section className={sectionCls}>
          <div className={wrap}>
            <SectionHeading {...heading} />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className={`rounded-xl border px-5 py-4 font-medium text-zinc-900 ${borderCls}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )

    case 'tech':
      return (
        <section className={sectionCls}>
          <div className={wrap}>
            <SectionHeading {...heading} />
            {section.groups ? (
              <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
                {section.groups.map((group) => (
                  <div key={group.label}>
                    <h3 className="mb-2.5 text-sm font-medium text-zinc-500">{group.label}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((t) => (
                        <li key={t} className={chipCls}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="mt-10 flex flex-wrap gap-2">
                {section.items.map((t) => (
                  <li key={t} className={chipCls}>
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )

    case 'outcomes':
      return (
        <section className={sectionCls}>
          <div className={wrap}>
            <SectionHeading {...heading} />
            <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 border-b pb-4 text-zinc-800 ${borderCls}`}
                >
                  <span aria-hidden="true" className="mt-0.5 text-[#8a6414]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )

    case 'process':
      return (
        <section className={sectionCls}>
          <div className={wrap}>
            <SectionHeading {...heading} />
            <ol className="mt-10 grid gap-6 md:grid-cols-5">
              {section.steps.map((step, index) => (
                <li key={step.title} className={`border-t pt-4 ${borderCls}`}>
                  <span className="text-sm text-zinc-400">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-1 font-semibold text-zinc-900">{step.title}</h3>
                  <p className={`${bodyCls} mt-1.5 text-[15px]`}>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )
  }
}