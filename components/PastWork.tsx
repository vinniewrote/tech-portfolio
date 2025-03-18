import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PastWorkButton,
  PastWorkSlide,
  PastWorkLogo,
  PastWorkBlock,
  CaseStudyLink,
  PastWorkWrapper,
} from "../styling/pastWork_styles";
import foxtrot from "../public/images/foxtrot-portfolio-logo.svg";
import { PortfolioButton } from "../styling/shared_styles";

export default function PastWork() {
  return (
    <PastWorkBlock>
      <h3>Past Work</h3>
      <PastWorkWrapper>
        <PastWorkSlide>
          <PastWorkLogo>
            <Image src={foxtrot} alt="foxtrot" width={20} height={20} />
          </PastWorkLogo>
          {/* <h5>Foxtrot: Third Party Authentication</h5> */}
          <p>A large-scale project focused on easing the user process.</p>

          <PortfolioButton>
            <Link href="/foxtrot-tpa">
              <span>Learn More</span>
            </Link>
          </PortfolioButton>
        </PastWorkSlide>

        <PastWorkSlide>
          <PastWorkLogo>
            <Image src={foxtrot} alt="foxtrot" width={20} height={20} />
          </PastWorkLogo>
          {/* <h5>Foxtrot: Shop by Brand</h5> */}
          <p>Higlighting some of the best brands that Foxtrot has to offer.</p>

          <PortfolioButton>
            <Link href="/foxtrot-shop">Learn More</Link>
          </PortfolioButton>
        </PastWorkSlide>
      </PastWorkWrapper>
    </PastWorkBlock>
  );
}
