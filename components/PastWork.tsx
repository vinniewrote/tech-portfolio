import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PastWorkSlide,
  PastWorkLogo,
  PastWorkBlock,
  PastWorkWrapper,
} from "../styling/pastWork_styles";
import foxtrot from "../public/images/foxtrot-portfolio-logo.svg";
import {
  PortfolioButton,
  PortfolioButtonWrapper,
} from "../styling/shared_styles";

export default function PastWork() {
  return (
    <PastWorkBlock>
      <h3>Highlight Reel</h3>
      <PastWorkWrapper>
        <PastWorkSlide>
          <PastWorkLogo>
            <Image src={foxtrot} alt="foxtrot" width={20} height={20} />
          </PastWorkLogo>
          {/* <h5>Foxtrot: Third Party Authentication</h5> */}
          <p>A large-scale project focused on easing the user process.</p>
          <PortfolioButtonWrapper>
            <Link href="/foxtrot-tpa">
              <PortfolioButton>
                <span>Learn More</span>
              </PortfolioButton>
            </Link>
          </PortfolioButtonWrapper>
        </PastWorkSlide>

        <PastWorkSlide>
          <PastWorkLogo>
            <Image src={foxtrot} alt="foxtrot" width={20} height={20} />
          </PastWorkLogo>
          {/* <h5>Foxtrot: Shop by Brand</h5> */}
          <p>Higlighting some of the best brands that Foxtrot has to offer.</p>
          <PortfolioButtonWrapper>
            <Link href="/foxtrot-shop">
              <PortfolioButton>
                <span>Learn More</span>
              </PortfolioButton>
            </Link>
          </PortfolioButtonWrapper>
        </PastWorkSlide>
      </PastWorkWrapper>
    </PastWorkBlock>
  );
}
