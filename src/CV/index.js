import { Box } from "@mui/material";
import Headline from "./headline";
import Skills1 from "./skills1";
import Skills2 from "./skills2";
import Experience2 from "./experience2";
import AreasOfExpertise from "./areasOfExpertise";
import Certificates from "./Certificates";
import Experience1 from "./experience1";
import Experience3 from "./experience3";
import Education from "./education";

const CV = () => {
  return (
    <>
      <Box
        width="297mm"
        height={"420mm"}
        bgcolor="white"
        padding={"0 3mm 3mm 3mm"}
      >
        <Headline></Headline>

        <AreasOfExpertise></AreasOfExpertise>
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-between"}
        >
          <Experience1></Experience1>
          <Box display={"flex"} flexDirection="column">
            <Certificates></Certificates>
            <Skills1></Skills1>
          </Box>
        </Box>
      </Box>
      <Box
        width="297mm"
        height={"420mm"}
        bgcolor="white"
        padding={"8mm 3mm 3mm 3mm"}
      >
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-between"}
        >
          <Experience2></Experience2>
          <Skills2></Skills2>
        </Box>
        <Education></Education>
      </Box>
    </>
  );
};
export default CV;
