import React from "react";
import { skills } from "./data";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <div>
      <h1>Skills 🔧</h1>
      {skills.map((skill, index) => (
        <SkillBar skill={skill} key={index} />
      ))}
    </div>
  );
}
