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
      <Box display={"flex"} flexDirection="row" flexWrap={"wrap"} gap="1mm" m="0 0 -5mm 0">
        <Chip style={{flexGrow: "1"}}  label="c#"></Chip>
        <Chip style={{flexGrow: "1"}} label=".NET Framework"></Chip>
        <Chip style={{flexGrow: "1"}} label=".NET Core"></Chip>
        <Chip style={{flexGrow: "1"}} label="ASP.NET"></Chip>
        <Chip style={{flexGrow: "1"}} label="Kubernetes"></Chip>
        <Chip style={{flexGrow: "1"}} label="React"></Chip>
        <Chip style={{flexGrow: "1"}} label="Javascript"></Chip>
        <Chip style={{flexGrow: "1"}} label="Typescript"></Chip>
        <Chip style={{flexGrow: "1"}} label="Azure DevOps"></Chip>
        <Chip style={{flexGrow: "1"}} label="CI/CD"></Chip>
        <Chip style={{flexGrow: "1"}} label="Git"></Chip>
        <Chip style={{flexGrow: "1"}} label="Github Actions"></Chip>
        <Chip style={{flexGrow: "1"}} label="SOLID Principles"></Chip>
        <Chip style={{flexGrow: "1"}} label="Design Patterns"></Chip>
        <Chip style={{flexGrow: "1"}} label="Unit Testing"></Chip>
        <Chip style={{flexGrow: "1"}} label="Docker"></Chip>
        <Chip style={{flexGrow: "1"}} label="Visual Studio"></Chip>
        <Chip style={{flexGrow: "1"}} label="Visual Studio Code"></Chip>
        <Chip style={{flexGrow: "1"}} label="Mac OS"></Chip>
        <Chip style={{flexGrow: "1"}} label="Windows OS"></Chip>
        <Chip style={{flexGrow: "1"}} label="AZURE"></Chip>
        <Chip style={{flexGrow: "1"}} label="AZURE App Services"></Chip>
        <Chip style={{flexGrow: "1"}} label="AZURE Functions"></Chip>
      </Box>
    </LabelledBox>
  );
};

export default Skills1;
