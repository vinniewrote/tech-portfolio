import styled from "styled-components";

export const SpeakingPresentationsBlock = styled.div`
  color: #ffffff;
  padding: 30px 20px;
  border: 5px solid;
  border-image: linear-gradient(-45deg, #5e0b86, #c29f00) 1;
  margin: 10px 0;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  & h3 {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    text-align: center;
    color: #c29f00;
    font-size: 32px;
    line-height: 38px;
    font-weight: 800;
    margin: 0;
  }
`;

export const ConferenceCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* min-width: 1254px; */
  margin: 20px 0 0 0;
  column-gap: 90px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ConferenceCard = styled.div`
  width: 80%;
  margin: 0.75em auto;
  border: 2px solid #c29f00;
  border-radius: 6px 6px 4px 4px;
  background-color: transparent;
  color: #ffffff;
  padding: 0;
  transition: border 0.75s ease;
  flex-grow: 1;
  & a {
    text-decoration: none;
  }
  & a h4 {
    color: #ffffff;
  }
  & a h5 {
    color: #c29f00;
  }
  &:hover {
    border: 2px solid #5e0b86;
    cursor: pointer;
    & h3 {
      color: #ffffff;
      border-bottom: 2px solid #5e0b86;
    }
    & a h4 {
      color: #c29f00;
    }
    & a h5 {
      color: #ffffff;
    }
  }

  &:active {
    border: 2px solid #3a0951;
    cursor: pointer;
    & h3 {
      color: #ffffff;
    }
    & a h4 {
      color: #3a0951;
    }
    & a h5 {
      color: rgba(194, 159, 0, 0.5);
    }
  }

  & h3 {
    font-family: "Inconsolata", sans-serif;
    font-size: 18px;
    font-weight: 700;
    background-color: #5e0b86;
    text-align: left;
    padding: 0 10px;
    transition: color 0.75s ease;
    border-bottom: 2px solid #c29f00;
    transition: border 0.75s ease;
  }

  & h4 {
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin: 20px 0;
    padding: 0 10px;
    transition: color 0.75s ease;
  }

  & h5 {
    font-family: "Roboto Slab", serif;
    font-weight: 500;
    font-size: 1em;
    line-height: 18px;
    text-align: center;
    margin: 0 0 20px 0;
    padding: 0 10px;
    transition: color 0.75s ease;
  }

  @media screen and (max-width: 768px) {
    /* width: 180px;
    margin: 0.75em auto;
    padding: 0; */
    /* & h4 {
      font-size: 18px;
    }
    & h5 {
      font-size: 12px;
    } */
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
