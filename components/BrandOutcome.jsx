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
import useEmblaCarousel from "embla-carousel-react";
import sbp_outcome_desktop from "../public/images/ShopByBrand_outcome_desktop.svg";
import sbp_outcome_tablet from "../public/images/ShopByBrand_outcome_iPad.svg";
import sbp_outcome_mobile from "../public/images/ShopByBrand_outcome_mobile.svg";

export default function BrandOutcome() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const buttonPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const buttonNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <PortfolioWrapper>
      <PortfolioCopyBlock>
        <CopyWrapper>
          <h3>The Outcome</h3>
          <p>
            Sales from the highlighted brands rose an average on 2.5% the
            following month. It was then expanded to be shown on the main gating
            page, further increasing visibility for brand new users.
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
                <Image src={sbp_outcome_desktop} alt="outcome-desktop" />
              </div>
              <div
                className="embla__slide"
                style={{ flex: "0 0 100%", minWidth: " 0" }}
              >
                <Image src={sbp_outcome_tablet} alt="outcome-tablet" />
              </div>

              <div
                className="embla__slide"
                style={{ flex: "0 0 100%", minWidth: " 0" }}
              >
                <Image src={sbp_outcome_mobile} alt="outcome-mobile" />
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
                onClick={buttonPrev}
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
                onClick={buttonNext}
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
    </PortfolioWrapper>
  );
}
