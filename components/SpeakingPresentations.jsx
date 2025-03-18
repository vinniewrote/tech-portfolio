import React from "react";
import {
  ConferenceCardContainer,
  ConferenceCard,
  SpeakingPresentationsBlock,
} from "../styling/speaking_styles";

export default function SpeakingPresentations() {
  return (
    <SpeakingPresentationsBlock>
      <h3>Presentations</h3>
      <ConferenceCardContainer>
        <ConferenceCard>
          <h3>2015</h3>
          <a
            href="https://www.dropbox.com/scl/fi/ol6ptah1wbey56yo4am0x/chicagoWebConf_FINAL_notes.pdf?rlkey=rcu7lip3r4ga5ldtefg173wrt&st=yfr3rgue&dl=0"
            target="_blank"
          >
            <h4>ChicagoWebConf</h4>
            <h5>Quick Prototyping with Foundation</h5>
          </a>
        </ConferenceCard>
        <ConferenceCard>
          <h3>2017</h3>
          <a
            href="https://www.dropbox.com/scl/fi/i0af8dlsiq35jygczhauq/Impostor_syndrome_preso.pdf?rlkey=mzg6udpd4w05nyz6vzmcgzetb&dl=0"
            target="_blank"
          >
            <h4>Blacks in Technology</h4>
            <h5>This is Impostor Syndrome</h5>
          </a>
        </ConferenceCard>
      </ConferenceCardContainer>
    </SpeakingPresentationsBlock>
  );
}
