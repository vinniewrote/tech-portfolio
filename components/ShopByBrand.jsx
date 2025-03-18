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
import problem from "../public/images/problem_icon.svg";
// import shopByBrand_mobile_homepage_solution from "../images/shopByBrand_mobile_homepage_solution.png";
// import shopByBrand_mobile_search_solution from "../images/shopByBrand_mobile_search_solution.png";
// import shopByBrand_mobile_sidebar_solution from "../images/shopByBrand_mobile_sidebar_solution.png";
// import shopByBrand_tablet_homepage_solution from "../images/shopByBrand_tablet_homepage_solution.png";
// import shopByBrand_tablet_nav_solution from "../images/shopByBrand_tablet_nav_solution.png";
// import shopByBrand_tablet_search_solution from "../images/shopByBrand_tablet_search_solution.png";
// import shopByBrand_desktop_gatingpage_outcome from "../images/shopByBrand_desktop_gatingpage_outcome.png";
// import shopByBrand_mobile_gatingpage_outcome from "../images/shopByBrand_mobile_gatingpage_outcome.png";
// import shopByBrand_tablet_gatingpage_outcome from "../images/shopByBrand_tablet_gatingpage_outcome.png";
import sbp_outcome_desktop from "../public/images/ShopByBrand_outcome_desktop.svg";
import sbp_outcome_tablet from "../public/images/ShopByBrand_outcome_iPad.svg";
import sbp_outcome_mobile from "../public/images/ShopByBrand_outcome_mobile.svg";
import sbp_solution_mobile_home from "../public/images/sbp_solution_mobile_home.svg";
import sbp_solution_mobile_nav from "../public/images/sbp_solution_mobile_nav_sidebar.svg";
import sbp_solution_mobile_search from "../public/images/sbp_solution_mobile_search.svg";
import sbp_solution_desktop_search from "../public/images/sbp_solution_desktop_search.svg";
import sbp_solution_tablet_search from "../public/images/sbp_solution_tablet_search.svg";
import sbp_solution_tablet_home from "../public/images/sbp_solution_tablet_home.svg";

export default function ShopByBrand() {
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
    <PortfolioBlock id="shopByBrandDetails">
      <h3>Foxtrot Market : Shop By Brand</h3>
      <PortfolioContainer>
        <PortfolioWrapper>
          <PortfolioCopyBlock>
            <CopyWrapper>
              <h3>The Problem</h3>
              <p>
                Brands sold in-store are not getting enough visibility. These
                are a mixture of up and coming and esatblished brands.
              </p>
            </CopyWrapper>
          </PortfolioCopyBlock>
          <PortfolioImageBlock>
            <div>
              <Image src={problem} width={50} height={50} alt="problem" />
            </div>
          </PortfolioImageBlock>
        </PortfolioWrapper>

        <PortfolioInverseWrapper>
          <PortfolioCopyBlock>
            <CopyWrapper>
              <h3>The Solution</h3>
              <p>
                We designed a list of brands to highlight on the homepage,
                navigation bar and search page. This would provide an
                unobtrusive highlight of these brands.
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
                  {/* <img src={sbp_solution_desktop_search} /> */}
                  <Image
                    src={sbp_solution_desktop_search}
                    width={100}
                    height={100}
                    alt="problem"
                  />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <img src={sbp_solution_mobile_home} />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                  <img src={sbp_solution_mobile_nav} />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                  <img src={sbp_solution_mobile_search} />
                  {/* <p className="legend">Legend 5</p> */}
                </div>
                <div>
                  <img src={sbp_solution_tablet_search} />
                  {/* <p className="legend">Legend 4</p> */}
                </div>
                <div>
                  <img src={sbp_solution_tablet_home} />
                  {/* <p className="legend">Legend 5</p> */}
                </div>
              </Carousel>
            </CarouselWrapper>
          </PortfolioImageBlock>
        </PortfolioInverseWrapper>

        <PortfolioWrapper>
          <PortfolioCopyBlock>
            <CopyWrapper>
              <h3>The Outcome</h3>
              <p>
                Sales from the highlighted brands rose an average on 2.5% the
                following month. It was then expanded to be shown on the main
                gating page, further increasing visibility for brand new users.
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
                  <img src={sbp_outcome_desktop} />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <img src={sbp_outcome_tablet} />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                  <img src={sbp_outcome_mobile} />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
              </Carousel>
            </CarouselWrapper>
          </PortfolioImageBlock>
        </PortfolioWrapper>
      </PortfolioContainer>
    </PortfolioBlock>
  );
}
