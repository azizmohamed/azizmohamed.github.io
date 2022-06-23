import { Box, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

const Email = () => (
  <Box display={"flex"} flexDirection="row" alignItems={"center"} gap="2mm">
    <EmailIcon></EmailIcon>
    <Link
      href="mailto:aziz@azizmohamed.com"
      color={"inherit"}
      fontSize={"20px"}
      fontWeight="bold"
    >
      aziz@azizmohamed.com
    </Link>
  </Box>
);

const LinkedIn = () => (
  <Box display={"flex"} flexDirection="row" alignItems={"center"} gap="2mm">
    <LinkedInIcon></LinkedInIcon>
    <Link
      href="https://www.linkedin.com/in/abdelazizyoussef/"
      color={"inherit"}
      fontSize={"20px"}
    >
      LinkedIn
    </Link>
  </Box>
);

const ContactPhone = () => (
  <Box display={"flex"} flexDirection="row" alignItems={"center"} gap="2mm">
    <ContactPhoneIcon></ContactPhoneIcon>
    <Link href="tel:+61410592487" color={"inherit"} fontSize={"20px"}>
      +61410592487
    </Link>
  </Box>
);

const GitHub = () => (
  <Box display={"flex"} flexDirection="row" alignItems={"center"} gap="2mm">
    <GitHubIcon></GitHubIcon>
    <Link
      href="https://github.com/azizmohamed/"
      color={"inherit"}
      fontSize={"20px"}
    >
      Github
    </Link>
  </Box>
);

const Website = () => (
  <Box display={"flex"} flexDirection="row" alignItems={"center"} gap="2mm">
    <PublicIcon></PublicIcon>
    <Link href="https://azizmohamed.com/" color={"inherit"} fontSize={"20px"}>
      azizmohamed.com/
    </Link>
  </Box>
);

const Headline = () => {
  return (
    <Box>
      <Box
        bgcolor="#048BC2"
        p="5mm 5mm 5mm 10mm"
        color={"white"}
        m="0 -3mm 0 -3mm"
      >
        <Typography fontWeight={"bold"} fontSize="45px">
          Abdelaziz Mohamed
        </Typography>
        <Typography fontWeight={"bold"} fontSize="25px">
          Tech Lead / Consultant / Solution Architect
        </Typography>
        <Box m="5mm 0 1mm 0" display={"flex"} flexDirection="row" gap={"10mm"}>
          <Email></Email>
          <LinkedIn></LinkedIn>
          <ContactPhone></ContactPhone>
          <Website></Website>
          <GitHub></GitHub>
        </Box>
      </Box>
      <Typography
        fontSize={"18px"}
        textAlign="justify"
        lineHeight={"6mm"}
        m="3mm 5mm 5mm 5mm"
        padding={"2mm 5mm 2mm 5mm"}
        border={"solid 1px #d3d3d3"}
      >
        Fifteen years of experience working in software engineering, five years
        as a consultant in Australia. Successfully delivered many solutions
        employing my experience in App Development using various technologies
        and tools, Cloud Infrastructure using both AWS and Azure and Devops
        technologies. I am passionate about AWS and occasionally share my
        knowledge in AWS by talks and blog post in my personal blog.
      </Typography>
    </Box>
  );
};

export default Headline;
