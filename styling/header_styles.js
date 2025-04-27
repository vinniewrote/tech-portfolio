import styled from "styled-components";

// mobile first transitioned
export const MastHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: white;
  margin: 1rem auto;
  width: 90%;
  max-width: 1280px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

// mobile first transitioned
export const MastHeadGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;

  & a img.lionLogo {
    height: auto;
    width: 65px;
    margin: 0 auto 10px;
    transition: fill 0.75s ease-in-out;
  }
  /* & svg:hover {
    cursor: pointer;
    fill: #3a0951;
  } */

  @media screen and (min-width: 768px) {
    padding: 10px 0 0 0;
    & .lionLogo {
      width: 90px;
      margin: 0 auto;
    }
  }
`;

export const MainImageWrapper = styled.div`
  width: 65px;
  height: auto;
  margin: 0 auto;
`;
