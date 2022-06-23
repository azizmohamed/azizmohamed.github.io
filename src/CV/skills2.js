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
        <Chip style={{flexGrow: "1"}} label="AZURE SQL Service"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AZURE Service Bus"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AZURE AD"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AZURE VMs"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AZURE DNS"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AZURE ARM"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS EC2"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS VPC"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS CDK"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS S3"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS Rout 53"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS ECS"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS EKS"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS Lambda"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS Cognito"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS CloudFormation"></Chip>
        <Chip style={{ flexGrow: "1" }} label="Agile"></Chip>
        <Chip style={{ flexGrow: "1" }} label="DDD"></Chip>
        <Chip style={{ flexGrow: "1" }} label="Octopus Deploy"></Chip>
        <Chip style={{ flexGrow: "1" }} label="Team City"></Chip>
      </Box>
    </LabelledBox>
  );
};

export default Skills2;
