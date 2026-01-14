import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavMenu from "./Components/NavMenu";
import Report from "./Components/Report";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NavMenu />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
