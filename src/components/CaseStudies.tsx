import { AboutTrust } from "./AboutTrust"

// const caseStudies = [
//   {
//     tag: '#E-commerce website',
//     title: 'An online store for a local retailer',
//     labels: ['Sample project', 'Retail'],
//     items: ['A product catalogue, cart and payment gateway', 'Orders from customers beyond the neighbourhood', 'Products and orders managed from an admin panel'],
//     ariaLabel: 'Online store mockup',
//   },
//   {
//     tag: '#Mobile app',
//     title: 'A food ordering app for a restaurant group',
//     labels: ['Sample project', 'Food and hospitality'],
//     items: ['Android and iOS apps with menus and payments', 'Order tracking for customers', 'Orders and delivery managed in one admin panel'],
//     ariaLabel: 'Food ordering app mockup',
//   },
//   {
//     tag: '#Software',
//     title: 'School management for a growing school',
//     labels: ['Sample project', 'Education'],
//     items: ['Attendance, fees and results in one place', 'Parent updates and communication', 'Records moved off paper'],
//     ariaLabel: 'Management software dashboard mockup',
//   },
// ] as const

export function CaseStudies() {
  return (
    <section id="cases ">
      <div className="wrap">

        <AboutTrust />
          {/* <h2 className="fc-h border-t border-gray-300 pt-14 w-full">
            Discover how we’re driving change through innovative projects, strong partnerships, and measurable outcomes
          </h2> */}

        {/* {caseStudies.map((study, index) => (
          <article className="fc-row" key={study.title}>
            <div className="fc-img">
              {index === 0 && (
                <svg viewBox="0 0 600 400" role="img" aria-label={study.ariaLabel}>
                  <rect x="60" y="50" width="480" height="300" rx="12" fill="#fff" stroke="#000" strokeWidth="2" />
                  <path d="M60 90h480" stroke="#000" strokeWidth="2" />
                  <circle cx="84" cy="70" r="6" fill="#C9A24B" />
                  <circle cx="104" cy="70" r="6" fill="#E9E2CF" />
                  <circle cx="124" cy="70" r="6" fill="#E9E2CF" />
                  <rect x="90" y="115" width="120" height="110" rx="8" fill="#E9E2CF" />
                  <rect x="240" y="115" width="120" height="110" rx="8" fill="#E9E2CF" />
                  <rect x="390" y="115" width="120" height="110" rx="8" fill="#E9E2CF" />
                  <rect x="90" y="240" width="80" height="10" rx="5" fill="#000" />
                  <rect x="240" y="240" width="80" height="10" rx="5" fill="#000" />
                  <rect x="390" y="240" width="80" height="10" rx="5" fill="#000" />
                  <rect x="90" y="285" width="110" height="34" rx="17" fill="#C9A24B" />
                  <rect x="240" y="285" width="110" height="34" rx="17" fill="#C9A24B" />
                  <rect x="390" y="285" width="110" height="34" rx="17" fill="#C9A24B" />
                </svg>
              )}

              {index === 1 && (
                <svg viewBox="0 0 600 400" role="img" aria-label={study.ariaLabel}>
                  <rect x="215" y="30" width="170" height="340" rx="28" fill="#fff" stroke="#000" strokeWidth="2" />
                  <rect x="262" y="42" width="76" height="8" rx="4" fill="#000" />
                  <rect x="235" y="72" width="130" height="70" rx="10" fill="#E9E2CF" />
                  <rect x="235" y="156" width="130" height="38" rx="8" fill="#fff" stroke="#000" strokeWidth="1.5" />
                  <rect x="235" y="204" width="130" height="38" rx="8" fill="#fff" stroke="#000" strokeWidth="1.5" />
                  <rect x="235" y="252" width="130" height="38" rx="8" fill="#fff" stroke="#000" strokeWidth="1.5" />
                  <circle cx="251" cy="175" r="8" fill="#C9A24B" />
                  <circle cx="251" cy="223" r="8" fill="#C9A24B" />
                  <circle cx="251" cy="271" r="8" fill="#C9A24B" />
                  <rect x="235" y="310" width="130" height="38" rx="19" fill="#000" />
                </svg>
              )}

              {index === 2 && (
                <svg viewBox="0 0 600 400" role="img" aria-label={study.ariaLabel}>
                  <rect x="50" y="50" width="500" height="300" rx="12" fill="#fff" stroke="#000" strokeWidth="2" />
                  <rect x="50" y="50" width="110" height="300" rx="12" fill="#000" />
                  <rect x="72" y="80" width="66" height="10" rx="5" fill="#C9A24B" />
                  <rect x="72" y="112" width="66" height="8" rx="4" fill="#E9E2CF" />
                  <rect x="72" y="136" width="66" height="8" rx="4" fill="#E9E2CF" />
                  <rect x="72" y="160" width="66" height="8" rx="4" fill="#E9E2CF" />
                  <rect x="185" y="80" width="150" height="70" rx="8" fill="#E9E2CF" />
                  <rect x="355" y="80" width="170" height="70" rx="8" fill="#E9E2CF" />
                  <rect x="200" y="290" width="30" height="40" fill="#000" />
                  <rect x="250" y="260" width="30" height="70" fill="#C9A24B" />
                  <rect x="300" y="225" width="30" height="105" fill="#000" />
                  <rect x="350" y="250" width="30" height="80" fill="#C9A24B" />
                  <rect x="400" y="200" width="30" height="130" fill="#000" />
                  <rect x="450" y="235" width="30" height="95" fill="#C9A24B" />
                </svg>
              )}
            </div>

            <div>
              <p className="fc-tag">{study.tag}</p>
              <h3>{study.title}</h3>
              <div className="fc-pills">
                {study.labels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              <p className="fc-sub">What we built</p>
              <ul>
                {study.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="btn" href="mailto:hello@rubultanti.in">
                Ask about this
              </a>
            </div>
          </article>
        ))} */}
      </div>
    </section>
  )
}
