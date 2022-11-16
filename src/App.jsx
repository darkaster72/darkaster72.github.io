import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home.component";

const App = () => (
  <div className="">
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  </div>
);

export default App;
