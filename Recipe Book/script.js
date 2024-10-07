const recipeForm = document.getElementById("recipe-form");
const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("search");
const fetchButton = document.getElementById("fetch-button");

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

// Display recipes on page load
window.onload = displayRecipes;

recipeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addRecipe();
});

fetchButton.addEventListener("click", function () {
  const query = searchInput.value;
  if (query) {
    fetchRecipes(query);
  } else {
    alert("Please enter a keyword to search.");
  }
});

function addRecipe() {
  const name = document.getElementById("recipe-name").value;
  const ingredients = document
    .getElementById("ingredients")
    .value.split(",")
    .map((ingredient) => ingredient.trim());
  const preparation = document.getElementById("preparation").value;
  const image = document.getElementById("image").files[0];

  if (image) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const newRecipe = {
        name,
        ingredients,
        preparation,
        image: e.target.result,
      };
      recipes.push(newRecipe);
      localStorage.setItem("recipes", JSON.stringify(recipes));
      displayRecipes();
      recipeForm.reset();
    };
    reader.readAsDataURL(image);
  } else {
    alert("Please upload an image.");
  }
}

function displayRecipes() {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.className = "recipe";
    recipeDiv.innerHTML = `
            <h3>${recipe.name}</h3>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(
              ", "
            )}</p>
            <p><strong>Preparation:</strong> ${recipe.preparation}</p>
        `;
    recipeList.appendChild(recipeDiv);
  });
}

function searchRecipes() {
  const query = searchInput.value.toLowerCase();
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(query)
      )
  );

  recipeList.innerHTML = "";
  filteredRecipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.className = "recipe";
    recipeDiv.innerHTML = `
            <h3>${recipe.name}</h3>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(
              ", "
            )}</p>
            <p><strong>Preparation:</strong> ${recipe.preparation}</p>
        `;
    recipeList.appendChild(recipeDiv);
  });
}

function fetchRecipes(query) {
  const apiKey =
    "http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"; // Replace with your Spoonacular API key
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results) {
        recipeList.innerHTML = ""; // Clear existing recipes
        data.results.forEach((recipe) => {
          const recipeDiv = document.createElement("div");
          recipeDiv.className = "recipe";
          recipeDiv.innerHTML = `
                        <h3>${recipe.title}</h3>
                        <img src="${recipe.image}" alt="${recipe.title}">
                        <p><strong>Ingredients:</strong> [Ingredients data not fetched]</p>
                        <p><strong>Preparation:</strong> [Preparation data not fetched]</p>
                    `;
          recipeList.appendChild(recipeDiv);
        });
      } else {
        alert("No recipes found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
      alert("Failed to fetch recipes.");
    });
}
