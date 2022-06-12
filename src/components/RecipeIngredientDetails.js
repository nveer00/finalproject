import React from "react";
import PropTypes from 'prop-types'; 

const RecipeIngredientDetails = ({ ingredients,toggleCompleted }) => {

  var content = ingredients.map((ingredient,index) => {
    return (
        <ul key={index} className="ingredients-list">
          <li className="ingredients-label">{ingredient.text}</li>
          <li className="ingredients-label">{ingredient.quantity}-{ingredient.measure}</li>
          <li className="ingredients-label">Weight - {ingredient.weight}</li>
        </ul>
    )
  });

  return <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close"  onClick={()=>toggleCompleted()}>&times;</span>
              <span className="ingredients-labelh">Ingredients:</span>
                  {content}
            </div>
          </div>
}

RecipeIngredientDetails.propTypes = {
  toggleCompleted: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      quantity: PropTypes.number,
      measure: PropTypes.number,
      weight: PropTypes.number
    })
  )
};

export default RecipeIngredientDetails;