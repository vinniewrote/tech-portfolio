"use client";
import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import {
  PortfolioBlock,
  PortfolioContainer,
  PortfolioCopyBlock,
  PortfolioImageBlock,
  PortfolioWrapper,
  PortfolioInverseWrapper,
  CopyWrapper,
  CarouselWrapper,
} from "../styling/portfolioDetail_styles";

import problem_1_mobile from "../public/images/problemOne_mobile.svg";
import solution_1_mobile from "../public/images/solutionOne_mobile.svg";
import solution_1_mobile_new from "../public/images/solutionOne_mobile-new.svg";
import solution_2_mobile from "../public/images/solutionTwo_mobile.svg";
import solution_3_desktop from "../public/images/solutionThree_desktop.svg";
import solution_4_desktop from "../public/images/solutionFour_desktop.svg";
import solution_5_desktop from "../public/images/solutionFive_desktop.svg";
import success from "../public/images/success_icon.svg";
import useEmblaCarousel from "embla-carousel-react";

export default function ThirdPartyAuth() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <PortfolioBlock id="thirdPartyAuth">
      <h3>Foxtrot Market : Third Party Authentication</h3>
      <PortfolioContainer>
        <PortfolioWrapper>
          <PortfolioCopyBlock>
            <CopyWrapper>
              <h3>The Problem</h3>
              <p>
                If users want to complete a purchase, they need to be logged in.
                We have our standard in-house login, but it takes users some
                time to get started. Thus, preventing some users from completing
                the login process. We want to make it easy to create an account
                and get your order out.
              </p>
            </CopyWrapper>
          </PortfolioCopyBlock>
          <PortfolioImageBlock>
            <div>
              <Image
                src={problem_1_mobile}
                alt="problem"
                width={100}
                height={100}
              />
            </div>
          </PortfolioImageBlock>
        </PortfolioWrapper>
        <PortfolioInverseWrapper>
          <PortfolioCopyBlock>
            <CopyWrapper>
              <h3>The Solution</h3>
              <p>
                The solution was to use the Login with Google/Apple button to
                authenticate quickly and get the user shopping. The Google and
                Apple authenticators then work with our in-house system to
                create a user account asynchronously. The user has the ease of
                using and already established account.
              </p>
            </CopyWrapper>
          </PortfolioCopyBlock>
          <PortfolioImageBlock>
            <div className="embla">
              <div
                className="embla_viewport"
                style={{ overflow: "hidden", position: "relative" }}
                ref={emblaRef}
              >
                <div className="embla__container" style={{ display: "flex" }}>
                  <div
                    className="embla__slide"
                    style={{ flex: "0 0 100%", minWidth: " 0" }}
                  >
                    <Image
                      src={solution_1_mobile_new}
                      alt="mobile-solution-1"
                    />
                  </div>
                  <div
                    className="embla__slide"
                    style={{ flex: "0 0 100%", minWidth: " 0" }}
                  >
                    <Image src={solution_2_mobile} alt="mobile-solution-2" />
                  </div>
                  <div
                    className="embla__slide"
                    style={{ flex: "0 0 100%", minWidth: " 0" }}
                  >
                    <Image src={solution_3_desktop} alt="desktop-solution-3" />
                  </div>
                  <div
                    className="embla__slide"
                    style={{ flex: "0 0 100%", minWidth: " 0" }}
                  >
                    <Image src={solution_4_desktop} alt="desktop-solution-4" />
                  </div>
                  <div
                    className="embla__slide"
                    style={{ flex: "0 0 100%", minWidth: " 0" }}
                  >
                    <Image src={solution_5_desktop} alt="desktop-solution-5" />
                  </div>
                </div>

                <div
                  className="button-wrapper"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "absolute",
                    top: "50%",
                    width: "100%",
                  }}
                >
                  <button
                    className="embla__prev"
                    onClick={scrollPrev}
                    style={{
                      background: "transparent",
                      border: "2px solid #c29f00",
                      color: "#c29f00",
                      borderRadius: "4px",
                      width: "75px",
                      height: "75px",
                      padding: "5px",
                      fontSize: "2em",
                    }}
                  >
                    &#8592;
                  </button>
                  <button
                    className="embla__next"
                    onClick={scrollNext}
                    style={{
                      background: "transparent",
                      border: "2px solid #c29f00",
                      color: "#c29f00",
                      borderRadius: "4px",
                      width: "75px",
                      height: "75px",
                      padding: "5px",
                      fontSize: "2em",
                    }}
                  >
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
          </PortfolioImageBlock>
        </PortfolioInverseWrapper>
        <PortfolioWrapper>
          <PortfolioCopyBlock>
            <CopyWrapper>
              <h3>The Outcome</h3>
              <ul>
                <li>In the first month, sales increased by 5%.</li>
                <li>Abandoned carts decreased by 37%.</li>
              </ul>
            </CopyWrapper>
          </PortfolioCopyBlock>
          <PortfolioImageBlock>
            <div>
              <Image src={success} alt="success" />
            </div>
          </PortfolioImageBlock>
        </PortfolioWrapper>
      </PortfolioContainer>
    </PortfolioBlock>
  );
}
