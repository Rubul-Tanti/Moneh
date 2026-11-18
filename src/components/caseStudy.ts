/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type PreviewType = 'agents' | 'configuration' | 'analytics' | 'calls'

export type Heading = {
  eyebrow: string
  title: string
  lede?: string
}

export type CaseStudySection =
  | ({ type: 'text'; paragraphs: string[] } & Heading)
  | ({ type: 'bullets'; intro?: string; items: string[]; outro?: string } & Heading)
  | ({ type: 'features'; items: string[] } & Heading)
  | ({ type: 'tech'; items: string[]; groups?: { label: string; items: string[] }[] } & Heading)
  | ({ type: 'outcomes'; items: string[] } & Heading)
  | ({ type: 'process'; steps: { title: string; description: string }[] } & Heading)
  | ({ type: 'gallery'; previews: { type: PreviewType; title: string }[] } & Heading)
  | ({
      type: 'image-gallery'
      images: {
        src: string
        alt: string
        title: string
        width: number
        height: number
      }[]
    } & Heading)
  | ({
      type: 'pipeline'
      steps: string[]
      label: string
      notes?: { label: string; value: string }[]
    } & Heading)
  | ({
      type: 'lifecycle'
      roles?: string[]
      steps: string[]
      footnote?: string
    } & Heading)
  | ({ type: 'groups'; items: { title: string; description: string }[] } & Heading)
  | ({ type: 'contrast'; paragraphs: string[]; before: string; after: string } & Heading)

export type CaseStudy = {
  name: string
  category: string
  description: string
  href: string

  work: string[]
  tech: string[]

  logo: string
  logoDimensions: { width: number; height: number }
  hero?: string
  heroDimensions: { width: number; height: number }
  live?: string

  overview: {
    project: string
    industry: string
    role: string
    platform?: string
    extra?: { label: string; value: string }[]
  }

  sections: CaseStudySection[]
}

/* ------------------------------------------------------------------ */
/* Data — add a new object here and its page exists at its href        */
/* ------------------------------------------------------------------ */

export const caseStudies: CaseStudy[] = [
  {
    name: 'Cogniflow',
    category: 'AI calling platform',
    href: '/case-studies/cogniflow',
    description:
      'An AI-powered business calling platform that automates inbound and outbound calls with human-like voice agents across 10+ Indian languages.',

    work: ['Web development', 'AI integration', 'SaaS product'],

    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'WebSockets',
      'Exotel',
      'Deepgram',
      'ElevenLabs',
      'LLM APIs',
    ],

    logo: '/images/clients/cogniflow-logo.webp',
    logoDimensions: { width: 64, height: 43 },
    hero: '/images/clients/cogniflow.png',
    heroDimensions: { width: 1140, height: 710 },
    live: 'https://cogniflowautomations.com/',

    overview: {
      project: 'SaaS platform',
      industry: 'AI & communications',
      role: 'Website & product experience',
      platform: 'Web application',
      extra: [{ label: 'Language support', value: '10+ Indian languages' }],
    },

    sections: [
      {
        type: 'gallery',
        eyebrow: 'Project gallery',
        title: 'A closer look at Cogniflow.',
        lede: 'Interface previews of the tools teams use to manage AI-powered calls.',
        previews: [
          { type: 'agents', title: 'AI Dashboard' },
          { type: 'configuration', title: 'AI Agent Configuration' },
          { type: 'analytics', title: 'Analytics Dashboard' },
          { type: 'calls', title: 'Call Management' },
        ],
      },

      {
        type: 'text',
        eyebrow: 'About this project',
        title: 'Making AI-powered communication accessible.',
        paragraphs: [
          'Cogniflow was built to make AI-powered business communication accessible to companies across India. The platform combines real-time voice technology with business automation, so AI agents can handle conversations, qualify leads, schedule appointments, and follow up with customers.',
          'Moneh worked on the web experience and product interface, creating a clean, conversion-focused SaaS platform that clearly communicates what Cogniflow can do while giving businesses an intuitive way to manage their AI agents and calls.',
          'The platform supports multiple Indian languages and is designed for healthcare, real estate, salons, EdTech, finance, insurance, and sales.',
        ],
      },

      {
        type: 'pipeline',
        eyebrow: 'Real-time AI voice technology',
        title: 'A conversation, processed in real time.',
        lede: 'The voice pipeline listens, understands, generates a response, and speaks back to the customer.',
        label: 'Exotel to WebSocket to Deepgram speech recognition to AI to ElevenLabs text-to-speech to WebSocket to Exotel',
        steps: [
          'Exotel',
          'WebSocket',
          'Deepgram STT',
          'AI',
          'ElevenLabs TTS',
          'WebSocket',
          'Exotel',
        ],
        notes: [
          { label: 'Deepgram', value: 'Speech-to-text' },
          { label: 'LLM', value: 'Conversation intelligence' },
          { label: 'ElevenLabs', value: 'Text-to-speech' },
          { label: 'Exotel', value: 'Telephony & call streaming' },
        ],
      },

      {
        type: 'features',
        eyebrow: 'Platform capabilities',
        title: 'Built to handle the full call journey.',
        items: [
          'AI Calling Agents',
          'AI Receptionist',
          'AI SDR & Outbound Sales',
          '10+ Indian Languages',
          'Real-Time Speech-to-Text',
          'Human-Like Text-to-Speech',
          'Appointment Booking',
          'Lead Qualification',
          'WhatsApp & Email Follow-ups',
          'Call Analytics & Sentiment Analysis',
          'CRM & Webhook Integrations',
          'Revenue Attribution',
          'Real-Time Call Monitoring',
        ],
      },

      {
        type: 'tech',
        eyebrow: 'Technology',
        title: 'The stack behind the experience.',
        items: [
          'Next.js',
          'React',
          'TypeScript',
          'Node.js',
          'WebSockets',
          'Exotel',
          'Deepgram',
          'ElevenLabs',
          'LLM APIs',
        ],
      },

      {
        type: 'outcomes',
        eyebrow: 'Key outcomes',
        title: 'More conversations. Less manual handling.',
        items: [
          'Automated business calls',
          'Multilingual AI conversations',
          'Real-time voice interaction',
          'Automated lead qualification',
          'Appointment booking',
          'AI-powered sales outreach',
          'Centralized call analytics',
          'Scalable SaaS platform',
          'Reduced manual call handling',
          'Better customer response times',
        ],
      },
    ],
  },

  {
    name: 'ShiftSwip',
    category: 'Workforce marketplace',
    href: '/case-studies/shiftswip',
    description:
      'A workforce marketplace that connects businesses with gig workers for flexible shifts across cafes, warehouses, and other businesses.',

    work: [
      'Backend development',
      'Marketplace infrastructure',
      'Real-time systems',
    ],

    tech: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Neon',
      'Redis',
      'Socket.IO',
      'Firebase OTP',
      'JWT',
      'Zod',
      'Cloudinary',
      'Docker',
    ],

    hero: '/images/clients/shiftswip.png',
    heroDimensions: { width: 1134, height: 708 },
    logo: '/images/clients/shiftswip-logo.svg',
    logoDimensions: { width: 520, height: 520 },
    live: 'https://shiftswip.com/',

    overview: {
      project: 'Workforce marketplace',
      industry: 'Gig workforce / Staffing',
      role: 'Backend development & marketplace infrastructure',
      platform: 'Web application',
    },

    sections: [
      {
        type: 'text',
        eyebrow: 'About this project',
        title: 'Making flexible work easier to find and manage.',
        paragraphs: [
          'ShiftSwip was built around a simple idea: businesses shouldn’t have to struggle to find workers for short-term shifts, while workers should have an easier way to discover flexible work.',
          'The platform brings both sides together in one marketplace. Businesses create and manage shifts based on their requirements, while gig workers discover opportunities that match their availability and location.',
          'The result is a digital workflow designed around the shift itself, from creating an opportunity to finding the right worker.',
        ],
      },

      {
        type: 'image-gallery',
        eyebrow: 'Inside the platform',
        title: 'A marketplace designed for businesses and workers.',
        lede: 'ShiftSwip brings shift management and worker applications into one mobile experience.',
        images: [
          {
            src: '/images/clients/shiftswip-dashboard.jpeg',
            alt: 'ShiftSwip business dashboard showing shift coverage and active shifts',
            title: 'Business dashboard',
            width: 770,
            height: 1600,
          },
          {
            src: '/images/clients/shiftswip-recent-application.jpeg',
            alt: 'ShiftSwip recent applications and recommended workers',
            title: 'Recent applications',
            width: 774,
            height: 1600,
          },
        ],
      },

      {
        type: 'bullets',
        eyebrow: 'The challenge',
        title: 'Staffing by phone calls and messages doesn’t scale.',
        intro:
          'Traditional staffing is slow and depends on calls, messages, and manual coordination. For businesses, the challenge is finding enough reliable workers for a specific:',
        items: ['Location', 'Date', 'Time', 'Role', 'Number of workers', 'Pay rate'],
        outro:
          'For workers, the challenge is finding relevant opportunities without searching through generic job listings. ShiftSwip needed infrastructure that supports both sides of the marketplace while staying fast, secure, and scalable.',
      },

      {
        type: 'lifecycle',
        eyebrow: 'Building the marketplace',
        title: 'One platform. Two sides. One shared workflow.',
        lede: 'The backend is designed around four roles. Businesses create shifts and manage requirements, workers discover and apply, and the system keeps every application tied to the right shift and status.',
        roles: ['Gig Worker', 'Business', 'Moderator', 'Admin'],
        steps: ['Draft', 'Open', 'Applied', 'Filled', 'Completed'],
        footnote: 'Shifts can also be paused, cancelled, or expired depending on their state.',
      },

      {
        type: 'tech',
        eyebrow: 'Backend architecture',
        title: 'A modular TypeScript backend, built from the ground up.',
        lede: 'The API layer handles authentication, authorization, business logic, validation, shift management, applications, profiles, and marketplace operations.',
        items: [],
        groups: [
          { label: 'Backend', items: ['Node.js', 'Express.js', 'TypeScript'] },
          { label: 'Database', items: ['PostgreSQL', 'Prisma', 'Neon'] },
          { label: 'Real-time', items: ['Socket.IO'] },
          { label: 'Authentication', items: ['Firebase Phone OTP', 'JWT', 'bcrypt'] },
          { label: 'Infrastructure', items: ['Redis', 'Docker'] },
          { label: 'Validation & security', items: ['Zod', 'CORS', 'Rate limiting', 'Winston'] },
          { label: 'Storage', items: ['Cloudinary', 'Multer'] },
          { label: 'API', items: ['Swagger', 'Apidog'] },
        ],
      },

      {
        type: 'bullets',
        eyebrow: 'Authentication & security',
        title: 'Access control is part of the architecture.',
        intro:
          'The platform serves different types of users and marketplace actions. Firebase powers phone authentication, while the application layer controls access by role and permission.',
        items: [
          'Phone OTP verification',
          'JWT authentication',
          'Protected API routes',
          'Role-based authorization',
          'Session management',
          'bcrypt password security',
          'Request validation with Zod',
          'Rate limiting',
          'Centralized error handling',
          'Structured logging with Winston',
        ],
      },

      {
        type: 'bullets',
        eyebrow: 'Real-time systems',
        title: 'More than request and response.',
        intro:
          'Shift availability and applications change while people are using the platform. Socket.IO provides the real-time foundation, supporting:',
        items: [
          'Live application updates',
          'Shift status changes',
          'Real-time marketplace events',
          'Worker/business communication',
          'Future notification workflows',
        ],
      },

      {
        type: 'contrast',
        eyebrow: 'Location-driven matching',
        title: 'Not a job board.',
        paragraphs: [
          'A worker isn’t simply looking for a job. They’re looking for a shift they can realistically reach and complete.',
          'The marketplace treats location, timing, role, and pay as core parts of every shift.',
        ],
        before: 'Find a job.',
        after: 'Find a shift that works for you.',
      },

      {
        type: 'groups',
        eyebrow: 'Data architecture',
        title: 'A database shaped around marketplace relationships.',
        lede: 'Relational constraints prevent invalid or duplicate marketplace relationships.',
        items: [
          {
            title: 'Users',
            description: 'Identity, authentication, role, sessions, and account information.',
          },
          {
            title: 'Worker profiles',
            description: 'Worker-specific information and marketplace data.',
          },
          {
            title: 'Business profiles',
            description: 'Business identity and operational information.',
          },
          {
            title: 'Shifts',
            description: 'Role, location, timing, pay, requirements, and lifecycle status.',
          },
          {
            title: 'Applications',
            description: 'The relationship between a worker and a shift, including application state.',
          },
        ],
      },

      {
        type: 'groups',
        eyebrow: 'Infrastructure',
        title: 'Built with production in mind.',
        items: [
          { title: 'Redis', description: 'Caching and rate limiting.' },
          {
            title: 'PostgreSQL + Prisma',
            description: 'The relational data layer with strongly typed database access.',
          },
          { title: 'Neon', description: 'Managed PostgreSQL infrastructure.' },
          { title: 'Cloudinary', description: 'Media storage and delivery.' },
          {
            title: 'Docker',
            description: 'Consistent environments across development and deployment.',
          },
          {
            title: 'Swagger + Apidog',
            description: 'API documentation and development workflows.',
          },
        ],
      },

      {
        type: 'pipeline',
        eyebrow: 'Engineering decisions',
        title: 'Designing the relationships, not just the endpoints.',
        lede: 'The hardest part wasn’t building individual APIs. It was handling many users interacting with the same shift. One business can request multiple workers, and many workers can apply to the same shift. The backend maintains that chain while enforcing availability, application uniqueness, permissions, and shift status, rather than treating each feature as an isolated CRUD operation.',
        label: 'Business to Shift to Applications to Workers',
        steps: ['Business', 'Shift', 'Applications', 'Workers'],
      },

      {
        type: 'outcomes',
        eyebrow: 'What the platform enables',
        title: 'A structured workflow for flexible staffing.',
        items: [
          'Flexible workforce discovery',
          'Faster staffing',
          'Structured shift management',
          'Real-time interactions',
          'Role-based access',
          'Scalable foundation',
        ],
      },

      {
        type: 'groups',
        eyebrow: 'What I built',
        title: 'The work behind the marketplace.',
        items: [
          {
            title: 'Backend development',
            description: 'Designed and developed the backend architecture and API layer.',
          },
          {
            title: 'Marketplace infrastructure',
            description: 'Built the core business, worker, shift, and application relationships.',
          },
          {
            title: 'Authentication',
            description:
              'Implemented phone OTP authentication, JWT authorization, sessions, and role-based access.',
          },
          {
            title: 'Database architecture',
            description: 'Designed the PostgreSQL schema and Prisma data layer.',
          },
          {
            title: 'Real-time systems',
            description: 'Integrated Socket.IO for real-time marketplace events.',
          },
          {
            title: 'Infrastructure & security',
            description:
              'Implemented Redis, validation, rate limiting, logging, Docker, and API documentation.',
          },
        ],
      },

      {
        type: 'text',
        eyebrow: 'The result',
        title: 'From finding people to finding the right shift.',
        paragraphs: [
          'ShiftSwip turns temporary staffing into a structured digital marketplace. Instead of coordinating workers through disconnected conversations, businesses publish a requirement and workers discover opportunities that fit their schedule and location.',
        ],
      },
    ],
  },
]