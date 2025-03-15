import styled from "styled-components";

// mobile first transitioned
export const HeadlineBlock = styled.div`
  padding: 30px 20px;
  color: #ffffff;
  height: 100%;
  border: 5px solid;
  border-image: linear-gradient(-45deg, #5e0b86, #c29f00) 1;
  margin: 0 auto;

  & h1 {
    color: #c29f00;
    font-family: "Raleway", sans-serif;
    font-weight: 900;
    font-size: 28px;
    text-transform: uppercase;
    margin: 0;
  }

  & h2 {
    font-family: "Roboto Slab", serif;
    font-size: 20px;
    text-transform: uppercase;
    margin: 10px 0;
    line-height: 38px;
  }

  & p {
    font-family: "Raleway", serif;
    font-weight: 600;
    font-size: 16px;
    text-align: left;
    line-height: 26px;
    width: 95%;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    & h1 {
      font-size: 38px;
    }
    & h2 {
      font-size: 30px;
    }
    & p {
      font-size: 20px;
      width: 100%;
      margin: 0.75em auto;
    }
  }
`;
