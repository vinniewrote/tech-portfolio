import React from "react";
import {} from "../styles/shared_styles";
import {
  PortfolioBlock,
  PortfolioContainer,
  PortfolioCopyBlock,
  PortfolioImageBlock,
  PortfolioWrapper,
  PortfolioInverseWrapper,
  CopyWrapper,
  CarouselWrapper,
} from "../styles/portfolioDetail_styles";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.css";
import problem_1 from "../images/problem_1.png";

export default function NavigationRedesign() {
  return (
    <PortfolioBlock id="navigationRedesignDetails">
      <h3>Foxtrot Market : Navigation Redesign</h3>
      <PortfolioContainer>
        <PortfolioWrapper>
          <PortfolioCopyBlock>
            <CopyWrapper>
              <h3>The Problem</h3>
            </CopyWrapper>
          </PortfolioCopyBlock>
          <PortfolioImageBlock>
            <div>
              <img src={problem_1} alt="problem" />
            </div>
          </PortfolioImageBlock>
        </PortfolioWrapper>

        <PortfolioInverseWrapper>
          <PortfolioCopyBlock>
            <CopyWrapper>
              <h3>The Solution</h3>
            </CopyWrapper>
          </PortfolioCopyBlock>
          <PortfolioImageBlock>
            <div>
              <img src={problem_1} alt="problem" />
            </div>
          </PortfolioImageBlock>
        </PortfolioInverseWrapper>

        <PortfolioWrapper>
          <PortfolioCopyBlock>
            <CopyWrapper>
              <h3>The Outcome</h3>
            </CopyWrapper>
          </PortfolioCopyBlock>
          <PortfolioImageBlock>
            <div>
              <img src={problem_1} alt="problem" />
            </div>
          </PortfolioImageBlock>
        </PortfolioWrapper>
      </PortfolioContainer>
    </PortfolioBlock>
  );
}
