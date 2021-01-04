import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = props => {
  const { recipes, healthArray } = props;
  return (
    <div className="row row-cols-1 row-cols-md-3"  >
      {
      recipes.map(recipe => (
        <RecipeItem
          key={Math.random() * 100}
          image={recipe.recipe.image}
          name={recipe.recipe.label}
          cautions={recipe.recipe.cautions}
          calories={recipe.recipe.calories}
          totalWeight={recipe.recipe.totalWeight}
          dietLabels={recipe.recipe.dietLabels}
          healthLabels={recipe.recipe.healthLabels}
          url={recipe.recipe.url}
          healthArray={healthArray}
        />
      ))}
    </div>
  );
};


export default Recipes;