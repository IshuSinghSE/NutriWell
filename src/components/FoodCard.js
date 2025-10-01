import React from "react";

const FoodCard = ({ name, quantity, image, calories, protein, carbs, fat }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden w-72 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      
      
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover"
      />

      
      <div className="p-5">
        <h2 className="text-lg font-bold text-green-600">{name}</h2>

        <div className="mt-3 text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-semibold text-green-600">Qty:</span> {quantity} g
          </p>
          <p>
            <span className="font-semibold text-green-600">Calories:</span> {calories} kcal
          </p>
          <p>
            <span className="font-semibold text-green-600">Protein:</span> {protein} g
          </p>
          <p>
            <span className="font-semibold text-green-600">Carbs:</span> {carbs} g
          </p>
          <p>
            <span className="font-semibold text-green-600">Fat:</span> {fat} g
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

