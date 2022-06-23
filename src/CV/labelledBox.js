import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
const LabelledBox = ({
  label,
  children,
  width,
  titleWidth,
  titleLeft,
  margin,
  padding,
  height
}) => {
  return (
    <Box
      border={"solid 1px #d3d3d3"}
      margin={margin}
      height={height}
      padding={padding || "2mm"}
      width={width}
      titleLeft={titleLeft}
    >
      <Typography
        position={"relative"}
        top="-5mm"
        left={titleLeft}
        backgroundColor="white"
        fontWeight={"bold"}
        width={titleWidth}
        pl="2mm"
      >
        {label}
      </Typography>
      <Box position={"relative"} top="-5mm">
        {children}
      </Box>
    </Box>
  );
};

export default LabelledBox;
