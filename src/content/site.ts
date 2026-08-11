/**
 * Single source of truth for every piece of copy on the site.
 *
 * Layouts (desktop today, mobile next) import from here and never hardcode
 * strings, so a wording change lands in one place across every breakpoint.
 * Icons are referenced by name and resolved in `src/components/icons.tsx`.
 */

export type IconName =
  | "athletes"
  | "teams"
  | "coaches"
  | "esports"
  | "professionals"
  | "other"
  | "mail"
  | "pin";

/** A headline split so one run of words can be tinted with the accent colour. */
export type SplitHeading = {
  lead: string;
  highlight?: string;
  trail?: string;
  /** Break the line before the highlight. */
  breakBefore?: boolean;
};

export type Cta = { label: string; href: string };

export type IconCard = { icon: IconName; title: string; body: string };

export type FaqItem = { question: string; answer: string };

/** The avatar circle shows the first letter of `name`. */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const routes = {
  home: "/",
  who: "/who-i-help",
  how: "/how-i-help",
  about: "/about",
  testimonials: "/testimonials",
  contact: "/contact",
} as const;

const faq = {
  sessionCount: {
    question: "How many sessions will I need?",
    answer:
      "It varies from person to person and depends on your specific goals. We'll discuss your goals and needs during the initial consultation and create a flexible plan tailored to you. There's no long term commitment required.",
  },
  confidential: {
    question: "Is what we talk about confidential?",
    answer:
      "Yes, everything we discuss is strictly confidential. Our sessions are private and protected by professional ethical standards. The only exceptions are rare situations involving serious risk of harm to yourself or others, or legal requirements.",
  },
  vsTherapy: {
    question:
      "What's the difference between sport psychology and regular counselling or therapy?",
    answer:
      "Sport psychology focuses on the unique demands of performance. It helps athletes and performers improve both their mental wellbeing and performance. Traditional counselling or therapy tends to focus more broadly on mental health, emotional difficulties, and personal life challenges. There is a natural overlap, however if clinical support is required, I can refer you to a therapist.",
  },
  rightForMe: {
    question: "How do I know sport psychology is right for me?",
    answer:
      "You don't need to be a professional or elite athlete - I work with anyone who operates in a performance environment (e.g., athletes, esports players, and performers). If you're investing time and effort into your performance but your mind is holding you back (or you want to take your mental game to the next level), sport psychology is likely worth exploring.",
  },
  getStarted: {
    question: "How do I get started?",
    answer:
      'Getting started is simple. You can book a free discovery call to find out if it\'s for you by pressing "Get started" or sending me a message on WhatsApp.',
  },
} satisfies Record<string, FaqItem>;

const testimonials = {
  francis: {
    quote:
      "Nathan created some fantastic sport psychology resources for our players at CM Performance UK, and they added real value to our coaching programme. The content was practical, engaging, and helped our players better understand confidence, resilience, mindset, and dealing with pressure. It gave us another layer of support beyond the technical and physical side of the game, and I'd highly recommend Nathan to any coach or organisation looking to develop the mental side of performance.",
    name: "Francis",
    role: "Football coach - CM Performance UK",
  },
  shaun: {
    quote:
      "Nathan has given me expert advice and avenues to help progress my mentality in the game of darts allowing me to achieve more due to these sessions. Very down to earth easy going sessions but never sways away from the session focus. Absolutely recommend.",
    name: "Shaun",
    role: "ADC Darts player",
  },
  tom: {
    quote:
      "Easy to talk to and he really knows his stuff. I felt comfortable throughout our meetings and I would recommend him to anybody with a keen interest in improving their sporting performance.",
    name: "Tom",
    role: "Tennis player - Andover Tennis Club",
  },
  ben: {
    quote:
      "I would like to thank Nathan for his exceptional service. I began using his service in October and have bi-weekly meetings to help me gain confidence within myself as well as help develop skills I already had. I was impressed with the amount of external work Nathan does between sessions to ensure each one has been planned and tailored specifically to my needs, resulting in a strong session in which I learnt skills and exercises that I could utilise within a sport setting. I would definitely recommend Nathan as he is very kind and supportive individual who will help anyone throughout their sporting journey.",
    name: "Ben",
    role: "Rugby player - University of Winchester",
  },
} satisfies Record<string, Testimonial>;

export const site = {
  meta: {
    /**
     * Canonical origin, no trailing slash. Drives `metadataBase`, every
     * canonical URL, the sitemap and the JSON-LD `@id`s — so it must match
     * the host that actually serves the site (www redirects to the apex).
     */
    url: "https://shearsperformance.com",
    title: "Shears Performance | Sport & Performance Psychology",
    /** Appended to each page's own title via `title.template` in the layout. */
    titleSuffix: "Shears Performance",
    description:
      "Evidence based psychological services to help athletes, performers, and professionals thrive - mentally, emotionally, and competitively.",
    /** og:locale — matches the <html lang> in the root layout. */
    locale: "en_GB",
  },

  brand: {
    nameTop: "SHEARS",
    nameBottom: "PERFORMANCE",
    logo: { src: "/logo.png", alt: "Shears Performance logo" },
  },

  nav: {
    links: [
      { label: "Home", href: routes.home },
      { label: "Who I help", href: routes.who },
      { label: "How I help", href: routes.how },
      { label: "About", href: routes.about },
      { label: "Testimonials", href: routes.testimonials },
    ] as Cta[],
    action: { label: "Contact Me", href: routes.contact } satisfies Cta,
    menuLabel: "Menu",
    closeLabel: "Close menu",
  },

  contactDetails: {
    email: "nathan@shearsperformance.com",
    whatsappUrl: "https://wa.me/447448312902",
    location: "Hampshire, UK · online worldwide",
  },

  /** Persistent floating WhatsApp button (hidden on the contact page). */
  whatsappFab: {
    label: "Chat with me",
    ariaLabel: "Chat with me on WhatsApp",
  },

  home: {
    hero: {
      eyebrow: "Sport & Performance Psychology",
      title: {
        lead: "Train the mind behind the ",
        highlight: "performance",
        trail: ".",
      } satisfies SplitHeading,
      intro:
        "Evidence based psychological services to help athletes, performers, and professionals thrive - mentally, emotionally, and competitively.",
      primaryCta: { label: "See how I help →", href: routes.how },
      secondaryCta: {
        label: "Book a free discovery call",
        href: routes.contact,
      },
      stats: [
        { value: "1:1", label: "Sessions in Hampshire", accent: true },
        {
          value: "Online",
          label: "Sport psychology sessions from anywhere",
          accent: false,
        },
        { value: "£0", label: "First discovery call", accent: false },
      ],
      image: {
        src: "/nathan-hero.jpg",
        alt: "Nathan Shears, Sport Psychologist in training",
      },
      badge: "Hey, I'm Nathan 👋",
    },

    marquee: [
      "Focus",
      "Confidence",
      "Composure",
      "Resilience",
      "Motivation",
      "Flow State",
      "Pressure",
      "Mindset",
      "Discipline",
      "Self-Belief",
    ],

    whoPreview: {
      eyebrow: "Who I help",
      title:
        "Support for anyone whose success depends on performing at a high level when it matters most.",
      link: { label: "Explore who I help →", href: routes.who },
      cards: [
        {
          icon: "athletes",
          title: "Athletes",
          body: "From grassroots to elite, across every sport and level.",
        },
        {
          icon: "teams",
          title: "Teams & Clubs",
          body: "Building the culture and mindset that wins together.",
        },
        {
          icon: "coaches",
          title: "Coaches",
          body: "Tools to lead, motivate and get the best from athletes.",
        },
        {
          icon: "esports",
          title: "Esports",
          body: "The mental edge for high-stakes competitive play.",
        },
      ] satisfies IconCard[],
    },

    howPreview: {
      eyebrow: "How I assist",
      title: "Flexible, integrated, and built around you.",
      items: [
        {
          number: "01",
          title: "Individual sessions",
          body: "Deep, personalised 1:1 support - online or in person.",
        },
        {
          number: "02",
          title: "Workshops",
          body: "Group sessions tailored to your needs - delivered online or in person.",
        },
        {
          number: "03",
          title: "Team & Organisational Consulting",
          body: "Creating the mental edge teams need to consistently perform.",
        },
      ],
      cta: { label: "See services & pricing", href: routes.how },
      /** Optional supporting image; the section renders single-column when null. */
      image: null as { src: string; alt: string } | null,
    },

    aboutPreview: {
      eyebrow: "About me",
      title: "A lifelong sportsman, fascinated by the mind.",
      body: "I'm Nathan Shears - an all-rounder with deep roots in football, racket sports and esports, now training as a Sport & Exercise Psychologist in Hampshire.",
      link: { label: "Read my story →", href: routes.about },
    },

    testimonialPreview: {
      ...testimonials.tom,
      role: "Tennis Player - Andover Tennis Club",
      link: { label: "Testimonials →", href: routes.testimonials },
    },

    faq: {
      eyebrow: "Questions?",
      title: "Frequently asked questions",
      items: [faq.vsTherapy, faq.rightForMe, faq.getStarted],
      link: { label: "See how I help →", href: routes.how },
    },

    cta: {
      eyebrow: "Get Started",
      title: {
        lead: "Ready to find your ",
        highlight: "mental edge?",
      } satisfies SplitHeading,
      body: "Book a free 30-minute discovery call - no commitment, just a conversation.",
      action: { label: "Book your free call →", href: routes.contact },
    },
  },

  who: {
    hero: {
      eyebrow: "Who I help",
      title: {
        lead: "Whoever you are, if success depends on you ",
        highlight: "performing",
        trail: " - I can help.",
      } satisfies SplitHeading,
      intro:
        "My work isn't only for elite athletes. It's for anyone who wants to think more clearly, feel more confident, and get the most out of themselves when it matters most.",
    },

    cards: [
      {
        icon: "athletes",
        title: "Athletes of all levels",
        body: "Grassroots to professional - across every sport. If you compete, you can benefit.",
      },
      {
        icon: "teams",
        title: "Teams & Clubs",
        body: "Building cohesion, culture and a shared mindset that helps a group perform consistently together.",
      },
      {
        icon: "coaches",
        title: "Coaches",
        body: "Practical psychology to lead, motivate and get the very best out of the athletes you work with.",
      },
      {
        icon: "professionals",
        title: "Professionals",
        body: "Helping professionals and executives achieve peak performance in demanding careers.",
      },
      {
        icon: "esports",
        title: "Esports players",
        body: "Amateur to professional - whatever your esport, take your game to the next level.",
      },
      {
        icon: "other",
        title: "Other",
        body: "Anyone who operates in a performance driven context - whatever the arena.",
      },
    ] satisfies IconCard[],

    challenges: {
      eyebrow: "Common challenges I support",
      title:
        "The things that get in the way - examples of what we could work on together.",
      items: [
        "Performing under pressure",
        "Confidence & self-belief",
        "Focus & concentration",
        "Motivation & consistency",
        "Managing anxiety & nerves",
        "Injury & return to play",
        "Transitions & setbacks",
        "Burnout & wellbeing",
        "Getting the most from your mind",
      ],
    },

    closing: {
      title: "Not sure if it's for you?",
      body: "That's exactly what the free discovery call is for. No commitment - just a conversation.",
      action: { label: "Book your free call", href: routes.contact },
    },
  },

  how: {
    hero: {
      eyebrow: "How I can assist",
      title: {
        lead: "One approach, many forms - always ",
        highlight: "tailored to you.",
      } satisfies SplitHeading,
      intro:
        "My approach is integrated and flexible. I work collaboratively, so the work is always shaped around your needs, your preferences, and what's actually working for you.",
    },

    services: [
      {
        number: "01",
        title: "Individual sessions",
        body: "Delivered online or in person (Hampshire) - deep, personalised support for your unique challenges. Sessions are flexible and tailored to your needs and goals.",
      },
      {
        number: "02",
        title: "Workshops",
        body: "Workshops, tailored to your group. Covering topics like managing stress, performing under pressure, building psychological skills, and many more! Delivered in person (within the South of England) or online.",
      },
      {
        number: "03",
        title: "Team & organisational consulting",
        body: "Tailored performance-psychology support at a team or organisational level - helping create the mental edge teams need to perform consistently.",
      },
      {
        number: "04",
        title: "Something else?",
        body: "Looking for something I haven't mentioned? Get in touch and we'll discuss how I can help.",
        action: { label: "Get in touch", href: routes.contact },
      },
    ],

    pricing: {
      title: "Plans and Pricing",
      plans: [
        {
          name: "Discovery call",
          price: "£0",
          unit: null as string | null,
          body: "A relaxed 30-minute chat to explore how I could help and what working together might look like.",
          note: null as string | null,
          featured: false,
          action: { label: "Start now", href: routes.contact },
        },
        {
          name: "Sessions",
          price: "£25",
          unit: "/ session",
          body: "Ongoing 1:1 work to build the mental skills that make the difference, at your pace.",
          note: null,
          featured: true,
          action: { label: "Start now", href: routes.contact },
        },
        {
          name: "Workshops",
          price: "£100",
          unit: null,
          body: "A tailored group session for your team or club, on the topics that matter most to you.",
          note: "Contact to discuss package deals.",
          featured: false,
          action: { label: "Start now", href: routes.contact },
        },
      ],
    },

    faq: {
      eyebrow: "Questions?",
      title: "Frequently asked questions",
      items: [
        faq.sessionCount,
        faq.confidential,
        faq.vsTherapy,
        faq.rightForMe,
        faq.getStarted,
      ],
    },
  },

  about: {
    hero: {
      eyebrow: "About me",
      title: { lead: "Nathan ", highlight: "Shears" } satisfies SplitHeading,
      intro:
        "Sport Psychologist (in training) - helping athletes, teams and performers leverage the mental side of their game.",
    },

    portrait: {
      src: "/nathan-hero.jpg",
      alt: "Nathan Shears",
    },

    paragraphs: [
      "I'm Nathan Shears, a Sport Psychologist (in training), currently enrolled in a Professional Doctorate in Sport and Exercise Psychology at the University of Portsmouth.",
      "Growing up, I've always been an all-rounder when it comes to sport - with knowledge and experience across a wide range of sports, and extensive experience in football, racket sports and esports.",
      "I've always been fascinated by the mental side of sport. That's what fostered my passion - not only for helping athletes overcome mental challenges, but for helping them leverage their mind to work to their advantage.",
    ],

    qualifications: {
      title: "Qualifications",
      items: [
        "MSc Sport & Exercise Psychology",
        "BSc Sport & Exercise Psychology",
        "Level 3 Mental Health First Aid",
        "Level 3 Safeguarding",
        "Level 2 Counselling Skills",
      ],
    },

    actions: {
      primary: { label: "See how I can help", href: routes.how },
      secondary: { label: "Let's connect", href: routes.contact },
    },
  },

  testimonials: {
    hero: {
      eyebrow: "Testimonials",
      title: {
        lead: "In the words of the people I ",
        highlight: "work with.",
      } satisfies SplitHeading,
      intro:
        "Real results, in real words. Here's the kind of change the work can create - are you ready for your own story?",
    },

    items: [
      testimonials.francis,
      testimonials.shaun,
      testimonials.tom,
      testimonials.ben,
    ] satisfies Testimonial[],

    closing: {
      title: "Worked with me?",
      body: "I'd love to hear how it went - your words could help someone else take the first step.",
      action: {
        label: "Leave a review",
        href: "https://g.page/r/Cbb0XomfLIimEAI/review",
      },
    },
  },

  contact: {
    hero: {
      eyebrow: "Get Started",
      title: {
        lead: "Are you ready to",
        highlight: "get started?",
        breakBefore: true,
      } satisfies SplitHeading,
      intro:
        "Send me a message on Whatsapp with the service you're interested in, or fill in the form on the right of this page and I'll be in contact as soon as possible.",
      whatsappCta: "Chat with me on WhatsApp",
    },

    details: {
      eyebrow: "Get in touch",
      items: [
        { icon: "mail", label: "Email", valueKey: "email" },
        { icon: "pin", label: "Based in", valueKey: "location" },
      ] as { icon: IconName; label: string; valueKey: "email" | "location" }[],
    },

    form: {
      title: "Send a message",
      name: { label: "Your name", placeholder: "Jane Doe" },
      email: { label: "Email", placeholder: "you@example.com" },
      interest: {
        label: "What are you interested in?",
        options: [
          "Free discovery call",
          "Individual sessions",
          "A workshop",
          "Team / organisational consulting",
          "Something else",
        ],
      },
      message: {
        label: "Message",
        placeholder: "Tell me a little about what you're looking for…",
      },
      submit: "Send message",
      success: {
        title: "Message sent",
        body: "Thanks for reaching out - I'll get back to you soon. (This is a demo form; wire it up to your inbox to go live.)",
        again: "Send another",
      },
    },
  },

  footer: {
    description:
      "Helping athletes, teams and performers elevate their game through evidence-based sport & performance psychology.",
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Home", href: routes.home },
          { label: "Who I help", href: routes.who },
          { label: "How I help", href: routes.how },
          { label: "About me", href: routes.about },
        ] as Cta[],
      },
      {
        title: "Connect",
        links: [
          { label: "Contact me", href: routes.contact },
          { label: "Testimonials", href: routes.testimonials },
        ] as Cta[],
        /** Rendered as plain text under the links. */
        note: "nathan@shearsperformance.com",
      },
      {
        title: "Follow",
        links: [
          { label: "Instagram", href: "https://www.instagram.com/shearsperformance/" },
          { label: "TikTok", href: "https://www.tiktok.com/@nathan_shears2" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/nathanshears/" },
          { label: "X / Twitter", href: "https://x.com/@Nathan_Shears2" },
        ] as Cta[],
      },
    ],
    copyright: "© 2026 Shears Performance. All rights reserved.",
    tagline: "Sport & Performance Psychology · Hampshire, UK",
  },
} as const;

export type Site = typeof site;
