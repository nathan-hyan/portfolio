import React from "react";
import { workExperience } from "./data";
import WorkDetail from "./WorkDetail";

export default function WorkExperience() {
  return (
    <div>
      <h1>work experience 👩‍🏭</h1>
      {workExperience.map((work, index) => (
        <WorkDetail key={index} work={work} />
      ))}
    </div>
  );
}
