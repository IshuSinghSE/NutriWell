import React from "react";
import FoodCard from "../components/FoodCard";




const Vegetarian = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <FoodCard
        name="Grilled Paneer"
        quantity={100}
        image="/data/Grilledpaneer.jpeg"
        calories={280}
        protein={20}
        carbs={10}
        fat={18}
      />
      <FoodCard
        name="Veg Salad"
        quantity={100}
        image="/data/salad.jpg"
        calories={150}
        protein={5}
        carbs={25}
        fat={2}
      />
      <FoodCard
        name="Almonds"
        quantity={100}
        image="/data/almonds.jpeg"
        calories={150}
        protein={5}
        carbs={25}
        fat={2}
      />
      <FoodCard
        name="Carrots"
        quantity={100}
        image="/data/carrots.jpg"
        calories={150}
        protein={5}
        carbs={25}
        fat={2}
      />
      <FoodCard
        name="SweetPotato"
        quantity={100}
        image="/data/sweetpotato.jpg"
        calories={150}
        protein={5}
        carbs={25}
        fat={2}
      />
      <FoodCard
        name="Walnuts"
        quantity={100}
        image="/data/walnuts.jpg"
        calories={150}
        protein={5}
        carbs={25}
        fat={2}
      />
      <FoodCard
        name="Raw Oats"
        quantity={100}
        image="/data/oats.webp"
        calories={150}
        protein={5}
        carbs={25}
        fat={2}
      />
      <FoodCard
        name="PeanutButter"
        quantity={100}
        image="/data/peanutbutter.jpg"
        calories={150}
        protein={5}
        carbs={25}
        fat={2}
      />
      <FoodCard
        name="BoiledRice"
        quantity={100}
        image="/data/boiledrice.jpg"
        calories={150}
        protein={5}
        carbs={25}
        fat={2}
      />
    </div>
  );
};

export default Vegetarian;
