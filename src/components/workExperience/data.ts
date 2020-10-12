export const workExperience: workType[] = [
  {
    work: "RollingCode Software Factory",
    since: "10/2019",
    to: "present",
    tech: [
      "html",
      "css",
      "scss",
      "javascript",
      "react",
      "ionic",
      "nodejs",
      "mongodb",
    ],
    description:
      "Creation and development of web Apps for administration of students and payments in RollingCode School using MERN Stack.\nCab app “TaxiAr” using Ionic and Angular.\nDevelopment of mobile app dedicated to greenhouses digital control using Ionic and React",
  },
  {
    work: "3HandSolutions / TODO1",
    since: "01/2020",
    to: "03/2020",
    tech: ["html", "css", "javascript", "outsystems"],
    description:
      "Development of mobile app for the firm Bancolombia using Outsystems platform",
  },
  {
    work: "Freelancing",
    since: "10/2018",
    to: "present",
    tech: [
      "html",
      "css",
      "scss",
      "javascript",
      "react",
      "ionic",
      "nextjs",
      "nodejs",
      "mongodb",
    ],
    description:
      "Currently working on an invoice desktop app with real time signature capabilities using MERN Stack",
  },
];

export interface workType {
  work: string;
  since: string | "present";
  to: string | "present";
  tech: string[];
  description: string;
}
