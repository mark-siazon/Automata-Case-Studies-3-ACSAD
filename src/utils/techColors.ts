interface TechColor {
  bg: string;
  text: string;
}

interface TechColors {
  [key: string]: TechColor;
  default: TechColor;
}

export const techColors: TechColors = {
  // Frontend
  ReactJS: {
    bg: "bg-blue-100",
    text: "text-blue-400",
  },
  Vue: {
    bg: "bg-green-100",
    text: "text-green-200",
  },
  Angular: {
    bg: "bg-red-100",
    text: "text-red-400",
  },
  Svelte: {
    bg: "bg-orange-100",
    text: "text-orange-400",
  },
  TypeScript: {
    bg: "bg-blue-100",
    text: "text-blue-400",
  },
  JavaScript: {
    bg: "bg-yellow-100",
    text: "text-yellow-400",
  },
  HTML: {
    bg: "bg-orange-100",
    text: "text-orange-400",
  },
  CSS: {
    bg: "bg-blue-100",
    text: "text-blue-300",
  },
  Redux: {
    bg: "bg-purple-100",
    text: "text-purple-400",
  },
  GraphQL: {
    bg: "bg-pink-100",
    text: "text-pink-400",
  },
  "Tailwind CSS": {
    bg: "bg-cyan-100",
    text: "text-cyan-400",
  },
  Bootstrap: {
    bg: "bg-purple-100",
    text: "text-purple-400",
  },
  "Next.js": {
    bg: "bg-black",
    text: "text-white",
  },
  AstroJS: {
    bg: "bg-purple-100",
    text: "text-purple-400",
  },
  Flutter: {
    bg: "bg-blue-100",
    text: "text-blue-400",
  },
  FlutterFlow: {
    bg: "bg-blue-100",
    text: "text-blue-300",
  },

  // Backend
  "Node.js": {
    bg: "bg-green-100",
    text: "text-green-400",
  },
  Express: {
    bg: "bg-gray-100",
    text: "text-gray-400",
  },
  Django: {
    bg: "bg-green-100",
    text: "text-green-400",
  },
  Flask: {
    bg: "bg-gray-100",
    text: "text-gray-400",
  },
  Python: {
    bg: "bg-yellow-100",
    text: "text-yellow-400",
  },
  Java: {
    bg: "bg-red-100",
    text: "text-red-400",
  },
  PHP: {
    bg: "bg-indigo-100",
    text: "text-indigo-400",
  },
  Ruby: {
    bg: "bg-pink-100",
    text: "text-pink-400",
  },
  Go: {
    bg: "bg-cyan-100",
    text: "text-cyan-400",
  },
  Prisma: {
    bg: "bg-gray-100",
    text: "text-gray-700",
  },

  // Databases
  MongoDB: {
    bg: "bg-green-100",
    text: "text-green-400",
  },
  PostgreSQL: {
    bg: "bg-blue-100",
    text: "text-blue-400",
  },
  MySQL: {
    bg: "bg-blue-100",
    text: "text-blue-400",
  },
  Redis: {
    bg: "bg-red-100",
    text: "text-red-400",
  },

  // Cloud & DevOps
  Firebase: {
    bg: "bg-yellow-100",
    text: "text-yellow-400",
  },
  AWS: {
    bg: "bg-orange-100",
    text: "text-orange-400",
  },
  Docker: {
    bg: "bg-blue-100",
    text: "text-blue-400",
  },
  Kubernetes: {
    bg: "bg-blue-100",
    text: "text-blue-400",
  },
  Git: {
    bg: "bg-orange-100",
    text: "text-orange-400",
  },

  // Default
  default: {
    bg: "bg-gray-100",
    text: "text-gray-400",
  },
};
