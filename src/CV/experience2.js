import { Link, List, ListItem, Typography } from "@mui/material";
import LabelledBox from "./labelledBox";
import ExperienceItem from "./Shared/experienceItem";
import Project from "./Shared/project";

const Experience2 = () => {
  return (
    <LabelledBox
      label={"Professional Experience"}
      width="245mm"
      titleWidth="53mm"
      titleLeft={"173mm"}
      margin="2mm 1mm 2mm 5mm"
    >
      <ExperienceItem
        position={"Senior/Lead Consultant"}
        company={"Telstra Purple / Readify"}
        companyUrl={"https://purple.telstra.com/"}
        periodDesc="Jul 2017 - Feb 2021"
      >
        <Project
          title="Southern Cross Cable Network"
          description={
            <Typography
              lineHeight={"5.5mm"}
              fontSize="18px"
              m="0 1mm 0 1mm"
              textAlign={"justify"}
            >
              <Link href="https://www.southerncrosscables.com/">
                Southern Cross Cable Network
              </Link>{" "}
              is a network provider that needed a CMS and a job admin system.
              Both systems in addition to the public website were maintained by
              Telstra Purple. This system needed to be migrated from on-premise
              environment to Azure in addition to some new feature in document
              management.
            </Typography>
          }
          accomplishments={[
            "Leaded MS team to support ANU.",
            "Managed time allocation and status reporting to SCCN.",
            "Migrated SCCN admin, CMS, and public website from on-premise to Azure App Services.",
            "Added new features to SCCN applications as needed.",
          ]}
        ></Project>

        <Project
          title="[Managed Services] Hannover, Ministry of Health and Cancer Institute"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              App Dev - Managed Services clients of Telstra Purple usually made
              contract with us to maintain their systems as long as implement
              needed features during time of MC contract.
            </Typography>
          }
          accomplishments={[
            "Supported MS clients in keeping their systems stable and highly available.",
            "Implemented IaC for critical components of supported systems.",
            "Implemented module enhancements and bug fixes for clients when needed.",
            "Maintained a good relationship with clients.",
          ]}
        ></Project>
        <Project
          title="ING Mobile App - Superannuation"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              A new module to be added to ING Bank mobile application for
              Superannuation applications. The purpose of this project to
              implement the new module as a web page using same component of
              existing banking web app and hosting it in the native application.
              Customers must get same UX in new module as in existing native app
              on both Android and IOs.
            </Typography>
          }
          accomplishments={[
            "Implemented the new Superannuation module.",
            "Helped mobile and web team in setting some standards around hosting web component in native app with same UX.",
            "Maintained a good relationship with client and received a good feedback.",
          ]}
        ></Project>
      </ExperienceItem>
      <ExperienceItem
        position={"Senior Technical Consultant"}
        company={"INTDV"}
        companyUrl={"https://intdv.com/"}
        periodDesc="Apr 2016 - Jun 2017"
      >
        <Project
          title="Inspire"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              Inspire is a full tourism application including hotel and flight
              reservation, car rental and activities management. Product is in
              very initial phase choosing technologies, architecture, design of
              different components, POCs for different concepts and tools and
              initial implementation of product.
            </Typography>
          }
          accomplishments={[
            "Participated in architecture, design and implementation of different solutions.",
            "Compared and selected different development and dev-ops tools.",
            "Consulted and guided development team members.",
            "Initiated the security framework and implemented the authentication module using AWS Cognito",
          ]}
        ></Project>
      </ExperienceItem>
      <ExperienceItem
        position={"Solutions Consultant"}
        company={"OMS"}
        companyUrl={"https://www.linkedin.com/company/oms/"}
        periodDesc="Apr 2015 - Apr 2016"
      >
        <Project
          title="Buzz Digger"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              <Link href="http://buzzdiggr.com/">Buzz Digger</Link> is a
              sentiment analysis product that employs machine learning and NLP
              to analyze twitter feeds related to queries defined by user. It
              offers different types of reports and charts to users to display
              sentiment analyses results. I have worked in the implementation
              and architecture of the application.
            </Typography>
          }
          accomplishments={[
            "Participated in restructure and new look and feel of BuzzDigger and enhanced its architecture, performance and development process.",
          ]}
        ></Project>
      </ExperienceItem>
    </LabelledBox>
  );
};

export default Experience2;
