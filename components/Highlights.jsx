import React from "react";
import { HighlightsBlock, HighlightWrapper } from "../styling/shared_styles";
import { HighlightButton } from "../styling/highlight_styles";

export default function Highlights() {
  return (
    <HighlightsBlock>
      <h3>Important Links</h3>
      <h5>Dev/Design</h5>
      <HighlightWrapper>
        <a href="https://www.foxtrotco.com" target="_blank" rel="noreferrer">
          <HighlightButton>Foxtrot Market</HighlightButton>
        </a>

        <a href="https://www.thinkcerca.com/" target="_blank" rel="noreferrer">
          <HighlightButton>ThinkCERCA</HighlightButton>
        </a>
      </HighlightWrapper>

      <h5>Art/Music</h5>
      <HighlightWrapper>
        <a
          href="https://www.instagram.com/hebrubrantley/"
          target="_blank"
          rel="noreferrer"
        >
          <HighlightButton>Hebru Brantley</HighlightButton>
        </a>

        <a
          href="https://shadesofblueprints.com/products/outkast-2-dope-boyz-in-a-cadillac-giclee-print-1996"
          target="_blank"
          rel="noreferrer"
        >
          <HighlightButton>Outkast Art</HighlightButton>
        </a>

        <a
          href="https://www.instagram.com/hiphopheadprints/?igshid=NmZiMzY2Mjc%3D"
          target="_blank"
          rel="noreferrer"
        >
          <HighlightButton>Hip Hop Heads</HighlightButton>
        </a>
      </HighlightWrapper>
    </HighlightsBlock>
  );
}
