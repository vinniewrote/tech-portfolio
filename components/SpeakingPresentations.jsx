import React from "react";
import Link from "next/link";
import { presentationsList } from "../data/presentations-list";
import {
  ConferenceCardContainer,
  ConferenceCard,
  SpeakingPresentationsBlock,
  PresentationCardTopBar,
  PresentationBlockHeader,
  PresentationCardBody,
  PresentationCardButton,
  PresentationCardTitle,
  PresentationCardButtonWrapper,
  PresentationCardFooter,
} from "../styling/speaking_styles";

export default function SpeakingPresentations() {
  return (
    <SpeakingPresentationsBlock>
      <PresentationBlockHeader>Presentations</PresentationBlockHeader>
      <ConferenceCardContainer>
        {presentationsList.presentations.map((presentation) => (
          <ConferenceCard key={presentation.title}>
            <PresentationCardTopBar>
              <h3>{presentation.year}</h3>
              <h4>{presentation.conference}</h4>
            </PresentationCardTopBar>
            <PresentationCardBody>
              <PresentationCardTitle>
                {presentation.title}
              </PresentationCardTitle>
            </PresentationCardBody>
            <PresentationCardFooter>
              <PresentationCardButtonWrapper>
                <Link href={presentation.link} target="_blank">
                  <PresentationCardButton>
                    <span>View</span>
                  </PresentationCardButton>
                </Link>
              </PresentationCardButtonWrapper>
            </PresentationCardFooter>
          </ConferenceCard>
        ))}
      </ConferenceCardContainer>
    </SpeakingPresentationsBlock>
  );
}
