import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assuming your App.tsx is now Home
import Queue from "./pages/Queue";
import Admin from "./pages/Admin";
import Game from "./pages/Game";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import "./App.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#6BBAEC', // Replace with your desired primary color
      },
      text: {
        primary: '#05204A', // Replace with your desired text color
      },
    },
  });


  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/queue" element={<Queue />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Router>
        </ThemeProvider>
    </>
  );
}

export default App;
