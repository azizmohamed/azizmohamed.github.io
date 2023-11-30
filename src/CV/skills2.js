import SkillRating from "./skillRating";
import LabelledBox from "./labelledBox";
import { Chip } from "@mui/material";
import { Box } from "@mui/system";

const Skills2 = () => {
  return (
    <LabelledBox
    label={"Skills"}
    titleWidth="13mm"
    width={"50mm"}
    margin="2mm 5mm 15mm 1mm"
    titleLeft={"32mm"}
    height={"200mm"}
    >
      <Box display={"flex"} flexDirection="row" flexWrap={"wrap"} gap="1mm">
      
      <Chip style={{ flexGrow: "1" }} label="AWS DynamoDb"></Chip>
      <Chip style={{flexGrow: "1"}} label="CI/CD"></Chip>
        <Chip style={{flexGrow: "1"}} label="Git"></Chip>
        <Chip style={{flexGrow: "1"}} label="Github Actions"></Chip>
        <Chip style={{flexGrow: "1"}} label="Terraform"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS Cognito"></Chip>
        <Chip style={{flexGrow: "1"}} label="SOLID Principles"></Chip>
        <Chip style={{flexGrow: "1"}} label="Design Patterns"></Chip>
        <Chip style={{flexGrow: "1"}} label="Unit Testing"></Chip>
        <Chip style={{flexGrow: "1"}} label="Docker"></Chip>
        <Chip style={{flexGrow: "1"}} label="Visual Studio"></Chip>
        <Chip style={{flexGrow: "1"}} label="Visual Studio Code"></Chip>
        <Chip style={{flexGrow: "1"}} label="AZURE SQL Service"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AZURE Service Bus"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AZURE AD"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AZURE VMs"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AZURE DNS"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AZURE ARM"></Chip>
        <Chip style={{flexGrow: "1"}} label="React"></Chip>
        <Chip style={{flexGrow: "1"}} label="Javascript"></Chip>
        <Chip style={{flexGrow: "1"}} label="Typescript"></Chip>
        <Chip style={{flexGrow: "1"}} label="Azure DevOps"></Chip>
        
        <Chip style={{flexGrow: "1"}} label="Mac OS"></Chip>
        <Chip style={{flexGrow: "1"}} label="Windows OS"></Chip>
        <Chip style={{flexGrow: "1"}} label="AZURE"></Chip>
        <Chip style={{flexGrow: "1"}} label="AZURE App Services"></Chip>
        <Chip style={{flexGrow: "1"}} label="AZURE Functions"></Chip>
        <Chip style={{ flexGrow: "1" }} label="Agile"></Chip>
        <Chip style={{ flexGrow: "1" }} label="DDD"></Chip>
        <Chip style={{ flexGrow: "1" }} label="Octopus Deploy"></Chip>
        <Chip style={{ flexGrow: "1" }} label="Team City"></Chip>
      </Box>
    </LabelledBox>
  );
};

export default Skills2;
