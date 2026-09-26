export interface SceneCard {
  id: string;
  tag?: string;
  title: string;
  description: string;
}

export const SCENES_DATA = {
  beat0: {
    pill: "HYDERABAD · REMOTE WORLDWIDE",
    pillStatus: "Accepting New Projects",
    titleLine1: "We turn ideas into digital",
    titleLine2: "experiences that perform.",
    description:
      "We combine strategy, design, and modern technology to build digital products that help businesses grow, connect, and move forward.",
  },
  beat1: {
    label: "What Sets Us Apart",
    heading: "An engineering agency that stays in your corner.",
    description: "We don't launch and disappear. We build digital products to grow with your business.",
    cards: [
      {
        id: "01",
        tag: "01 / OWNERSHIP",
        title: "Zero Throwaway Code",
        description: "Built with maintainable Next.js and TypeScript architectures that your team can comfortably own forever.",
      },
      {
        id: "02",
        tag: "02 / SPEED",
        title: "Sub-50ms Performance",
        description: "Laser-focused on instant page loads, 99+ Core Web Vitals, and dependable uptime across all devices.",
      },
      {
        id: "03",
        tag: "03 / ALIGNMENT",
        title: "Direct Engineering Access",
        description: "Work directly with senior developers and designers without middle-management delays or lost context.",
      },
      {
        id: "04",
        tag: "04 / LONGEVITY",
        title: "Post-Launch Growth",
        description: "Proactive maintenance, dependency updates, workflow automation, and feature iteration as you scale.",
      },
    ],
  },
  beat2: {
    label: "How We Work",
    heading: "A disciplined delivery process from discovery to launch—and beyond.",
    description: "Sound engineering, open communication, and a predictable path from day one.",
    steps: [
      {
        id: "01",
        step: "01 / PLAN",
        title: "Understand & Scope",
        description: "We examine your user workflows, business objectives, and technical constraints before writing a single line of code.",
      },
      {
        id: "02",
        step: "02 / BUILD",
        title: "Design & Engineer",
        description: "Lightweight Next.js architectures, modern responsive design, and rigorous testing across all devices.",
      },
      {
        id: "03",
        step: "03 / SCALE",
        title: "Deploy & Support",
        description: "Production handoff with zero downtime, domain configuration, performance monitoring, and ongoing optimization.",
      },
    ],
  },
  beat3: {
    label: "Who We Work With",
    heading: "Engineered for ambitious businesses and visionary operators.",
    description: "From custom platforms to enterprise redesigns, we build tools people actually use.",
    cards: [
      {
        id: "01",
        tag: "FOUNDERS",
        title: "High-Growth Startups",
        description: "Rapidly validating products and deploying scalable MVPs without accumulating crippling technical debt.",
      },
      {
        id: "02",
        tag: "PLATFORMS",
        title: "SaaS & Cloud Tools",
        description: "Custom dashboards, data pipelines, client portals, and secure operational backbones.",
      },
      {
        id: "03",
        tag: "COMMERCE",
        title: "Modern E-Commerce",
        description: "High-speed storefronts with frictionless checkout funnels and custom inventory integrations.",
      },
      {
        id: "04",
        tag: "ENTERPRISE",
        title: "System Modernization",
        description: "Revitalizing legacy architectures that have slowed down, improving speed, security, and team velocity.",
      },
    ],
  },
};
