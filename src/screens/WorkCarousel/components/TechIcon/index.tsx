import React from 'react';
import react from 'assets/tech/react.svg';
import html from 'assets/tech/html.svg';
import css from 'assets/tech/css.svg';
import js from 'assets/tech/js.svg';
import ts from 'assets/tech/ts.webp';
import nextjs from 'assets/tech/nextjs.webp';
import scss from 'assets/tech/sass.webp';
import mongodb from 'assets/tech/mongodb.svg';
import express from 'assets/tech/express.webp';
import nodejs from 'assets/tech/nodejs.webp';

type Props = {
  tech: Partial<
    | 'react'
    | 'html'
    | 'css'
    | 'javascript'
    | 'typescript'
    | 'nextjs'
    | 'scss'
    | 'mongodb'
    | 'express'
    | 'nodejs'
  >;
};

const TechIcon: React.FC<Props> = ({ tech }: Props) => {
  const translator = (height: number) => {
    switch (tech) {
      case 'react':
        return <img src={react} height={height} alt={tech} className="mx-2" />;
      case 'html':
        return <img src={html} height={height} alt={tech} className="mx-2" />;
      case 'css':
        return <img src={css} height={height} alt={tech} className="mx-2" />;
      case 'javascript':
        return <img src={js} height={height} alt={tech} className="mx-2" />;
      case 'typescript':
        return <img src={ts} height={height} alt={tech} className="mx-2" />;
      case 'nextjs':
        return <img src={nextjs} height={height} alt={tech} className="mx-2" />;
      case 'scss':
        return <img src={scss} height={height} alt={tech} className="mx-2" />;
      case 'mongodb':
        return (
          <img src={mongodb} height={height} alt={tech} className="mx-2" />
        );
      case 'express':
        return (
          <img src={express} height={height} alt={tech} className="mx-2" />
        );
      case 'nodejs':
        return <img src={nodejs} height={height} alt={tech} className="mx-2" />;

      default:
        return <img src={react} height={height} alt={tech} className="mx-2" />;
    }
  };

  return translator(50);
};

export default TechIcon;
