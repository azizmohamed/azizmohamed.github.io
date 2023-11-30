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
    <Typography fontSize={"16px"} fontWeight="bold">Bachelor of Engineering | (2001 – 2006)</Typography>
    <Typography fontSize={"16px"}> Cairo University, Egypt</Typography>
    <Typography fontSize={"16px"}><strong>Grade:</strong>Good, <strong>Graduation Project Grade:</strong>Excellent</Typography>
    <Typography fontSize={"16px"}>
      Communications and electronics department and studied computer science and
      control as well.
    </Typography>
  </LabelledBox>
);
export default Education;
