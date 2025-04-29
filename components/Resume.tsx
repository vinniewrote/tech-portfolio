import React from "react";
import { jobDetails } from "../data/resume-details";
import { consultingDetails } from "../data/resume-consulting";
import { softSkillsDetails } from "../data/resume-softskills";
import {
  ResumeGithubBlock,
  ResumeWrapper,
  InstitutionFocus,
  ExperienceBlock,
  InstitutionName,
  EducationBlock,
  SkillsetBlock,
  FlexHeader,
  ResumeLink,
  CompanyName,
  JobTitle,
  JobTimeRange,
  // JobDescription,
  SoftSkills,
  SoftSkillsWrapper,
  Institution,
  EducationWrapper,
  SkillsetWrapper,
  CompanySummary,
  CompanyBlock,
  CompanyLocation,
  ExperienceTitleWrapper,
  ExperienceTechBlock,
  JobExperienceWrapper,
  JobTechWrapper,
  ExperienceTitle,
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
        ></ResumeLink>
      </FlexHeader>

      <ResumeWrapper>
        <SkillsetBlock>
          <ExperienceBlockTitles>Areas of Expertise</ExperienceBlockTitles>
          <SkillsetWrapper>
            <SoftSkillsWrapper>
              {softSkillsDetails?.softSkillBucket?.length > 0 &&
                softSkillsDetails.softSkillBucket.map((softskl, i) => (
                  <SoftSkills key={i}>{softskl.softSkill}</SoftSkills>
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
              consultingDetails.jobStops.map((cjob, j) => (
                <ExperienceTechBlock key={j}>
                  <JobExperienceWrapper>
                    <JobTitle>{cjob.jobTitle}</JobTitle>
                    <CompanyBlock>
                      <CompanyName>{cjob.companyName}&nbsp;&nbsp;|</CompanyName>
                      <JobTimeRange>
                        {cjob.jobTimeRange}&nbsp;&nbsp;|
                      </JobTimeRange>
                      <CompanyLocation>{cjob.companyLocation}</CompanyLocation>
                    </CompanyBlock>

                    {/* <JobDescription>
                      {cjob.jobDescription.map((descripts, k) => (
                        <li key={k}>{descripts.jobStopBullet}</li>
                      ))}
                    </JobDescription> */}
                  </JobExperienceWrapper>
                </ExperienceTechBlock>
              ))}
          </ConsultingSkillsWrapper>
          <ExperienceTitleWrapper>
            <ExperienceTitle>
              <ExperienceTitleCopy>Professional Experience</ExperienceTitleCopy>
            </ExperienceTitle>
          </ExperienceTitleWrapper>
          {jobDetails?.jobStops?.length > 0 &&
            jobDetails.jobStops.map((job, m) => (
              <ExperienceTechBlock key={m}>
                <JobExperienceWrapper>
                  <JobTitle>{job.jobTitle}</JobTitle>
                  <CompanyBlock>
                    <CompanyName>{job.companyName}&nbsp;|</CompanyName>
                    <JobTimeRange>{job.jobTimeRange}&nbsp;|</JobTimeRange>
                    <CompanyLocation>{job.companyLocation}</CompanyLocation>
                  </CompanyBlock>
                  <CompanySummary>{job.companySummary}</CompanySummary>
                  {/* <JobDescription>
                    {job.jobDescription.map((descripts, q) => (
                      <li key={q}>{descripts.jobStopBullet}</li>
                    ))}
                  </JobDescription> */}
                </JobExperienceWrapper>
                <JobTechWrapper>
                  <TechTitleCopy>Technologies</TechTitleCopy>
                  <ul>
                    {job.jobTechnologies.map((techscripts, p) => (
                      <li key={p}>{techscripts.jobStopTech}</li>
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
