import { Link, List, ListItem, Typography } from "@mui/material";
import LabelledBox from "./labelledBox";
import ExperienceItem from "./Shared/experienceItem";
import Project from "./Shared/project";

const Experience3 = () => {
  return (
    <LabelledBox
      label={"Professional Experience"}
      width="285mm"
      titleWidth="53mm"
      titleLeft={"230mm"}
      margin="2mm 1mm 5mm 5mm"
    >
     
     
      <ExperienceItem
        position={"Senior/Lead Software Engineer"}
        company={"ITWorx"}
        companyUrl={"https://www.itworx.com/"}
        periodDesc="Apr 2011 - Mar 2015"
      >
        <Project
          title="Syngenta DEX (Digital Excellence) - Field Selection"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              It is a tool for selection the best suitable field for seeds
              production with filtration tools using historical indices data of
              fields with integration with arcgis server using arcgis javascript
              api.
            </Typography>
          }
        ></Project>
        <Project
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
        ></Project>
      </ExperienceItem>
      <ExperienceItem
        position={"Senior Software Engineer"}
        company={"eBSEG"}
        companyUrl={"https://ebseg.com/"}
        periodDesc="Apr 2007 - Mar 2011"
      >
        <Project
          title="AlRajhi eBank iPhone and eBank iPad Applications"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              It is an application that gives the ability for customers to make
              Banking transactions and Inquiries via their iPhone and iPad
              devices.
            </Typography>
          }
        ></Project>
        <Project
          title="General Product, eBSEG Middleware - eBSEG"
          description={
            <Typography
              lineHeight={"6mm"}
              fontSize="20px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              EBSEG Middleware programs provide messaging services so that
              different applications can communicate. AlRajhi Bank eBSEG eSahm
              Brokerage and Trading via SMS, Java Mobile Applications - eBSEG
              The eBSEG eSahm Solution is the first SMS, Java Mobile
              Applications Stock Trading system to be implemented in the Middle
              East. Where it gives the ability for customers and traders to make
              trading transactions via SMS and Mobile Applications.
            </Typography>
          }
        ></Project>
      </ExperienceItem>
    </LabelledBox>
  );
};

export default Experience3;
