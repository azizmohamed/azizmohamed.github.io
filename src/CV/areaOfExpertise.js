import { Box, Typography } from "@mui/material";

const AreaOfExpertise = ({ title, children }) => {
  return (
    <Box
      boxShadow={"0.5px 1px 4px #d3d3d3"}
      width="86mm"
      display={"flex"}
      flexDirection="column"
      alignItems={"start"}
      border="solid 1px #d3d3d3"
      padding={"2mm"}
    >
      <Typography  sx={{textDecoration: 'underline'}} fontWeight="bold">{title}</Typography>
      {children}
    </Box>
  );
};

export default AreaOfExpertise;
