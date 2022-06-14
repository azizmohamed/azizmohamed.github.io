import { useReactToPrint } from "react-to-print";
import {Box, Button} from '@mui/material';
import './App.css';
import React, { useRef } from "react";
import CV from './CV'

function App() {

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current || null,
  });


  const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <Box ref={ref}>
        <CV></CV>
      </Box>
    );
  });

  return (
    <Box 
        bgcolor="gray"
        paddingY={"3rem"}
        display={"flex"} 
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
        gap={"1rem"}
    >
      <CV></CV>
      <div style={{ display: "none" }}>
            <ComponentToPrint ref={componentRef} />
          </div>
          <Button
          variant="contained"
          onClick={handlePrint}
        >
          Print
        </Button>
    </Box>
  );
}

export default App;
