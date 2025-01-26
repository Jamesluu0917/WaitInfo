import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assuming your App.tsx is now Home
import Queue from "./pages/Queue";
import Admin from "./pages/Admin";
import Game from "./pages/Game";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
