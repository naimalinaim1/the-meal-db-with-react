import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [addMeal, setAddMeal] = useState([]);

  // meals name added cart
  const handleMeal = (name) => {
    setAddMeal([...addMeal, name]);
  };

  // search meals
  const searchMeals = (isClear) => {
    const searchMealEl = document.getElementById("search-meal-filed");
    const searchMeal = searchMealEl.value;
    if (isClear) {
      searchMealEl.value = searchMeal;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  };

  useEffect(() => {
    fetch("meals.json")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div className="mt-10 mb-20 w-[96%] max-w-[1400px] mx-auto">
      <div className="flex justify-center items-center gap-2">
        <input
          id="search-meal-filed"
          type="search"
          onChange={() => searchMeals(false)}
          placeholder="Search Meals"
          className="input input-bordered border-gray-400 text-gray-500  w-full max-w-4xl"
        />
        <button className="btn btn-primary" onClick={() => searchMeals(true)}>
          Search
        </button>
      </div>
      <div className="mt-12 relative gap-2 flex flex-col-reverse  sm:grid sm:grid-cols-[1fr_260px]">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {meals ? (
            meals.map((meal) => (
              <Meal key={meal.idMeal} meal={meal} handleMeal={handleMeal} />
            ))
          ) : (
            <p className="text-xl">No meals found</p>
          )}
        </div>
        <div className="md:h-screen max-h-screen py-4 mb-6 sm:mb-0 rounded-md bg-red-100 sticky top-0">
          <h3 className="text-xl font-semibold text-center mt-3 mb-6">
            Selected Meals
          </h3>
          <div className="pl-2 space-y-1.5 text-gray-600">
            <Cart addMeal={addMeal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
