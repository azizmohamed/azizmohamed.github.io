import { Box } from "@mui/material";
import Headline from "./headline";
import Highlights from "./highlights";
import Skills1 from "./skills1";
import Skills2 from "./skills2";
import Info from "./info";
import Experience1 from "./Experience1";
import Experience2 from "./Experience2";
import AreasOfExpertise from "./areasOfExpertise";

const CV = () => {
  return (
    <>
      <Box width="297mm" height={"420mm"} bgcolor="white">
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-between"}
          maxWidth="297mm"
        >
          <Headline></Headline>
          <Info></Info>
        </Box>
        <AreasOfExpertise></AreasOfExpertise>
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-between"}
        >
          <Experience1></Experience1>
          <Skills1></Skills1>
        </Box>
      </Box>
      <Box width="297mm" height={"419mm"} bgcolor="white">
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-between"}
        >
          <Experience2></Experience2>
          <Skills2></Skills2>
        </Box>
      </Box>
    </>
  );
};
export default CV;
