// src/App.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import PieChart from './PieChart';
// import PieChartComponent from './PieChartComponent';


function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My MUI Application
      </Typography>
      <PieChart />
      {/* <PieChartComponent /> */}
    </Container>
  );
}

export default App;
