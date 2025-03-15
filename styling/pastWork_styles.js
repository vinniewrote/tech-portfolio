import styled from "styled-components";

export const PastWorkButton = styled.button``;

export const CaseStudyLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-decoration: none;
`;

export const PastWorkSlide = styled.div`
  width: 200px;
  height: 100%;
  margin: 0;
  padding: 10px;
  border: 2px solid transparent;
  transition: border 1s ease-in-out;

  &:hover {
    border: 2px solid #5e0b86;
    border-radius: 4px 0;
  }

  p {
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const PastWorkLogo = styled.div`
  display: none;

  & img {
    display: block;
    height: auto;
    width: 80px;
    margin: 12px auto;
  }

  &:hover {
    border: 2px solid #5e0b86;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
    border: 2px solid #c29f00;
    border-radius: 50%;
    margin: 0 auto;
    transition: border 1s ease-out;
  }
`;

export const PastWorkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px auto;
  justify-content: space-evenly;

  @media screen and (min-width: 768px) {
  }
`;

export const PastWorkBlock = styled.div`
  color: #ffffff;
  padding: 30px 20px;
  border: 5px solid;
  border-image: linear-gradient(-45deg, #5e0b86, #c29f00) 1;
  margin: 0;

  & h3 {
    font-family: "Raleway", sans-serif;
    font-size: 32px;
    font-weight: 800;
    line-height: 38px;
    text-transform: uppercase;
    color: #c29f00;
    margin: 0;
    text-align: center;
  }
`;
