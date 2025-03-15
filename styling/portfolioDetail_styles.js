import styled from "styled-components";

export const PortfolioBlock = styled.div`
  /* background-color: #333333;
  color: aliceblue;
  padding: 0.5em 1em;
  margin: 1em 0; */

  color: #ffffff;
  padding: 30px 20px;
  border: 5px solid;
  border-image: linear-gradient(-45deg, #5e0b86, #c29f00) 1;
  margin: 10px auto;
  /* width: 95%; */

  @media screen and (max-width: 768px) {
    /* max-width: 85%; */
  }

  & h3 {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    color: #c29f00;
    font-size: 32px;
    line-height: 38px;
    font-weight: 800;
    text-align: center;
    margin: 0 0 20px 0;
  }
`;

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PortfolioCopyBlock = styled.div`
  width: 50%;

  @media screen and (max-width: 678px) {
    width: 100%;
  }
`;

export const CopyWrapper = styled.div`
  border: 2px solid #c29f00;
  border-radius: 4px;
  padding: 30px 20px;
  width: 80%;
  margin: 0 auto;
  & h3 {
    font-family: "Roboto Slab", serif;
    color: white;
  }
  & p,
  & ul li {
    font-family: "Raleway", sans-serif;
    margin: 0;
    font-size: 1.25em;
    font-weight: 600;
    line-height: 1.4em;
  }
`;

export const PortfolioImageBlock = styled.div`
  width: 50%;
  background-color: transparent;

  & img {
    display: block;
    height: auto;
    width: 45%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 678px) {
    width: 100%;
    & img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 75%;
    }
  }
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  margin: 2em 0;

  @media screen and (max-width: 678px) {
    flex-direction: column;
    width: 100%;
    row-gap: 20px;
  }
`;
export const CarouselWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const PortfolioInverseWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 2em 0;

  @media screen and (max-width: 678px) {
    flex-direction: column;
    width: 100%;
    row-gap: 20px;
  }
`;
