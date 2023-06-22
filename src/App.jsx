import Header from "./components/header/Header";
import Navbar from "./components/Navbar/Navbar";
import Paper from '@mui/material/Paper';
import BestDeals from "./components/BestDeals/BestDeals";
import { ThemeProvider, useTheme } from "@mui/material";
import Footer from "./components/Footer/Footer";

function App() {
  const theme = useTheme()
  return (
    <>
     
      <ThemeProvider theme={theme}>
        <Header/>
        <Paper elevation={3} >
        <Navbar/>
        </Paper>
        <BestDeals/>
        <Footer/>
        </ThemeProvider>
      
    </>
  );
}

export default App;
