import { Box } from "@mui/system";
import { Link } from "@mui/material";

const Certificate = ({ image, url }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
      justifyContent={"center"}
      width={"100%"}
      mt="2mm"
    >
      <Link href={url}>
        <Box component={"img"} src={image} width="40mm"></Box>
      </Link>
    </Box>
  );
};
export default Certificate;
