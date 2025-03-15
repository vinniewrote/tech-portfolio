import React from "react";
// import rating_1 from "../images/rating_1.svg";
// import rating_2 from "../images/rating_2.svg";
// import rating_3 from "../images/rating_3.svg";
// import rating_4 from "../images/rating_4.svg";
// import rating_5 from "../images/rating_5.svg";
import download from "../public/images/download_icon.svg";
import DownloadIcon from "../public/images/DownloadIcon";
import { jobDetails } from "../data/resume-details";
import { consultingDetails } from "../data/resume-consulting";
import { softSkillsDetails } from "../data/resume-softskills";
import {
  ResumeGithubBlock,
  ResumeWrapper,
  ResumeButtonWrapper,
  ResumeButton,
  LeftColumn,
  RightColumn,
  PhoneContact,
  InstitutionFocus,
  ExperienceBlock,
  InstitutionName,
  InstitutionGradDate,
  EducationBlock,
  RatingGroup,
  SkillsetBlock,
  FlexHeader,
  NextHeader,
  ContactBlock,
  EmailContact,
  ResumeLink,
  CompanyName,
  JobTitle,
  JobTimeRange,
  JobDescription,
  SoftSkills,
  SoftSkillsWrapper,
  DesignSubHeader,
  DevelopmentSubHeader,
  SoftSkillsSubHeader,
  Institution,
  EducationWrapper,
  SkillsetWrapper,
  DevelopmentBlock,
  DesignBlock,
  SoftSkillsBlock,
  SummaryBlock,
  CompanySummary,
  CompanyBlock,
  CompanyLocation,
  ExperienceTitleWrapper,
  ExperienceTechBlock,
  JobExperienceWrapper,
  JobTechWrapper,
  ExperienceTitle,
  TechTitle,
  TechTitleCopy,
  ExperienceTitleCopy,
  ExperienceBlockTitles,
  ConsultingSkillsWrapper,
} from "../styling/resume_styles";

export default function Resume() {
  return (
    <ResumeGithubBlock>
      <FlexHeader>
        <h3>Resume</h3>
        <ResumeLink
          href="https://www.dropbox.com/scl/fi/1orkqmx5r22gqnfmdb8o8/efriendly-Vizente-Freeman-v11.pdf?rlkey=66bka9lp2837n5avfn5p3xvtz&dl=0"
          target="_blank"
        >
          <ResumeButton>
            <DownloadIcon />
            <span>PDF</span>
          </ResumeButton>
        </ResumeLink>
      </FlexHeader>

      <ResumeWrapper>
        <SkillsetBlock>
          <ExperienceBlockTitles>Areas of Expertise</ExperienceBlockTitles>
          <SkillsetWrapper>
            <SoftSkillsWrapper>
              {softSkillsDetails?.softSkillBucket?.length > 0 &&
                softSkillsDetails.softSkillBucket.map((softskl, i) => (
                  <SoftSkills>{softskl.softSkill}</SoftSkills>
                ))}
            </SoftSkillsWrapper>
          </SkillsetWrapper>
        </SkillsetBlock>
        <ExperienceBlock>
          <ExperienceTitle>
            <ExperienceTitleCopy>Consulting Experience</ExperienceTitleCopy>
          </ExperienceTitle>
          <ConsultingSkillsWrapper>
            {consultingDetails?.jobStops?.length > 0 &&
              consultingDetails.jobStops.map((cjob, i) => (
                <ExperienceTechBlock>
                  <JobExperienceWrapper>
                    <CompanyBlock>
                      <CompanyName>{cjob.companyName}</CompanyName>
                      <CompanyLocation>{cjob.companyLocation}</CompanyLocation>
                      <JobTitle>{cjob.jobTitle}</JobTitle>
                    </CompanyBlock>
                    {/* <CompanySummary>{job.companySummary}</CompanySummary> */}
                    <JobTimeRange>{cjob.jobTimeRange}</JobTimeRange>
                    <JobDescription>
                      {cjob.jobDescription.map((descripts, i) => (
                        <li>{descripts.jobStopBullet}</li>
                      ))}
                    </JobDescription>
                  </JobExperienceWrapper>
                  {/* <JobTechWrapper>
                  <TechTitleCopy>Technologies</TechTitleCopy>
                  <ul>
                    {job.jobTechnologies.map((techscripts, i) => (
                      <li>{techscripts.jobStopTech}</li>
                    ))}
                  </ul>
                </JobTechWrapper> */}
                </ExperienceTechBlock>
              ))}
          </ConsultingSkillsWrapper>
          <ExperienceTitleWrapper>
            <ExperienceTitle>
              <ExperienceTitleCopy>Professional Experience</ExperienceTitleCopy>
            </ExperienceTitle>
          </ExperienceTitleWrapper>
          {jobDetails?.jobStops?.length > 0 &&
            jobDetails.jobStops.map((job, i) => (
              <ExperienceTechBlock>
                <JobExperienceWrapper>
                  <CompanyBlock>
                    <CompanyName>{job.companyName}</CompanyName>
                    <CompanyLocation>{job.companyLocation}</CompanyLocation>
                    <JobTitle>{job.jobTitle}</JobTitle>
                  </CompanyBlock>
                  <CompanySummary>
                    <em>{job.companySummary}</em>
                  </CompanySummary>
                  <JobTimeRange>{job.jobTimeRange}</JobTimeRange>
                  <JobDescription>
                    {job.jobDescription.map((descripts, i) => (
                      <li>{descripts.jobStopBullet}</li>
                    ))}
                  </JobDescription>
                </JobExperienceWrapper>
                <JobTechWrapper>
                  <TechTitleCopy>Technologies</TechTitleCopy>
                  <ul>
                    {job.jobTechnologies.map((techscripts, i) => (
                      <li>{techscripts.jobStopTech}</li>
                    ))}
                  </ul>
                </JobTechWrapper>
              </ExperienceTechBlock>
            ))}
        </ExperienceBlock>

        <EducationBlock>
          <ExperienceBlockTitles>Education</ExperienceBlockTitles>
          <EducationWrapper>
            <Institution>
              <InstitutionName>
                STUART GRADUATE SCHOOL OF BUSINESS
              </InstitutionName>
              <InstitutionFocus>
                Master of Science, Marketing Communication
              </InstitutionFocus>
              {/* <InstitutionGradDate>JUNE 2006</InstitutionGradDate> */}
            </Institution>
            <Institution>
              <InstitutionName>UNIVERSITY OF ARIZONA</InstitutionName>
              <InstitutionFocus>
                Bachelor of Science, Psychology & Business Admin
              </InstitutionFocus>
              {/* <InstitutionGradDate>MAY 2002</InstitutionGradDate> */}
            </Institution>
          </EducationWrapper>
        </EducationBlock>
      </ResumeWrapper>
    </ResumeGithubBlock>
  );
}
