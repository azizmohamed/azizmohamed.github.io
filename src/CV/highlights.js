import { css } from '@emotion/react';
import {Box, Typography} from '@mui/material'
import LabelledBox from './labelledBox';
const Highlights = ()=> {
    return (
        <LabelledBox
            label={"Highlights"}
            margin="2mm 5mm 5mm 5mm" 
            titleWidth="23mm">
            <Typography>
                Data in highlights
            </Typography>
        </LabelledBox>);
}

export default Highlights;