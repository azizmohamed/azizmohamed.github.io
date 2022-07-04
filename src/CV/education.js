import { Typography } from "@mui/material";
import LabelledBox from "./labelledBox";

const Education = () => (
  <LabelledBox
    label={"Education"}
    margin="2mm 5mm 2mm 5mm"
    titleLeft={"255mm"}
    titleWidth="23mm"
    height={"25mm"}
  >
    <Typography fontSize={"20px"} fontWeight="bold">Bachelor of Engineering | (2001 – 2006)</Typography>
    <Typography fontSize={"20px"}> Cairo University, Egypt</Typography>
    <Typography fontSize={"20px"}>
      Communications and electronics department and studied computer science and
      control as well.
    </Typography>
  </LabelledBox>
);
export default Education;
