"use client";
import React from "react";
import ThirdPartyAuthDetail from "../../components/ThirdPartyAuthDetail";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BodyContainer } from "../../styling/shared_styles";

export default function ThirdParty() {
  return (
    <BodyContainer>
      <Header />
      <ThirdPartyAuthDetail />
      <Footer />
    </BodyContainer>
  );
}
