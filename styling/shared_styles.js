"use client";
import styled from "styled-components";

export const BlackAppWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
`;

export const BodyWrapper = styled.body`
  background: #000000;
  /* padding: 10px; */
`;

export const LeoAppContainer = styled.div`
  max-width: 1304px;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
`;

// mobile first transitioned
export const NameSocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 1em 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

// mobile first transitioned
export const SocialConnectBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & h4 {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    font-variant: small-caps;
  }
`;
// mobile first transitioned
export const SocialConnectRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 30px;
  & a {
    margin: 0;
  }
  & a:last-child {
    margin: 0;
  }
  & svg {
    width: 30px;
    height: auto;
    fill: #af51de; //5e0b86
    transition: fill 0.95s ease-in-out;
  }
  & svg:last-child {
    margin: 0;
  }
  & svg:hover {
    cursor: pointer;
    fill: #c29f00;
  }
  & img {
    width: 30px;
    height: auto;
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    & svg {
      width: 40px;
    }
  }
`;

export const OrangeRing = styled.div`
  border: 3px solid #c29f00;
  border-radius: 4px;
  height: auto;
  width: 95%;
  position: relative;
  margin: 0 auto;
`;

export const PurpleRing = styled.div`
  border: 3px solid #5e0b86;
  border-radius: 4px;
  height: auto;
  width: 99%;
  position: absolute;
  top: 1px;
  left: -1px;
`;
export const PortfolioButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const HightlightButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;
export const PortfolioButton = styled.button`
  border: 2px solid #c29f00;
  border-radius: 4px;
  background-color: transparent;
  color: #c29f00;
  padding: 10px;
  font-family: "Inconsolata", sans-serif;
  font-weight: 900;
  font-size: 1em;
  line-height: 1.2em;
  text-transform: uppercase;
  transition: all 1s ease-out;
  width: 100%;
  margin: 0 auto;

  & a {
    text-decoration: none;
    color: #c29f00;
    transition: color 1s ease-out;
  }

  &:hover {
    border: 2px solid #5e0b86;
    color: #5e0b86;
    cursor: pointer;
    & a {
      color: #5e0b86;
    }
  }
`;

export const HighlightsBlock = styled.div`
  color: #ffffff;
  padding: 30px 20px;
  border: 5px solid;
  border-image: linear-gradient(-45deg, #5e0b86, #c29f00) 1;
  /* width: 380px; */
  margin: 0;
  /* justify-self: start; */

  & h3 {
    font-family: "Raleway", sans-serif;
    font-size: 32px;
    line-height: 38px;
    font-weight: 800;
    text-transform: uppercase;
    color: #c29f00;
    margin: 0 0 20px 0;
    text-align: center;
  }

  & h5 {
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 600;
    text-transform: uppercase;
    font-variant: small-caps;
    text-align: center;
    color: #ffffff;
    width: 160px;
    margin: 0 auto 20px auto;
  }

  @media screen and (max-width: 1200px) {
    /* & h5 {
      margin: 0 auto 20px auto;
    } */
  }
`;

export const HighlightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  row-gap: 20px;
  flex-wrap: wrap;
  margin: 0 0 20px 0;

  @media screen and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SocialLinks = styled.a`
  text-decoration: none;
`;

export const GithubCTA = styled.button`
  display: flex;
  flex-direction: row;
  width: 200px;
  background-color: #333333;
  border: 2px solid #c29f00;
  border-radius: 8px;
  padding: 5px 10px;
  column-gap: 12px;
  transition: background-color 0.75s ease-in-out;
  & svg {
    width: 26px;
    height: 26px;
    transition: fill 0.75s ease-in-out;
  }
  & span {
    font-family: "Roboto Slab", serif;
    font-weight: 500;
    text-decoration: none;
    color: #ffffff;
    font-size: 19px;
    line-height: 24px;
    font-variant: small-caps;
    transition: color 0.75s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    background-color: #c29f00;
    & svg {
      fill: #3a0951;
    }
    & span {
      color: #3a0951;
    }
  }

  &:active {
    cursor: pointer;
    background-color: #c29f00;
    & svg {
      fill: #3a0951;
    }
    & span {
      background: rgba(194, 159, 0, 0.5);
      color: rgba(58, 9, 81, 0.7);
    }
  }
  &:disabled {
    cursor: not-allowed;
    border: 2px solid rgba(194, 159, 0, 0.4);
    background-color: rgba(51, 51, 51, 0.4);

    & span {
    }
  }
`;

export const BodyContainer = styled.div`
  padding: 0 0 20px 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 20px 0 20px 0;
  }
`;

export const MasonryBlock = styled.div`
  display: grid;
  width: 100%;
  margin: 10px auto;
  grid-template-columns: [werk] 65.2% [lynx] 33.33%;
  column-gap: 20px;

  @media screen and (max-width: 1353px) {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    /* width: 99%; */
  }
`;

// export const LeoApp = styled.div`
//   text-align: center;
//   background-color: #000000;
// `;

export const LeoAppLogo = styled.img`
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`;

export const CaseStudiesBlock = styled.div`
  margin-right: 15px;
`;
