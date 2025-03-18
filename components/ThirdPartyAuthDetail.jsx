"use client";
import React from "react";
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
import { Carousel } from "react-responsive-carousel";

import problem_1 from "../public/images/problem_1.png";
import problem_1_mobile from "../public/images/problemOne_mobile.svg";
import solution_1_mobile from "../public/images/solutionOne_mobile.svg";
import solution_1_mobile_new from "../public/images/solutionOne_mobile-new.svg";
import solution_2_mobile from "../public/images/solutionTwo_mobile.svg";
import solution_3_desktop from "../public/images/solutionThree_desktop.svg";
import solution_4_desktop from "../public/images/solutionFour_desktop.svg";
import solution_5_desktop from "../public/images/solutionFive_desktop.svg";
import solution_1 from "../public/images/solution_1.png";
import solution_2 from "../public/images/solution_2.png";
import solution_3 from "../public/images/solution_3.png";
import solution_4 from "../public/images/solution_4.png";
import solution_5 from "../public/images/solution_5.png";
import success from "../public/images/success_icon.svg";

export default function ThirdPartyAuth() {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  const indicatorStyles = {
    background: "#c29f00",
    border: "1px solid #999595",
    borderRadius: "50%",
    cursor: "pointer",
    width: 16,
    height: 16,
    display: "inline-block",
    margin: "0 8px",
  };
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
            <CarouselWrapper>
              <Carousel
                dynamicHeight={true}
                showThumbs={false}
                statusFormatter={(current, total) =>
                  `Current slide: ${current} / Total: ${total}`
                }
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      style={{
                        ...arrowStyles,
                        background: "transparent",
                        border: "2px solid #c29f00",
                        color: "#c29f00",
                        borderRadius: "4px",
                        width: "75px",
                        height: "75px",
                        padding: "5px",
                        fontSize: "2em",
                        left: 15,
                      }}
                    >
                      &#8592;
                    </button>
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      style={{
                        ...arrowStyles,
                        background: "transparent",
                        border: "2px solid #c29f00",
                        color: "#c29f00",
                        borderRadius: "4px",
                        width: "75px",
                        height: "75px",
                        padding: "5px",
                        fontSize: "2em",
                        right: 15,
                      }}
                    >
                      &#8594;
                    </button>
                  )
                }
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                  if (isSelected) {
                    return (
                      <li
                        style={{ ...indicatorStyles, background: "#5E0B86" }}
                        aria-label={`Selected: ${label} ${index + 1}`}
                        title={`Selected: ${label} ${index + 1}`}
                      />
                    );
                  }
                  return (
                    <li
                      style={indicatorStyles}
                      onClick={onClickHandler}
                      onKeyDown={onClickHandler}
                      value={index}
                      key={index}
                      role="button"
                      tabIndex={0}
                      title={`${label} ${index + 1}`}
                      aria-label={`${label} ${index + 1}`}
                    />
                  );
                }}
              >
                <div>
                  <Image src={solution_1_mobile_new} width={100} height={100} />
                </div>
                <div>
                  <Image src={solution_2_mobile} width={100} height={100} />
                </div>
                <div>
                  <Image src={solution_3_desktop} width={100} height={100} />
                </div>
                <div>
                  <Image src={solution_4_desktop} width={100} height={100} />
                </div>
                <div>
                  <Image src={solution_5_desktop} width={100} height={100} />
                </div>
              </Carousel>
            </CarouselWrapper>
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
              <img src={success} alt="success" />
            </div>
          </PortfolioImageBlock>
        </PortfolioWrapper>
      </PortfolioContainer>
    </PortfolioBlock>
  );
}
