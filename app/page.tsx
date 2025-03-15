"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import { use } from "react";
import {
  BodyContainer,
  MasonryBlock,
  LeoApp,
  LeoAppContainer,
  OrangeRing,
  PurpleRing,
  BlackAppWrapper,
} from "../styling/shared_styles";
import Headline from "../components/Headline";
import Highlights from "../components/Highlights";
import Header from "../components/header";
import Footer from "../components/footer";
import PastWork from "../components/PastWork";
import SpeakingPresentations from "../components/SpeakingPresentations";
import Resume from "../components/Resume";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export default function Home() {
  return (
    <div>
      {/* <main className={styles.main}>
        <Title>Test Content</Title>
      </main> */}
      <Header />
      <BodyContainer>
        <Headline />
        <MasonryBlock>
          <PastWork />
          <Highlights />
        </MasonryBlock>

        <SpeakingPresentations />
        <Resume />
        {/* <ThirdPartyAuth />
                <ShopByBrand /> */}
        {/* <CheckoutInterstitial /> */}
        {/* <NavigationRedesign /> */}
        <Footer />
      </BodyContainer>
    </div>
  );
}
