import React from "react";

export default function TechIcon({
  tech,
}: {
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
  >;
}) {
  const translator = (height: number) => {
    switch (tech) {
      case "react":
        return (
          <img
            src="/assets/tech/react.svg"
            height={height}
            alt={tech}
            className="mx-2"
          />
        );
      case "html":
        return (
          <img
            src="/assets/tech/html.svg"
            height={height}
            alt={tech}
            className="mx-2"
          />
        );
      case "css":
        return (
          <img
            src="/assets/tech/css.svg"
            height={height}
            alt={tech}
            className="mx-2"
          />
        );
      case "javascript":
        return (
          <img
            src="/assets/tech/js.svg"
            height={height}
            alt={tech}
            className="mx-2"
          />
        );
      case "typescript":
        return (
          <img
            src="/assets/tech/ts.webp"
            height={height}
            alt={tech}
            className="mx-2"
          />
        );
      case "nextjs":
        return (
          <img
            src="/assets/tech/nextjs.webp"
            height={height}
            alt={tech}
            className="mx-2"
          />
        );
      case "scss":
        return (
          <img
            src="/assets/tech/sass.webp"
            height={height}
            alt={tech}
            className="mx-2"
          />
        );
      case "mongodb":
        return (
          <img
            src="/assets/tech/mongodb.svg"
            height={height}
            alt={tech}
            className="mx-2"
          />
        );
      case "express":
        return (
          <img
            src="/assets/tech/express.webp"
            height={height}
            alt={tech}
            className="mx-2"
          />
        );
      case "nodejs":
        return (
          <img
            src="/assets/tech/nodejs.webp"
            height={height}
            alt={tech}
            className="mx-2"
          />
        );
    }
  };

  return translator(50);
}
