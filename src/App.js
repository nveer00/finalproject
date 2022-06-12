import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import FoodRecipeCard from "./components/FoodRecipeCard";
import StatusMessagePanel from "./components/StatusMessagePanel";

function App() {
  const [searchquery, setSearchQuery] = useState("");
  const [foodrecipes, setFoodRecipes] = useState([]);
  const [status, setStatus] = useState("");

  const appId = "6efad36b";
  const appKey = "a2cf52d19b1a0beeb1bd9d1c4bfda4d1";

  const edamam_api_url = `https://api.edamam.com/search?q=${searchquery}&app_id=${appId}&app_key=${appKey}`;

  const getData = async () => {
    if (searchquery !== "") {
      const result = await Axios.get(edamam_api_url);
      if (!result.data.more) {
        return setStatus("No recipes found for specified search criteria");
      }

      setStatus("");
      setSearchQuery("");
      setFoodRecipes(result.data.hits);
   

    } else {
      setStatus("Please specify search criteria such as Pasta");
    }
  };

  const onChange = e => setSearchQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="AppContainer">
      <h1>Food Recipe Search </h1>
      <form onSubmit={onSubmit} className="search-panel">
        {status !== "" && <StatusMessagePanel status={status} />}
        <input
          type="text"
          name="searchquery"
          onChange={onChange}
          value={searchquery}
          autoComplete="off"
          placeholder="Search Recipes"
        />
        <input type="submit" value="Search Recipes" />
      </form>
      <div className="recipesDeck">
        {foodrecipes !== [] &&
          foodrecipes.map((foodrecipe,index) => <FoodRecipeCard key={index} foodrecipe={foodrecipe} />)}
      </div>
    </div>
  );
}

export default App;
