import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import HeroPage from "./pages/HeroPage";
import VegetarianPage from "./pages/VegetarianPage";
import NonVegetarianPage from "./pages/NonVegetarianPage";
import CalculatorPage from "./pages/CalculatorPage";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/VegetarianPage" element={<VegetarianPage />} />
        <Route path="/NonVegetarianPage" element={<NonVegetarianPage />} />
        <Route path="/CalculatorPage" element={<CalculatorPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
