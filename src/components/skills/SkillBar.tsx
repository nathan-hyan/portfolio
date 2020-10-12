import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function SkillBar({
  skill,
}: {
  skill: { name: string; percent: number };
}) {
  return (
    <div className="p-3 my-3 rounded shadow skill-bar">
      <p>{skill.name}</p>
      <ProgressBar animated now={skill.percent} label={`${skill.percent} %`} />
    </div>
  );
}
