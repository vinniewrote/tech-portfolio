import styled from "styled-components";

export const SpeakingPresentationsBlock = styled.div`
  color: #ffffff;
  padding: 30px 20px;
  border: 5px solid;
  border-image: linear-gradient(-45deg, #5e0b86, #c29f00) 1;
  margin: 10px 0;
`;

export const PresentationBlockHeader = styled.h3`
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  text-align: center;
  color: #c29f00;
  font-size: 32px;
  line-height: 38px;
  font-weight: 800;
  margin: 0;
`;

export const ConferenceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  column-gap: 90px;
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
  & h4 {
    color: #ffffff;
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
    text-align: left;
    padding: 0;
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
`;

export const PresentationCardTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #5e0b86;
  transition: color 0.75s ease;
  border-bottom: 2px solid #c29f00;
  transition: border 0.75s ease;
`;

export const PresentationCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PresentationCardButton = styled.button`
  width: 33%;
  border: 2px solid #c29f00;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-family: "Roboto Slab", serif;
  font-weight: 500;
  font-size: 1em;
  line-height: 18px;
  text-align: center;
  padding: 5px 10px;
  margin: 0 auto;
`;

export const PresentationCardTitle = styled.h5`
  color: #c29f00;
  font-family: "Roboto Slab", serif;
  font-weight: 500;
  font-size: 1em;
  line-height: 18px;
  text-align: center;
  margin: 0 0 20px 0;
  padding: 10px;
  transition: color 0.75s ease;
`;
