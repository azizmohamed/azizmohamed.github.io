import { Box } from "@mui/system";
import { Typography, List, ListItem } from "@mui/material";
const Project = ({ title, description, accomplishments, marginBottom }) => {
  return (
    <Box marginBottom={marginBottom || "1mm"}>
      {title && <Box display={"flex"} flexDirection="row" gap="2mm" marginY={"1mm"}>
        <Typography fontSize={"15px"} fontWeight="bold">
          Project:
        </Typography>
        <Typography fontSize={"15px"} fontWeight="bold" style={{textDecoration:"underline"}}>
          {title}
        </Typography>
      </Box>}
      
      {description}
      {accomplishments?.length ? (
        <Typography
          fontSize={"15px"}
          fontWeight="bold"
          margin={"1mm 0.5mm 0.5mm 0.5mm"}
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
              <ListItem disablePadding key={index} style={{ fontSize: "15px" }}>
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
