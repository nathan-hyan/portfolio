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

import styles from './styles.module.scss';

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
  const translator = (): string => {
    switch (tech) {
      case 'react':
        return react;
      case 'html':
        return html;
      case 'css':
        return css;
      case 'javascript':
        return js;
      case 'typescript':
        return ts;
      case 'nextjs':
        return nextjs;
      case 'scss':
        return scss;
      case 'mongodb':
        return mongodb;
      case 'express':
        return express;
      case 'nodejs':
        return nodejs;

      default:
        return react;
    }
  };

  return (
    <img src={translator()} alt={tech} className={`${styles.image} mx-2`} />
  );
};

export default TechIcon;
