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
`;

export const PresentationCardTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #5e0b86;
  /* transition: color 0.75s ease; */
  border-bottom: 2px solid #c29f00;
  /* transition: border 0.75s ease; */
  padding: 10px;
  & h3,
  & h4 {
    font-family: "Inconsolata", sans-serif;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    padding: 0;
  }
`;

export const PresentationCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PresentationCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 10px 0;
`;
export const PresentationCardButtonWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;
export const PresentationCardButton = styled.button`
  border: 2px solid #5e0b86;
  font-weight: 900;
  font-size: 1em;
  line-height: 1.2em;
  text-align: center;
  padding: 5px 10px;
  width: 100%;
  border-radius: 4px;
  background-color: #c29f00;
  color: #5e0b86;
  padding: 10px;
  font-family: "Inconsolata", sans-serif;
  text-transform: uppercase;
  transition: all 1s ease-out;

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

export const PresentationCardTitle = styled.h5`
  color: #c29f00;
  font-family: "Roboto Slab", serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  margin: 10px 0;
  padding: 10px;
  transition: color 0.75s ease;
`;
