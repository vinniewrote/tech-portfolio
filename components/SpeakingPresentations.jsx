import React from "react";
import {
  ConferenceCardContainer,
  ConferenceCard,
  SpeakingPresentationsBlock,
} from "../styling/speaking_styles";

export default function SpeakingPresentations() {
  return (
    <SpeakingPresentationsBlock>
      <h3>Speaking &amp; Presentations</h3>
      <ConferenceCardContainer>
        <ConferenceCard>
          <h3>2015</h3>
          <h4>ChicagoWebConf</h4>

          <h5>
            <a href="https://shorturl.at/ekwGX" target="_blank">
              Quick Prototyping with Foundation
            </a>
          </h5>
        </ConferenceCard>
        <ConferenceCard>
          <h3>2017</h3>
          <h4>Blacks in Technology</h4>

          <h5>
            <a href="https://shorturl.at/jpKUW" target="_blank">
              This is Impostor Syndrome
            </a>
          </h5>
        </ConferenceCard>
      </ConferenceCardContainer>
    </SpeakingPresentationsBlock>
  );
}
