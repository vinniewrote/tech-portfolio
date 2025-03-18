"use client";
import React from "react";
import ShopByBrand from "../../components/ShopByBrand";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BodyContainer } from "../../styling/shared_styles";

export default function ShopBrand() {
  return (
    <BodyContainer>
      <Header />
      <ShopByBrand />
      <Footer />
    </BodyContainer>
  );
}
