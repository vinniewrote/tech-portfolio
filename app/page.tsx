"use client";
import { BodyContainer, MasonryBlock } from "../styling/shared_styles";
import Headline from "@/components/Headline";
import Highlights from "@/components/Highlights";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PastWork from "@/components/PastWork";
import SpeakingPresentations from "@/components/SpeakingPresentations";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <div>
      <Header />
      <BodyContainer>
        <Headline />
        <MasonryBlock>
          <PastWork />
          <Highlights />
        </MasonryBlock>
        <SpeakingPresentations />
        <Resume />
        <Footer />
      </BodyContainer>
    </div>
  );
}
