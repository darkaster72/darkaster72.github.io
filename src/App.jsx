import "./App.css";
import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/home.component";
import Header from "./components/header/header.component";

const App = () => (
  <div className="App">
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  </div>
);

export default App;
