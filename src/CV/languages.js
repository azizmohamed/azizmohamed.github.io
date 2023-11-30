import SkillRating from "./skillRating";
import LabelledBox from "./labelledBox";
import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Languages = () => {
  return (
    <LabelledBox
    label={"Languages"}
    titleWidth="25mm"
    width={"50mm"}
    margin="2mm 5mm 65mm 1mm"
    titleLeft={"20mm"}
    height={"40mm"}
    >
      <Box display={"flex"} flexDirection="column" gap={"5mm"}>
        <Box display={"flex"} flexDirection="column">
          <Typography fontSize={"20px"} fontWeight="bold" style={{textDecoration:"underline"}}>English:</Typography>
          <Typography fontSize={20} alignSelf={"center"}>Fluent</Typography>
        </Box>
        <Box display={"flex"} flexDirection="column">
          <Typography fontSize={"20px"} fontWeight="bold" style={{textDecoration:"underline"}}>Arabic:</Typography>
          <Typography fontSize={20} alignSelf={"center"}>Native Language</Typography>
        </Box>
      </Box>
    </LabelledBox>
  );
};

export default Languages;
