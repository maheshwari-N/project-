const RecipeCard = ({ recipe }) => {
    return (
      <div className="recipe-card">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <button>View Details</button>
      </div>
    );
  };
  
  export default RecipeCard;
  