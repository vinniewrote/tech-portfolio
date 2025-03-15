import React from "react";
import {
  PastWorkButton,
  PastWorkSlide,
  PastWorkLogo,
  PastWorkBlock,
  CaseStudyLink,
  PastWorkWrapper,
} from "../styling/pastWork_styles";
import foxtrot from "../public/images/foxtrot-portfolio-logo.svg";
// import githubLogo from "../images/github.svg";
// import Github from "../images/Github";
import {
  PortfolioButton,
  GithubCTA,
  ButtonRow,
  SocialLinks,
} from "../styling/shared_styles";

export default function PastWork() {
  return (
    <PastWorkBlock>
      <h3>Past Work</h3>
      <PastWorkWrapper>
        <PastWorkSlide>
          <PastWorkLogo>
            <img src={foxtrot} alt="foxtrot" />
          </PastWorkLogo>
          {/* <h5>Foxtrot: Third Party Authentication</h5> */}
          <p>A large-scale project focused on easing the user process.</p>
          <CaseStudyLink href="#thirdPartyAuth">
            <PortfolioButton>
              <span>Learn More</span>
            </PortfolioButton>
          </CaseStudyLink>
        </PastWorkSlide>

        <PastWorkSlide>
          <PastWorkLogo>
            <img src={foxtrot} alt="foxtrot" />
          </PastWorkLogo>
          {/* <h5>Foxtrot: Shop by Brand</h5> */}
          <p>Higlighting some of the best brands that Foxtrot has to offer.</p>
          <CaseStudyLink href="#shopByBrandDetails">
            <PortfolioButton>Learn More</PortfolioButton>
          </CaseStudyLink>
        </PastWorkSlide>

        {/* <PastWorkSlide>
          <h5>Foxtrot: Checkout Interstitial</h5>
          <p>
            Lorem harum eum et saepe quibusdam iste sit tempore,beatae molestias
            quo sint veritatis architecto ab praesentium esse error.
          </p>
          <a href="#checkoutInterstitialDetails">
            <PortfolioButton>See more</PortfolioButton>
          </a>
        </PastWorkSlide> */}

        {/* <PastWorkSlide>
          <h5>Foxtrot: Navigation Redesign</h5>
          <p>
            Lorem harum eum et saepe quibusdam iste sit tempore,beatae molestias
            quo sint veritatis architecto ab praesentium esse error.
          </p>
          <a href="#navigationRedesignDetails">
            <PortfolioButton>See more</PortfolioButton>
          </a>
        </PastWorkSlide> */}
      </PastWorkWrapper>

      {/* <ButtonRow>
        <SocialLinks href="https://github.com/vinniewrote">
          <GithubCTA>
            <Github />
            <span>more on github</span>
          </GithubCTA>
        </SocialLinks>
      </ButtonRow> */}
    </PastWorkBlock>
  );
}
