import React from "react";
import { PortfolioBlock } from "../styles/portfolioDetail_styles";

export default function CheckoutInterstitial() {
  return (
    <PortfolioBlock id="checkoutInterstitialDetails">
      <h3>Foxtrot Market : Checkout Interstitial</h3>
      <div className="portfolioContainer">
        <div className="portfolioProblem">
          <h3>The Problem</h3>
        </div>
        <div className="portfolioSolution">
          <h3>The Solution</h3>
        </div>
        <div className="portfolioOutcome">
          <h3>The Outcome</h3>
        </div>
      </div>
    </PortfolioBlock>
  );
}
