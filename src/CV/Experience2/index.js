import { Link, List, ListItem, Typography } from "@mui/material";
import LabelledBox from "../labelledBox";
import ExperienceItem from "./experienceItem";
import Project from "./project";

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
            <Typography lineHeight={"5mm"}>
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
            "Added new features to SCCN applications as needed."
          ]}
        ></Project>
        <Project
          title="[Managed Services] Hannover, Ministry of Health and Cancer Institute"
          description={
            <Typography lineHeight={"5mm"}>
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
          description={<Typography lineHeight={"5mm"}></Typography>}
          accomplishments={[]}
        ></Project>
      </ExperienceItem>
     <ExperienceItem
        position={"Senior Technical Consultant"}
        company={"INTDV"}
        companyUrl={"https://intdv.com/"}
        periodDesc="Apr 2016 - Jun 2017"
      ></ExperienceItem>
      <ExperienceItem
        position={"Solutions Consultant"}
        company={"OMS"}
        companyUrl={"https://www.linkedin.com/company/oms/"}
        periodDesc="Apr 2015 - Apr 2016"
      >
        <List disablePadding>
          <ListItem>Test</ListItem>
        </List>
      </ExperienceItem>
      <ExperienceItem
        position={"Senior/Lead Software Engineer"}
        company={"ITWorx"}
        companyUrl={"https://www.itworx.com/"}
        periodDesc="Apr 2011 - Mar 2015"
      ></ExperienceItem>
      <ExperienceItem
        position={"Senior Software Engineer"}
        company={"eBSEG"}
        companyUrl={"https://ebseg.com/"}
        periodDesc="Apr 2007 - Mar 2011"
      ></ExperienceItem>
    </LabelledBox>
  );
};

export default Experience2;
