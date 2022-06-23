import { Box, Typography } from "@mui/material";

const AreaOfExpertise = ({ title, children, width }) => {
  return (
    <Box
      minWidth={width}
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      padding={"2mm"}
      bgcolor="#048BC2"
      borderRadius={"1mm"}
    >
      <Typography fontWeight="bold" color={"white"}>
        {title}
      </Typography>
    </Box>
  );
};

export default AreaOfExpertise;
