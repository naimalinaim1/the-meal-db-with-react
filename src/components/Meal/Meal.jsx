import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const Meal = ({ meal, handleMeal }) => {
  const { strMeal, strMealThumb, strInstructions } = meal;
  return (
    <>
      <div className="max-h-[540px] card card-compact bg-base-100 shadow-md border w-2/3 sm:w-full mx-auto">
        <figure className="p-3">
          <img
            src={strMealThumb}
            alt={strMeal}
            className="rounded-xl sm:h-[300px] md:h-auto"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal ? strMeal : "No name found"}</h2>
          <p>
            {strInstructions
              ? strInstructions.slice(0, 200)
              : "No description found"}
            ...
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => handleMeal(strMeal)}
            >
              Add Items &nbsp;
              <FontAwesomeIcon icon={faAdd} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meal;
