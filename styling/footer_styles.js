import styled from "styled-components";

export const FooterSlogan = styled.div`
  p {
    font-family: "Inconsolata", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.25em;
    line-height: 21px;
    color: #ffffff;
    margin: 0;
  }

  @media (max-width: 768px) and (min-width: 429px) {
    p {
      font-size: 1em;
    }
  }
  @media screen and (max-width: 428px) {
    p {
      font-size: 0.8em;
    }
  }
`;

export const FooterBlock = styled.footer`
  display: flex;
  color: #ffffff;
  justify-content: space-between;
  background-color: black;
  padding: 0;
  margin: 10px 0 0 0;

  @media screen and (max-width: 768px) {
  }
`;

export const FooterImg = styled.div`
  & svg {
    height: 25px;
    width: auto;
    &:hover {
      fill: #333333;
    }
  }
  @media screen and (max-width: 428px) {
    display: none;
  }
`;

export const ConnectPlatforms = styled.div`
  & a {
    margin-right: 1.25em;
  }
  & svg {
    height: auto;
    width: 25px;
    transition: fill 0.75s ease-in-out;
    &:hover {
      fill: #333333;
    }
  }

  @media screen and (max-width: 768px) {
    & svg {
      width: 18px;
    }
  }
`;
