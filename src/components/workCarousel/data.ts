export const data: carouselType[] = [
  {
    image: "/assets/work/ck.webp",
    title: "Carsaas Kitchen",
    subtitle: "Landing page dedicated to food and culinary arts",
    repo: "https://gitlab.com/nathan-hyan/carsaas-kitchen",
    url: "https://carsaas-kitchen.vercel.app/",
    tech: ["html", "scss", "javascript"],
  },
  {
    image: "/assets/work/invoxet.webp",
    title: "Invoxet",
    subtitle: "Landing page dedicated to video-games and e-sports",
    repo: "https://gitlab.com/nathan-hyan/invoxet",
    url: "https://invoxet.vercel.app/",
    tech: ["html", "scss", "javascript"],
  },
  {
    image: "/assets/work/socco.webp",
    title: "Inmobiliarias Socco",
    subtitle: "Landing page dedicated to a real-estate agency.",
    repo: "https://gitlab.com/nathan-hyan/socco",
    url: "https://socco.now.sh/",
    tech: ["react", "scss"],
  },
  {
    image: "/assets/work/moustrack.webp",
    title: "Moustrack",
    subtitle: "Example landing page for a sports / travel brand.",
    repo: "https://gitlab.com/nathan-hyan/moustrack_nextjs",
    url: "https://moustrack.vercel.app/",
    tech: ["react", "nextjs", "scss"],
  },
  {
    image: "/assets/work/reciba.webp",
    title: "Reciba.app",
    subtitle: "Virtual checkbook app.",
    url: "https://reciba.app/",
    tech: ["react", "typescript", "scss", "mongodb", "express", "nodejs"],
  },
];

export interface carouselType {
  image: string;
  title: string;
  subtitle: string;
  repo?: string;
  url: string;
  tech: Partial<
    | "react"
    | "html"
    | "css"
    | "javascript"
    | "typescript"
    | "nextjs"
    | "scss"
    | "mongodb"
    | "express"
    | "nodejs"
  >[];
}
