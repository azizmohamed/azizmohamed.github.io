import SkillRating from "./skillRating";
import LabelledBox from "./labelledBox";
import { Chip } from "@mui/material";
import { Box } from "@mui/system";

const Skills1 = () => {
  return (
    <LabelledBox
      label={"Skills"}
      titleWidth="13mm"
      width={"50mm"}
      margin="2mm 5mm 5mm 1mm"
      titleLeft={"32mm"}
    >
      <Box display={"flex"} flexDirection="row" flexWrap={"wrap"} gap="1mm">
        <Chip label="c#"></Chip>
        <Chip label=".NET Framework"></Chip>
        <Chip label=".NET Core"></Chip>
        <Chip label="ASP.NET"></Chip>
        <Chip label="Kubernetes"></Chip>
        <Chip label="React"></Chip>
        <Chip label="Javascript"></Chip>
        <Chip label="Typescript"></Chip>
        <Chip label="Azure DevOps"></Chip>
        <Chip label="CI/CD"></Chip>
        <Chip label="Git"></Chip>
        <Chip label="Github Actions"></Chip>
        <Chip label="SOLID Principles"></Chip>
        <Chip label="Design Patterns"></Chip>
        <Chip label="Unit Testing"></Chip>
        <Chip label="Docker"></Chip>
        <Chip label="Visual Studio"></Chip>
        <Chip label="Visual Studio Code"></Chip>
        <Chip label="Mac OS"></Chip>
        <Chip label="Windows OS"></Chip>
        <Chip label="AZURE"></Chip>
        <Chip label="AZURE App Services"></Chip>
        <Chip label="AZURE Functions"></Chip>
        <Chip label="AZURE SQL Service"></Chip>
        <Chip label="AZURE Service Bus"></Chip>
        <Chip label="AZURE AD"></Chip>
        <Chip label="AZURE VMs"></Chip>
        <Chip label="AZURE DNS"></Chip>
        <Chip label="AZURE ARM"></Chip>
        <Chip label="AWS"></Chip>
        <Chip label="AWS EC2"></Chip>
        <Chip label="AWS VPC"></Chip>
        <Chip label="AWS CDK"></Chip>
        <Chip label="AWS S3"></Chip>
      </Box>
    </LabelledBox>
  );
};

export default Skills1;
