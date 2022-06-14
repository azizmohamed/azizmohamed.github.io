import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import AreaOfExpertise from "./areaOfExpertise";
import LabelledBox from "./labelledBox";
const AreasOfExpertise = () => {
  return (
    <LabelledBox
      label={"Areas Of Expertise"}
      margin="2mm 5mm 5mm 5mm"
      titleLeft={"240mm"}
      titleWidth="40mm"
    >
      <Box
        display={"flex"}
        flexDirection="row"
        flexWrap={"wrap"}
        justifyContent="center"
        gap="3mm"
      >
        <AreaOfExpertise title="App Development">
          <Typography fontSize={"14px"}>
            Developed end to end solutions for about 15 years using dotnet and
            other technologies when needed.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise title="Cloud Infrastructure">
          <Typography fontSize={"14px"}>
            Worked in both AWS and Azure using IaC tools in both providers like
            ARM in AZURE and CDK and CloudFormation in AWS.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise title="Agile">
          <Typography fontSize={"14px"}>
            I have been using Agile almost all of my career and love to help
            customers understand and apply Agile the way match their teams and
            culture.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise title="Consultation">
          <Typography fontSize={"14px"}>
            With good communication and leadership skills I have been able to
            help customers in Australia for about 5 years in my current company.
            My customers were in different sectors and their projects were in
            different scales form medium to large.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise title="Managed Services">
          <Typography fontSize={"14px"}>
            In addition to Consultation experience, Managed Services come with a
            different culture. Sustainability of applications and response to
            production problems are two main factors in successful managed
            services project.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise title="App Modernization / Migration">
          <Typography fontSize={"14px"}>
            Migrated applications from On-Premise to PAAS, containerized some
            applications and moved other applications to serverless. Also,
            participated in helping customer understand and adapt DDD.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise title="Architecture / Microservices">
          <Typography fontSize={"14px"}>
            I am certified as Solution Architect Associate in AWS and worked in
            adding the architecture of various applications. Used both
            containerization and serverless technologies to apply Microservices
            pattern when needed.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise title="Devops">
          <Typography fontSize={"14px"}>
            Devops comes naturally when you apply proper Agile. I have
            experience in using Azure Devops, Octopus Deploy, Team City and
            Github Action. I am expert at the concept of DevOps and capable of
            applying it with any set of tools.
          </Typography>
        </AreaOfExpertise>
        <AreaOfExpertise title="Leadership">
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
