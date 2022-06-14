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
      margin="2mm 5mm 5mm 1mm"
      titleLeft={"32mm"}
    >
      <Box display={"flex"} flexDirection="row" flexWrap={"wrap"} gap="1mm">
        <Chip label="AWS Rout 53"></Chip>
        <Chip label="AWS ECS"></Chip>
        <Chip label="AWS EKS"></Chip>
        <Chip label="AWS Lambda"></Chip>
        <Chip label="AWS Cognito"></Chip>
        <Chip label="AWS CloudFormation"></Chip>
        <Chip label="Agile"></Chip>
        <Chip label="DDD"></Chip>
        <Chip label="Octopus Deploy"></Chip>
        <Chip label="Team City"></Chip>
      </Box>
    </LabelledBox>
  );
};

export default Skills2;
