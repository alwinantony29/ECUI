import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/Navbar/Navbar";
import Paper from '@mui/material/Paper';

function App() {
  return (
    <>
      <div>
        <Header/>
        <Paper elevation={3} >
        <Navbar/>
        </Paper>
      </div>
    </>
  );
}

export default App;
