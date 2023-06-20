import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/Navbar/Navbar";
import Paper from '@mui/material/Paper';
import CustomCard from "./components/BestDeals/CustomCard";
import BestDeals from "./components/BestDeals/BestDeals";
import { ThemeProvider, useTheme } from "@mui/material";

function App() {
  const theme = useTheme()
  return (
    <>
      <div>
      <ThemeProvider theme={theme}>
        <Header/>
        <Paper elevation={3} >
        <Navbar/>
        </Paper>
        <BestDeals/>
        </ThemeProvider>

      </div>
    </>
  );
}

export default App;
