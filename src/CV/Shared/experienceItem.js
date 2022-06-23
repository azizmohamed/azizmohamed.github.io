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
    <Box marginBottom={"10mm"}>
      <Box
        display={"flex"}
        flexDirection="row"
        alignItems="center"
        width={"100%"}
        borderBottom={"solid 1px black"}
      >
        <Typography fontSize={"25px"} fontWeight="bold" mr="5mm">
          {position}
        </Typography>
        <Link href={companyUrl}>
          <Typography fontSize={"25px"}>{company}</Typography>
        </Link>
        <Typography m="0 2mm 0 2mm">-</Typography>
        <Typography fontSize={"25px"}>{periodDesc}</Typography>
      </Box>

      <Box>{children}</Box>
    </Box>
  );
};

export default ExperienceItem;
