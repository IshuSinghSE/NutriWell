import React from 'react' ;
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-green-500 text-white py-20 px-6 flex flex-col md:flex-row items-center justify-between">
      
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Eat Smart, <span className="text-yellow-300">Live Healthy</span>
        </h1>
        <p className="mt-4 text-lg text-gray-100">
          NutriWell helps you track your meals, calculate calories, and build a
          healthier lifestyle with personalized nutrition plans.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            to="/CalculatorPage"
            className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Calculate Calories
          </Link>
          <Link
            to="/VegetarianPage"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Explore Foods
          </Link>
        </div>
      </div>

      
      <div className="mt-10 md:mt-0 md:ml-10">
        <img
          src="https://img.freepik.com/free-vector/healthy-lifestyle-concept-illustration_114360-2178.jpg"
          alt="Nutrition Hero"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;

