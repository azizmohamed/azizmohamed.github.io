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
      margin="5.5mm 5mm 5mm 1mm"
      titleLeft={"32mm"}
    >
      <Box display={"flex"} flexDirection="row" flexWrap={"wrap"} gap="1mm" m="0 0 -5mm 0">
        <Chip style={{flexGrow: "1"}}  label="c#"></Chip>
        <Chip style={{flexGrow: "1"}} label=".NET Framework"></Chip>
        <Chip style={{flexGrow: "1"}} label=".NET Core"></Chip>
        <Chip style={{ flexGrow: "1" }} label="Microservices"></Chip>
        <Chip style={{flexGrow: "1"}} label="ASP.NET"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS"></Chip>
        <Chip style={{ flexGrow: "1" }} label="Event-Driven"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS EC2"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS VPC"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS CDK"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS S3"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS Rout 53"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS ECS"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS Lambda"></Chip>
        <Chip style={{ flexGrow: "1" }} label="AWS CloudFormation"></Chip>
        
        
      </Box>
    </LabelledBox>
  );
};

export default Skills1;
