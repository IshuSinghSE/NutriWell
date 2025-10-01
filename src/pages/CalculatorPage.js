import React, { useState } from "react";

const MaintainanceCalories = () => {
    const [gender, setGender] = useState("male");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [activity, setActivity] = useState(1.2);
    const [result, setResult] = useState(null);
    const calculateCalories = () => {
        let bmr = 0;

        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        const maintenance = Math.round(bmr * activity);
        setResult(maintenance);
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-2xl">
            <h1 className="text-2xl font-bold text-center mb-6">
                Maintenance Calories Calculator
            </h1>


            <div className="space-y-4">
                <div>
                    <label className="block font-semibold">Gender:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full border p-2 rounded"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div>
                    <label className="block font-semibold">Weight (kg):</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>

                <div>
                    <label className="block font-semibold">Height (cm):</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>

                <div>
                    <label className="block font-semibold">Age (years):</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>

                <div>
                    <label className="block font-semibold">Activity Level:</label>
                    <select
                        value={activity}
                        onChange={(e) => setActivity(Number(e.target.value))}
                        className="w-full border p-2 rounded"
                    >
                        <option value={1.2}>Sedentary (little/no exercise)</option>
                        <option value={1.375}>Lightly active (1-3 days/week)</option>
                        <option value={1.55}>Moderately active (3-5 days/week)</option>
                        <option value={1.725}>Very active (6-7 days/week)</option>
                        <option value={1.9}>Extra active (athlete)</option>
                    </select>
                </div>

                <button
                    onClick={calculateCalories}
                    className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                >
                    Calculate
                </button>
            </div>

            {result && (
                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Your Maintenance Calories:{" "}
                    </h2>
                    <p className="text-2xl font-bold text-green-600">{result} kcal/day</p>
                </div>
            )}
        </div>
    );
};

export default MaintainanceCalories;