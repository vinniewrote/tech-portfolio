"use client";
import React, { useCallback, useEffect } from "react";
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

import problem from "../public/images/problem_icon.svg";
import sbp_outcome_desktop from "../public/images/ShopByBrand_outcome_desktop.svg";
import sbp_outcome_tablet from "../public/images/ShopByBrand_outcome_iPad.svg";
import sbp_outcome_mobile from "../public/images/ShopByBrand_outcome_mobile.svg";
import sbp_solution_mobile_home from "../public/images/sbp_solution_mobile_home.svg";
import sbp_solution_mobile_nav from "../public/images/sbp_solution_mobile_nav_sidebar.svg";
import sbp_solution_mobile_search from "../public/images/sbp_solution_mobile_search.svg";
import sbp_solution_desktop_search from "../public/images/sbp_solution_desktop_search.svg";
import sbp_solution_tablet_search from "../public/images/sbp_solution_tablet_search.svg";
import sbp_solution_tablet_home from "../public/images/sbp_solution_tablet_home.svg";
import useEmblaCarousel from "embla-carousel-react";
import BrandOutcome from "./BrandOutcome";

export default function ShopByBrand() {
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
            {/* construction */}
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
                      src={sbp_solution_desktop_search}
                      alt="desktop-search"
                    />
                  </div>
                  <div
                    className="embla__slide"
                    style={{ flex: "0 0 100%", minWidth: " 0" }}
                  >
                    <Image
                      src={sbp_solution_mobile_home}
                      alt="mobile-solution"
                    />
                  </div>

                  <div
                    className="embla__slide"
                    style={{ flex: "0 0 100%", minWidth: " 0" }}
                  >
                    <Image src={sbp_solution_mobile_nav} alt="mobile-nav" />
                  </div>
                  <div
                    className="embla__slide"
                    style={{ flex: "0 0 100%", minWidth: " 0" }}
                  >
                    <Image
                      src={sbp_solution_mobile_search}
                      alt="mobile-search"
                    />
                  </div>
                  <div
                    className="embla__slide"
                    style={{ flex: "0 0 100%", minWidth: " 0" }}
                  >
                    <Image
                      src={sbp_solution_tablet_search}
                      alt="tablet-search"
                    />
                  </div>
                  <div
                    className="embla__slide"
                    style={{ flex: "0 0 100%", minWidth: " 0" }}
                  >
                    <Image src={sbp_solution_tablet_home} alt="tablet-home" />
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
                    onClick={() => scrollPrev()}
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
                    onClick={() => scrollNext()}
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

        {/* add component here */}
        <BrandOutcome />
      </PortfolioContainer>
    </PortfolioBlock>
  );
}
