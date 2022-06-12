import React, { useState } from "react";
import RecipeIngredientDetails from "./RecipeIngredientDetails";
import PropTypes from 'prop-types'; 

const FoodRecipeCard = ({ foodrecipe }) => {
  const [displayIngredients, setDisplayIngredients] = useState(false);
  const { label, image, url, ingredients } = foodrecipe.recipe;

  const toggleCompleted = () => {
     setDisplayIngredients(!displayIngredients);
  }

  return (
    <div className="recipeCard">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <br></br>
      <button onClick={() => setDisplayIngredients(!displayIngredients)}>Ingredients</button>
      {displayIngredients && <RecipeIngredientDetails ingredients={ingredients} toggleCompleted = {toggleCompleted}/>}
      <br></br>
      <a href={url} target="blank" ><button>Preparation</button></a>
    </div>
  );
};

FoodRecipeCard.propTypes = {
  foodrecipe: PropTypes.object.isRequired
};

export default FoodRecipeCard;
