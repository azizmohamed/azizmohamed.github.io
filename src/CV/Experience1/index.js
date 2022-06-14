import { Link, List, ListItem, Typography } from "@mui/material";
import LabelledBox from "../labelledBox";
import ExperienceItem from "./experienceItem";
import Project from "./project";

const Experience1 = () => {
  return (
    <LabelledBox
      label={"Professional Experience"}
      width="245mm"
      titleWidth="53mm"
      titleLeft={"173mm"}
      margin="2mm 1mm 2mm 5mm"
    >
      <ExperienceItem
        position={"Lead Consultant"}
        company={"Telstra Purple"}
        companyUrl={"https://purple.telstra.com/"}
        periodDesc="Aug 2021 - Present"
      >
        <Project
          title={"CBA-Client Services App"}
          description={
            <Typography lineHeight={"5mm"}>
              A new system to replace existing booking system used for events
              and meeting rooms management across all CBA buildings. It's used
              for catering, kitchen, meeting equipments and external visitors
              management. The main motive behind this project is to have a good
              UX in addition to creative ways to handle complex business cases
              like recurrence and rooms availability.
            </Typography>
          }
          accomplishments={[
            "Participated in deciding the technology stack and architecture.",
            "Implemented some core reusable components to be used across the web app.",
            "Implemented requester module and main printing functionality.",
            "Participated in deployment, infrastructure management and production support.",
          ]}
        ></Project>
      </ExperienceItem>
      <ExperienceItem
        position={"Principal Engineer"}
        company={"NTT Ltd."}
        companyUrl={"https://services.global.ntt/"}
        periodDesc="Feb 2021 - Aug 2021"
      >
        <Project
          title="Automation Platform"
          description={
            <Typography lineHeight={"5mm"}>
              The core component of Automation Platform is{" "}
              <Link href="https://www.ansible.com/products/awx-project/faq">
                AWX
              </Link>
              . The target of the project is to promote AWX among in the
              organization. This target required implementing some integrations
              around the platform and defining a set of procedures for using the
              platform.
            </Typography>
          }
          accomplishments={[
            "Standardized the integration procedures of automation platform.",
            "Led the off-shore dev team in India to implement 2 integration end points for Automation Platform.",
            "Implemented and documented the automation platform onboarding framework and operational framework.",
            "Introduced automation platform to other services departments",
            "Guided two internal departments of the company in adopting the automation platform.",
          ]}
        ></Project>
      </ExperienceItem>
      <ExperienceItem
        position={"Senior/Lead Consultant"}
        company={"Telstra Purple / Readify"}
        companyUrl={"https://purple.telstra.com/"}
        periodDesc="Jul 2017 - Feb 2021"
      >
        <Project
          title="ANU - Tuckwell Scholarship & Programs and Courses"
          description={
            <Typography lineHeight={"5mm"}>
              <Link href="https://tuckwell.anu.edu.au/">Tuckwell</Link> is a
              scholarship system for high school student applying for{" "}
              <Link href="https://www.anu.edu.au/">
                Australian National University
              </Link>
              . And{" "}
              <Link href="https://programsandcourses.anu.edu.au/">
                Programs and Courses
              </Link>{" "}
              is the programs and courses catalog website. They were created by
              Readify and was maintained by my team in Managed Services account.
            </Typography>
          }
          accomplishments={[
            "Leaded MS team to support ANU.",
            "Managed time allocation and status reporting to ANU.",
            "Implemented Tuckwell integration with ANU core registration system.",
            "Implemented Tuckwell and P&C infrastructure IaC repository.",
            "Added new features to Tuckwell and P&C systems.",
            "Created POC for modernizing P&C infrastructure.",
          ]}
        ></Project>

        
      </ExperienceItem>
      
    </LabelledBox>
  );
};

export default Experience1;
