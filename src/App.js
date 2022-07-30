import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Selector from './Selector';
import Cards from './Cards';
import data from "./data.json"

function App() {

  const [jsonData, setJsonData] = React.useState()

  return (
    <div style={{ margin: "10px", padding: "40px", borderRadius: "10px", borderStyle: "solid" }} >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Selector legitData={data} setJsonData={setJsonData} />
          </Grid>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={4}>
            <Cards jsonData={jsonData} legitData={data} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
