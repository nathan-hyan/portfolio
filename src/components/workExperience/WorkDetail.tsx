import React from "react";
import { workType } from "./data";

export default function WorkDetail({ work }: { work: workType }) {
  return (
    <div className="work-detail bg-white p-3 rounded shadow my-3">
      <h1 className="display-5">
        <span role="img" aria-label="Work">
          💿
        </span>{" "}
        {work.work}
      </h1>
      <small className="text-muted">{`${work.since.toUpperCase()} - ${work.to.toUpperCase()}`}</small>
      <p className="tech-list text-muted">
        {work.tech.join(" / ").toUpperCase()}
      </p>
      <p className="mt-3 lead">{work.description}</p>
    </div>
  );
}
