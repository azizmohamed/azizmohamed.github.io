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
      height={"375mm"}
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
              lineHeight={"5mm"}
              fontSize="14px"
              m="1mm"
              textAlign={"justify"}
            >
              Within the operational purview of Telstra Purple, our dedicated team spearheaded the development and ongoing maintenance of a comprehensive Content Management System (CMS) and an efficient Job Administration System for the renowned <Link href="https://www.southerncrosscables.com/">
                Southern Cross Cable Network
              </Link>, a prominent network service provider. Alongside the critical management of the public website, our mandate extended to orchestrating the seamless migration of these pivotal systems from an on-premise environment to the dynamic and scalable Azure platform. In addition to ensuring a smooth transition, our team implemented a suite of innovative features, with a particular focus on enhancing document management capabilities, thereby reinforcing Southern Cross Cable Network's position as a leading industry player committed to delivering seamless, cutting-edge solutions for its clientele.
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
              lineHeight={"5mm"}
              fontSize="14px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              As an App Dev specialist within the Managed Services division of Telstra Purple, my primary responsibility involved cultivating long-term partnerships with our esteemed clientele. Guided by our contractual agreements, we not only provided comprehensive system maintenance but also seamlessly implemented essential features, thereby reinforcing our commitment to delivering tailored solutions throughout the duration of our managed service contracts.
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
              lineHeight={"5mm"}
              fontSize="14px"
              textAlign={"justify"}
              m="0 1mm 0 1mm"
            >
              I seamlessly introduced a Superannuation application module into the ING Bank mobile app, leveraging existing web components to ensure a consistent user experience across both Android and iOS platforms, reinforcing the bank's commitment to customer-centric digital solutions.
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
        title={"Envision"}
        description={<Typography
          lineHeight={"5mm"}
          fontSize="14px"
          textAlign={"justify"}
          m="0 1mm 0 1mm"
        >Leveraging AWS infrastructure and the .NET framework, "Envision" was meticulously designed as a comprehensive hotel booking system tailored for corporate internal employees. The system's streamlined and efficient booking processes were aimed at enhancing the overall experience for internal users, ensuring seamless operations and data security throughout the booking process.</Typography>}
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
        title={"BuzzDigger"}
        description={<Typography
          lineHeight={"5mm"}
          fontSize="14px"
          textAlign={"justify"}
          m="0 1mm 0 1mm"
        >
          Employed advanced machine learning techniques and cloud technologies to develop a powerful sentiment analysis system catering to the needs of major corporations in the Middle East, providing crucial market insights and trend analysis for informed decision-making processes.
        </Typography>}
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
          description={<Typography
            lineHeight={"5mm"}
            fontSize="14px"
            textAlign={"justify"}
            m="0 1mm 0 1mm"
          >
            Utilized Microsoft technologies, including .NET and MVC, to provide comprehensive software support for Syngenta, ensuring the seamless operation and optimized performance of critical software systems.
            </Typography>}
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
