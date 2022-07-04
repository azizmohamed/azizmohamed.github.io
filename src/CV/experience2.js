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
      height={"368mm"}
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
          accomplishments={[
            "Participated in architecture, design and implementation of different solutions.",
            "Consulted and guided development team members.",
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
          accomplishments={[
            "Participated in restructure and new look and feel of different solutions and enhanced its architecture, performance and development process.",
          ]}
        ></Project>
      </ExperienceItem>
      <ExperienceItem
        position={"Senior/Lead Software Engineer"}
        company={"ITWorx"}
        companyUrl={"https://www.itworx.com/"}
        periodDesc="Apr 2011 - Mar 2015"
      >
        <Project
          title="Syngenta"
          accomplishments={[
            "Supported Syngenta for 4 years included development, design and support for various products.",
          ]}
        ></Project>
        {/* <Project
          title="Syngenta DEX (Digital Excellence) - Envision"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              POC for applying weather and environmental data and history of
              crop yield with maps to serve crop production users to identify
              best conditions for breeding.
            </Typography>
          }
        ></Project>
        <Project
          title="Syngenta Monitoring Service"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              Monitoring service is a system that automates the monitoring of
              different components of system. Monitoring service can take
              automated recovery action or send notification to responsible
              person as configured.
            </Typography>
          }
        ></Project>
        <Project
          title="Syngenta Phoenix Integration Project"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              Project includes provision of single point of storage for
              biomaterial data, migration of existing data to new table
              structure, and provision of any additional functionality needed in
              the inventory to support the use of biomaterial data.
            </Typography>
          }
        ></Project>
        <Project
          title="Syngenta Fix Compound Order (FCO)"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              Project Overview: Streamline, simplify, and standardize the
              logistics processes to be independent of the store and site and to
              provide a seamless and traceable process for the ordering of
              compounds for Discovery, Early Lead Finding, and Optimization
              screening.
            </Typography>
          }
        ></Project> */}
      </ExperienceItem>
      <ExperienceItem
        position={"Senior Software Engineer"}
        company={"eBSEG"}
        companyUrl={"https://ebseg.com/"}
        periodDesc="Apr 2007 - Mar 2011"
      >
        <Project
        title="AlRajhi eBank"
          accomplishments={[
            "Implemented SMS, Web and mobile system for banking and brokerage products of AlRajhi eBank.",
            "Participated in different delivery, analysis and onboarding activities on-site"
          ]}
        ></Project>
      </ExperienceItem>
    </LabelledBox>
  );
};

export default Experience2;
