import { Box, Typography } from "@mui/material";

const Headline = () => {
  return (
    <Box
      mt="10mm"
      mb="1mm"
      ml="5mm"
      mr="1mm"
      padding={"5mm"}
      borderRadius={"2mm"}
      width="220mm"
      border={"solid 1px #d3d3d3"}
    >
      <Box pl="2mm" position={"relative"} top="-10mm" bgcolor={"white"} width="60mm">
        <Typography variant="h5">Abdelaziz Mohamed</Typography>
        <Typography variant="h7">Tech Lead/Solution Architect</Typography>
      </Box>
      <Typography></Typography>
    </Box>
  );
};

export default Headline;
