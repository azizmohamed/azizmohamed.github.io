import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import AreaOfExpertise from "./areaOfExpertise";
import LabelledBox from "./labelledBox";
const AreasOfExpertise = () => {
  return (
    <LabelledBox
      label={"Areas Of Expertise"}
      margin="1mm 2mm 1mm 2mm"
      titleLeft={"240mm"}
      titleWidth="40mm"
    >
      <Box
        display={"flex"}
        flexDirection="row"
        flexWrap={"wrap"}
        justifyContent="start"
        gap="2mm"
      >
        <AreaOfExpertise width="55mm" title="App Development">
          <Typography fontSize={"14px"}>
            Developed end to end solutions for about 15 years using dotnet and
            other technologies when needed.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise width="65mm" title="Cloud Infrastructure">
          <Typography fontSize={"14px"}>
            Worked in both AWS and Azure using IaC tools in both providers like
            ARM in AZURE and CDK and CloudFormation in AWS.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise width="40mm" title="Agile">
          <Typography fontSize={"14px"}>
            I have been using Agile almost all of my career and love to help
            customers understand and apply Agile the way match their teams and
            culture.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise width="40mm" title="Consultation">
          <Typography fontSize={"14px"}>
            With good communication and leadership skills I have been able to
            help customers in Australia for about 5 years in my current company.
            My customers were in different sectors and their projects were in
            different scales form medium to large.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise width="70mm" title="Event-Driven Architecture">
          <Typography fontSize={"14px"}>
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise width="79mm" title="App Modernization / Migration">
          <Typography fontSize={"14px"}>
            Migrated applications from On-Premise to PAAS, containerized some
            applications and moved other applications to serverless. Also,
            participated in helping customer understand and adapt DDD.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise width="80mm" title="Microservices Architecture">
          <Typography fontSize={"14px"}>
            I am certified as Solution Architect Associate in AWS and worked in
            adding the architecture of various applications. Used both
            containerization and serverless technologies to apply Microservices
            pattern when needed.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise width="60mm" title="Devops - CI/CD">
          <Typography fontSize={"14px"}>
            Devops comes naturally when you apply proper Agile. I have
            experience in using Azure Devops, Octopus Deploy, Team City and
            Github Action. I am expert at the concept of DevOps and capable of
            applying it with any set of tools.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise width="55mm" title="Leadership">
          <Typography fontSize={"14px"}>
            I have worked across different teams and different positions with
            various team sizes and gained a good level of leadership skills
            during my career. I did also worked as a team lead or tech lead for
            some projects with successful delivery and customer satisfaction.
          </Typography>
        </AreaOfExpertise>
      </Box>
    </LabelledBox>
  );
};

export default AreasOfExpertise;
