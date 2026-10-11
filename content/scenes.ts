export interface SceneCard {
  id: string;
  tag?: string;
  title: string;
  description: string;
}

export const SCENES_DATA = {
  beat0: {
    titleLine1: "We turn ideas into digital",
    titleLine2: "experiences that perform.",
    description:
      "We combine strategy, design, and modern technology to build digital products that help businesses grow, connect, and move forward.",
  },
  beat1: {
    label: "What Sets Us Apart",
    heading: "We build it with you, not just for you",
    description: "Good software isn't just about getting something live. It's about building something you can actually use, maintain, and grow.",
    cards: [
      {
        id: "01",
        tag: "01 / THOUGHTFUL ENGINEERING",
        title: "Built right from the start",
        description: "We build with clear structure and maintainability in mind, so you're not left struggling to understand your own product six months later",
      },
      {
        id: "02",
        tag: "02 / NO DELAYS",
        title: "Direct Access to Developers",
        description: "You work directly with the people building your product. Less back-and-forth, fewer misunderstandings, and decisions made without unnecessary layers.",
      },
      {
        id: "03",
        tag: "03 / YOUR GOALS COME FIRST",
        title: "Technology that solves a real problem",
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
    description: "Clear communication, thoughtful decisions, and reliable delivery.",
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
    heading: "Built for businesses ready to turn bold ideas into real products.",
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
