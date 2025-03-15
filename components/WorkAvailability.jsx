import React from "react";
import { WorkAvailabilityButton, GreenLight } from "../styles/header_styles";

export default function WorkAvailability() {
  return (
    <a
      href="https://www.linkedin.com/in/vizentefreeman/"
      target="_blank"
      rel="noreferrer"
    >
      <WorkAvailabilityButton>
        <GreenLight />
        <span>Available for Work</span>
      </WorkAvailabilityButton>
    </a>
  );
}
