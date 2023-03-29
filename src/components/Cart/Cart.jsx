import React from "react";

const Cart = ({ addMeal }) => {
  return (
    <>
      {addMeal.map((meal, index) => (
        <p key={index}>
          {++index}. {meal}
        </p>
      ))}
    </>
  );
};

export default Cart;
