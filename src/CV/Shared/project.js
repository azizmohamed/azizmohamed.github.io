import { Box } from "@mui/system";
import { Typography, List, ListItem } from "@mui/material";
const Project = ({ title, description, accomplishments, marginBottom }) => {
  return (
    <Box marginBottom={marginBottom || "1mm"}>
      {title && <Box display={"flex"} flexDirection="row" gap="2mm" marginY={"1mm"}>
        <Typography fontSize={"20px"} fontWeight="bold">
          Project:
        </Typography>
        <Typography fontSize={"20px"} fontWeight="bold">
          {title}
        </Typography>
      </Box>}
      
      {description}
      {accomplishments?.length ? (
        <Typography
          fontSize={"17px"}
          fontWeight="bold"
          margin={"2mm 1mm 1mm 1mm"}
        >
          Accomplishments:
        </Typography>
      ) : (
        <></>
      )}
      {accomplishments?.length ? (
        <List disablePadding>
          {accomplishments.map((acc, index) => {
            return (
              <ListItem disablePadding key={index} style={{ fontSize: "20px" }}>
                - {acc}
              </ListItem>
            );
          })}
        </List>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Project;
