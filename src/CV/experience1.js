import { Link, Box, ListItem, Typography } from "@mui/material";
import LabelledBox from "./labelledBox";
import ExperienceItem from "./Shared/experienceItem";
import Project from "./Shared/project";

const Experience1 = () => {
  return (
    <LabelledBox
      label={"Professional Experience"}
      width="245mm"
      titleWidth="52mm"
      titleLeft={"170mm"}
      height="288mm"
      margin="2mm 1mm 1mm 5mm"
    >
      <Box mb="-10">
        <ExperienceItem
          position={"Senior Engineer"}
          company={"CMC Markets"}
          companyUrl={"https://www.cmcmarkets.com/"}
          periodDesc="Jan 2023 - Present"
        >
          <Project
            description={
              <Typography
                lineHeight={"5mm"}
                fontSize="15px"
                textAlign={"justify"}
                m="1mm"
              >
                Played a key role in the modernization and migration of the market pricing data module to microservices architecture and event-driven design. Actively utilized AWS services, .NET framework, and IaaS solutions, with a focus on effective management through CDK. Contributed to the corporate migration strategy, enhancing market pricing data processing efficiency and reducing latency. Resulted in improved overall system performance and scalability, showcasing expertise in event-driven architecture.
                </Typography>
            }
            accomplishments={[
              "Built the infrastructure of multiple services using CDK and Terraform.",
              "Built the development environment through the implementation of GitHub Actions and various AWS services.",
              "Implemented market pricing services using .NET Core, various AWS services, and ASP.NET Core."
            ]}
          ></Project>
        </ExperienceItem>
        <ExperienceItem
          position={"Lead Consultant"}
          company={"Telstra Purple"}
          companyUrl={"https://purple.telstra.com/"}
          periodDesc="Aug 2021 - Dec 2022"
        >
          <Project
            title={"CBA-Client Services App"}
            description={
              <Typography
                lineHeight={"5mm"}
                fontSize="15px"
                textAlign={"justify"}
                m="1mm"
              >
                As a key contributor, I played a vital role in developing an innovative booking system for events and meeting rooms, transforming scheduling across CBA buildings. Integrated creative solutions for complex scenarios, ensuring real-time room availability. The system, which includes React for a dynamic front-end, enhances operational efficiency and elevates service delivery standards, fostering a culture of innovation and excellence.
                </Typography>
            }
            accomplishments={[
              "Built infrastructure and continuous integration/continuous delivery (CI/CD) pipelines using Terraform.",
              "Developed and implemented front-end modules using React and back-end modules using ASP.NET Core."
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
              <Typography
                lineHeight={"5mm"}
                fontSize="15px"
                m="1mm"
                textAlign={"justify"}
              >

                As a central figure in the Automation Platform, anchored by <Link href="https://www.ansible.com/products/awx-project/faq">
                  AWX
                </Link>, I championed its widespread adoption across the organization. Leading the charge, I orchestrated the integration of key components, emphasizing Kubernetes as the container orchestrator. This initiative streamlined procedures, fostering a culture of automation, innovation, and heightened productivity organization-wide.

              </Typography>
            }
            accomplishments={[
              "Standardized the integration procedures of the automation platform.",
              "Led the offshore development team in India to implement 2 integration endpoints for the Automation Platform.",
              "Implemented and documented the automation platform's onboarding framework and operational framework.",
              "Introduced the automation platform to other service departments.",
              "Guided two internal departments of the company in adopting the automation platform."
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
              <Typography
                lineHeight={"5mm"}
                fontSize="15px"
                m="1mm"
                textAlign={"justify"}
              >
                As an integral part of the Managed Services account, our team at Readify undertook the development and ongoing maintenance of <Link href="https://tuckwell.anu.edu.au/">Tuckwell</Link>, a prestigious scholarship system catering to high school students applying for the esteemed <Link href="https://www.anu.edu.au/">
                  Australian National University
                </Link>. Additionally, we were entrusted with the creation and management of <Link href="https://programsandcourses.anu.edu.au/">
                  Programs and Courses
                </Link>, a comprehensive and dynamic catalog website that serves as a cornerstone resource for students seeking detailed information on various programs and courses offered. Our commitment to delivering top-notch solutions and ensuring the seamless operation of these critical platforms has been pivotal in empowering students and fostering academic excellence within the Australian National University community.
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
      </Box>
    </LabelledBox>
  );
};

export default Experience1;
