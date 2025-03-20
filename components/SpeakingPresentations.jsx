import React from "react";
import {
  ConferenceCardContainer,
  ConferenceCard,
  SpeakingPresentationsBlock,
  PresentationCardTopBar,
  PresentationBlockHeader,
  PresentationCardBody,
  PresentationCardButton,
  PresentationCardTitle,
} from "../styling/speaking_styles";

export default function SpeakingPresentations() {
  return (
    <SpeakingPresentationsBlock>
      <PresentationBlockHeader>Presentations</PresentationBlockHeader>
      <ConferenceCardContainer>
        <ConferenceCard>
          <PresentationCardTopBar>
            <h3>2015</h3>
            <h4>ChicagoWebConf</h4>
          </PresentationCardTopBar>
          <PresentationCardBody>
            <PresentationCardTitle>
              Quick Prototyping with Foundation
            </PresentationCardTitle>

            <PresentationCardButton>
              <a
                href="https://www.dropbox.com/scl/fi/ol6ptah1wbey56yo4am0x/chicagoWebConf_FINAL_notes.pdf?rlkey=rcu7lip3r4ga5ldtefg173wrt&st=yfr3rgue&dl=0"
                target="_blank"
              >
                <span>View</span>
              </a>
            </PresentationCardButton>
          </PresentationCardBody>
        </ConferenceCard>
        <ConferenceCard>
          <PresentationCardTopBar>
            <h3>2017</h3>
            <h4>Blacks in Technology</h4>
          </PresentationCardTopBar>
          <PresentationCardBody>
            <PresentationCardTitle>
              This is Impostor Syndrome
            </PresentationCardTitle>

            <PresentationCardButton>
              <a
                href="https://www.dropbox.com/scl/fi/i0af8dlsiq35jygczhauq/Impostor_syndrome_preso.pdf?rlkey=mzg6udpd4w05nyz6vzmcgzetb&dl=0"
                target="_blank"
              >
                <span>View</span>
              </a>
            </PresentationCardButton>
          </PresentationCardBody>
        </ConferenceCard>
      </ConferenceCardContainer>
    </SpeakingPresentationsBlock>
  );
}
