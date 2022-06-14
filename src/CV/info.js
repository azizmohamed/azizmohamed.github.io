import {Box, Link, Typography} from '@mui/material';

const Info = ()=> {
    return <Box width="80mm" 
                bgcolor="#e7f5f9" 
                mt="5mm"
                mb="1mm"
                mr="5mm"
                ml="1mm"
                padding={"5mm"} 
                borderRadius={"2mm"}
                display="flex"
                flexDirection={"column"}
                gap="2mm"
                >
        <Link
            href="mailto:aziz@azizmohamed.com"
        >
            aziz@azizmohamed.com
        </Link>
        <Link
            href='https://www.linkedin.com/in/abdelazizyoussef/'
        >
            LinkedIn
        </Link>
        <Link
            href='tel:+61410592487'
        >
            +61410592487
        </Link>
        <Link
            href='https://github.com/azizmohamed/'
        >
            Github
        </Link>
        
    </Box>
}

export default Info;