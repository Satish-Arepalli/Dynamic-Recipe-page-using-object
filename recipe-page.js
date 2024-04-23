let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let ingredientList = recipeObj.ingredients;

let headingEl = document.getElementById("heading");
let imageContainerEl = document.getElementById("imageContainer");
let imageEl = document.getElementById("image");
let ingredientsContainerEl = document.getElementById("ingredientsContainer");

headingEl.textContent = recipeObj.title;

imageEl.setAttribute("src", recipeObj.imgSrc);
imageEl.classList.add("w-100");
imageContainerEl.appendChild(imageEl);

for (let ingredient of ingredientList) {
    let ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("ingredient");
    ingredientsContainerEl.appendChild(ingredientEl);
}