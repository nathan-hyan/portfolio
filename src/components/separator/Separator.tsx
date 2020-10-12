import React from "react";

export default function Separator({
  orientation = "y",
}: {
  orientation: "x" | "y";
}) {
  return orientation === "y" ? (
    <div className="d-none d-md-block divider-y shadow" />
  ) : (
    <div className="divider-x shadow" />
  );
}
