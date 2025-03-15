import styled from "styled-components";

export const HighlightButton = styled.button`
  border: 2px solid #c29f00;
  border-radius: 8px;
  background-color: transparent;
  color: #c29f00;
  padding: 10px;
  font-family: "Inconsolata", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  font-variant: small-caps;
  cursor: pointer;
  width: 160px;
  margin: 0;
  transition: all 0.75s ease;

  &:hover {
    color: #5e0b86;
    border: 2px solid #5e0b86;
  }

  &:active {
    color: #3a0951;
    border: 2px solid #3a0951;
    transition: all 0.75s ease;
  }

  &:disabled {
    color: rgba(194, 159, 0, 0.3);
    border: 2px solid #5e0b86;
    transition: all 0.75s ease;
  }
`;
