import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-600 px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-2xl tracking-wide">
          NutriWell
        </div>

        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
          <Link to="/VegetarianPage" className="text-white hover:text-yellow-300">Vegetarian</Link>
          <Link to="/NonVegetarianPage" className="text-white hover:text-yellow-300">Non-Vegetarian</Link>
          <Link to="/CalculatorPage" className="text-white hover:text-yellow-300">Calories</Link>
          <Link to="/Login" className="text-white hover:text-yellow-300">Login</Link>
          
        </div>

        
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-3 bg-green-700 p-4 rounded-lg">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-white hover:text-yellow-300">Home</Link>
          <Link to="/VegetarianPage" onClick={() => setMenuOpen(false)} className="text-white hover:text-yellow-300">Vegetarian</Link>
          <Link to="/NonVegetarianPage" onClick={() => setMenuOpen(false)} className="text-white hover:text-yellow-300">Non-Vegetarian</Link>
          <Link to="/CalculatorPage" onClick={() => setMenuOpen(false)} className="text-white hover:text-yellow-300">Calories</Link>
          <Link to="/Login" onClick={() => setMenuOpen(false)} className="text-white hover:text-yellow-300">Login</Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navigation;