import { Box } from "@mui/system";
import { Typography, List, ListItem } from "@mui/material";
const Project = ({ title, description, accomplishments }) => {
  return (
    <Box>
      <Box display={"flex"} flexDirection="row" gap="2mm" marginY={"1mm"}>
        <Typography fontSize={"14px"} fontWeight="bold">
          Project:
        </Typography>
        <Typography fontSize={"16px"} fontWeight="bold">
          {title}
        </Typography>
      </Box>
      {description}
      <Typography fontSize={"14px"} fontWeight="bold" marginY={"1mm"}>
        Accomplishments:
      </Typography>
      <List disablePadding>
        {accomplishments.map((acc, index) => {
          return <ListItem disablePadding key={index}>- {acc}</ListItem>;
        })}
      </List>

      
    </Box>
  );
};

export default Project;
