import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';

const SkillRating = ({skill, rating}) => {
    return <Box 
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            alignItems="center">
                <Typography>{skill}</Typography>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    icon={<CircleIcon  fontSize="small" />}
                    emptyIcon={<CircleIcon fontSize="small"/>}
                    readOnly
                />
            </Box>
}

export default SkillRating;