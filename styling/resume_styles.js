import styled from "styled-components";

export const ResumeGithubBlock = styled.div`
  color: #ffffff;
  padding: 30px 20px;
  border: 5px solid;
  border-image: linear-gradient(-45deg, #5e0b86, #c29f00) 1;
  margin: 10px auto;

  @media screen and (max-width: 768px) {
    /* width: 85%; */
    /* flex-direction: column-reverse; */
  }

  @media screen and (max-width: 1200px) {
    margin: 10px 0;
  }
`;

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    /* flex-direction: column-reverse; */
    row-gap: 20px;
  }
`;
export const CompanyBlock = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 7px;
`;

export const SummaryBlock = styled.div`
  & h4 {
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #c29f00;
    margin: 0;
  }
  & p {
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    font-size: 1em; //16px
    line-height: 1.5em;
  }
  display: flex;
  flex-direction: column;
`;
export const CompanySummary = styled.h5`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-weight: 100;
  line-height: 1.5em;
  /* font-style: italic; */
  padding: 0;
  margin: 0;
`;

export const Institution = styled.div`
  margin: 0 0 10px 0;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 0;

  @media screen and (max-width: 1200px) {
    /* flex-direction: row-reverse;
    justify-content: space-between; */
  }

  @media screen and (max-width: 620px) {
    /* flex-direction: column; */
  }
`;

export const ResumeButtonWrapper = styled.div`
  display: flex;
`;

export const ResumeLink = styled.a`
  text-decoration: none;
`;

export const ResumeButton = styled.button`
  border: 2px solid #c29f00;
  border-radius: 6px;
  background-color: transparent;
  color: #c29f00;
  padding: 5px 10px;
  font-family: "Inconsolata", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  text-transform: uppercase;
  display: flex;
  column-gap: 10px;
  transition: background-color 0.95s ease-in-out;
  /* flex-direction: row; */
  & svg {
    width: 20px;
    height: auto;
    fill: #c29f00;
    transition: fill 0.95s ease-in-out;
  }

  & span {
    color: #c29f00;
    transition: color 0.95s ease-in-out;
  }
  &:hover {
    border: 2px solid #af51de; //5e0b86
    cursor: pointer;
    color: #af51de; //5e0b86
    background-color: #c29f00;
    & span {
      color: #af51de; //5e0b86
    }
    & svg {
      fill: #af51de; //5e0b86
    }
  }
`;

export const ContactBlock = styled.p`
  font-family: "Roboto Slab", serif;
  font-size: 1em;
  margin-bottom: 0;
`;

export const EmailContact = styled.p`
  font-size: 1em;
`;

export const PhoneContact = styled.p`
  margin-top: 5px;
  text-align: left;
`;

export const LeftColumn = styled.div`
  width: 62.2%; /* 780px */
  text-align: left;

  & h4 {
    font-family: "Roboto Slab", serif;
    font-size: 1.25em;
    line-height: 1.5em;
    text-transform: uppercase;
  }

  & p {
    font-family: "Roboto Slab", serif;
    font-weight: 400;
    font-size: 1em;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const RightColumn = styled.div`
  text-align: left;
  width: 31.8%; /* 400px */

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ExperienceBlock = styled.div``;
export const ExperienceBlockTitles = styled.h4`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 1.125em;
  line-height: 1.25em;
  text-transform: uppercase;
  color: #c29f00;
  margin: 0;
`;

export const ExperienceTitleWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 30px;
`;
export const ExperienceTitle = styled.div`
  width: 80%;
  @media screen and (min-width: 768px) {
    /* width: 75%; */
  }
  @media screen and (max-width: 428px) {
    /* width: 65%; */
  }
`;

export const ExperienceTitleCopy = styled.h4`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  line-height: 1.5em;
  font-size: 1.125em; //18px
  text-transform: uppercase;
  color: #c29f00;
  margin: 0;

  @media screen and (max-width: 500px) {
    text-overflow: ellipsis;
  }
`;

export const TechTitle = styled.div`
  width: 20%;
  @media screen and (max-width: 810px) {
    width: 25%;
  }
  @media screen and (max-width: 428px) {
    width: 35%;
  }
`;

export const TechTitleCopy = styled.h5`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  line-height: 1.125em; //18px
  text-transform: uppercase;
  color: #af51de; //5e0b86
  margin: 0;

  @media screen and (max-width: 500px) {
    text-overflow: ellipsis;
    font-size: 1em; //16px
  }
`;
export const ExperienceTechBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(255, 255, 255, 0.5);
  &:last-child {
    border-bottom: none;
  }
  @media screen and (max-width: 428px) {
    /* column-gap: 10px; */
  }
`;

export const JobExperienceWrapper = styled.div`
  width: 100%;
  padding: 15px 0 0 0;

  &:last-child {
    padding: 0 0 15px 0;
  }
  &:only-child {
    padding: 15px 0;
    border-bottom: none;
  }
  @media screen and (min-width: 768px) {
    /* width: 75%; */
  }
  @media screen and (max-width: 428px) {
    /* width: 65%; */
  }
`;

export const JobTechWrapper = styled.div`
  width: 100%;
  padding: 25px 0 0 0;
  @media screen and (max-width: 768px) {
    /* width: 25%; */
  }
  @media screen and (max-width: 428px) {
    /* width: 35%; */
  }
  & ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 10px 0;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    font-size: 1em;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 0.625em; //10px
    & li {
      margin-bottom: 5px;
      &::after {
        content: ", ";
        padding: 0 0 0 0.125em; //2px
      }
      &:last-child {
        &::after {
          content: "";
        }
      }
    }
  }
`;

export const EducationBlock = styled.div`
  margin: 20px 0 0 0;
  & h4 {
    /* font-family: "Raleway", sans-serif;
    font-weight: 600;

    text-transform: uppercase;
    color: #c29f00;
    margin: 0 0 10px 0; */
  }
  & p {
    font-size: 1em;
  }
`;

export const SkillsetWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DevelopmentBlock = styled.div``;
export const DesignBlock = styled.div`
  @media screen and (max-width: 768px) {
    & h5 {
      margin: 0 0 10px 0;
    }
  }
`;
export const SoftSkillsBlock = styled.div`
  @media screen and (max-width: 768px) {
    & h5 {
      margin: 0 0 10px 0;
    }
  }
`;

export const SkillsetBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;

  & h4 {
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: #c29f00;
    font-size: 1.125em;
    line-height: 1.25em;
    margin: 0 0 20px 0;
  }
`;

export const SoftSkillsSubHeader = styled.h5`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  margin: 20px 0 10px 0;
  font-size: 1.15em;
`;

export const DevelopmentSubHeader = styled.h5`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  margin: 0 0 0 0;
  font-size: 1.15em;
`;

export const DesignSubHeader = styled.h5`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  margin: 20px 0 0 0;
  font-size: 1.15em;
`;

export const RatingGroup = styled.div`
  margin: 0.5em 0;
  & span {
    font-family: "Roboto Slab", serif;
    font-weight: 400;
    font-size: 1em;
    text-transform: uppercase;
  }
  & img {
    height: 1em;
    width: auto;
    margin-right: 10px;
  }
`;

export const InstitutionName = styled.p`
  font-family: "Roboto Slab", serif;
  font-weight: 500;
  margin: 0;
  font-size: 15px;
  line-height: 1.5em;
`;

export const InstitutionGradDate = styled.p`
  font-family: "Roboto Slab", serif;
  font-weight: 500;
  margin: 0;
  font-size: 15px;
  line-height: 1.5em;
`;

export const InstitutionFocus = styled.p`
  font-family: "Raleway", sans-serif;
  margin: 0;
  font-size: 15px;
  line-height: 1.5em;
  font-weight: 600;
  text-transform: uppercase;
`;

export const FlexHeader = styled.div`
  display: inline-flex;
  margin: 0 0 20px 0;
  width: 100%;

  & h3 {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    color: #c29f00;
    font-size: 32px;
    line-height: 38px;
    font-weight: 800;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    & h3 {
      /* padding-left: 1.25em; */
    }
  }
`;

export const NextHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 110px 20px 0;

  @media screen and (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;

export const CompanyName = styled.h5`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-weight: 900;
  line-height: 1.5em;
  font-variant: normal;
  margin: 0;
`;
export const CompanyLocation = styled.h5`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 1em;
  line-height: 1.5em;
  margin: 0;
`;

export const JobTitle = styled.h5`
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  font-size: 1em;
  line-height: 1.5em;
  font-variant: normal;
  text-transform: capitalize;
  margin: 0;
`;

export const JobTimeRange = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.5em;
  font-variant: normal;
  text-transform: capitalize;
  margin: 0;
`;

export const JobDescription = styled.ul`
  margin: 0;
  & li {
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    font-size: 1em; //16px
    line-height: 1.5em;
  }
  & li:first-child {
    margin-top: 0.5em;
  }
`;

export const SoftSkills = styled.span`
  font-family: "Inconsolata", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.125em; //18px
  line-height: 22px;
  color: #af51de; //#5e0b86
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const SoftSkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & span {
    width: 50%;
  }
`;

export const ConsultingSkillsWrapper = styled.div``;
