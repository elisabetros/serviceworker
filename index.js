let endpoint =
  "http://ekaterinagp.dk/kea/wordpress/wp-json/wp/v2/opskrifter?_embed&fbclid=IwAR2yUdAUNX80ukrXBprITALfBQdoLnWY6y_1TTuLvE54pg7Y-Qe4fEA_4w4&per_page=100";
let section = document.querySelector("section");
let template = document.querySelector("template").content;

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    displayRecipes(data);
  });

function displayRecipes(recipes) {
  //   console.log(recipes);
  recipes.forEach(recipe => {
    const clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = recipe.title.rendered;
    clone.querySelector("img");
    section.appendChild(clone);
  });
}
