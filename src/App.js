import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
import "animate.css/animate.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
