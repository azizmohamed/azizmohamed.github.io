import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ExperienceItem = ({
  position,
  company,
  periodDesc,
  companyUrl,
  children,
}) => {
  return (
    <Box marginBottom={"2mm"}>
      <Box
        display={"flex"}
        flexDirection="row"
        gap={"2mm"}
        alignItems="center"
        width={"100%"}
        borderBottom={"solid 1px black"}
      >
        <Typography variant="h6" >{position}</Typography>
        <Link href={companyUrl}>
          <Typography variant="h7">{company}</Typography>
        </Link>{" "}
        - <Typography variant="h7">{periodDesc}</Typography>
      </Box>

      <Box>{children}</Box>
    </Box>
  );
};

export default ExperienceItem;
