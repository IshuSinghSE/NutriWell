import React from "react" ;
import FoodCard from "../components/FoodCard" ;

const NonVegetarian = () =>{
    return (
        <div  className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <FoodCard
            name="Grilled chicken breast"
            quantity={100}
            image="/data/Grilledchicken.jpg"
            calories={165}
            protein={31}
            carbs={1}
            fat={3.6} 
            />

            <FoodCard
            name="grilled Salmon"
            quantity={100}
            image="/data/GrilledSalmon.jpeg"
            calories={171}
            protein={24}
            carbs={1}
            fat={7.5} 
            />

            <FoodCard
            name="BoiledEggs"
            quantity={100}
            image="/data/eggs.jpg"
            calories={171}
            protein={24}
            carbs={1}
            fat={7.5} 
            />
            <FoodCard
            name="Shrimp"
            quantity={100}
            image="/data/shrimp.jpeg"
            calories={171}
            protein={24}
            carbs={1}
            fat={7.5} 
            />
            <FoodCard
            name="GrilledPork"
            quantity={100}
            image="/data/pork.jpeg"
            calories={171}
            protein={24}
            carbs={1}
            fat={7.5} 
            />
            <FoodCard
            name="GrilledLamb"
            quantity={100}
            image="/data/lamb.jpg"
            calories={171}
            protein={24}
            carbs={1}
            fat={7.5} 
            />
        </div>
    );
};


export default NonVegetarian ;

