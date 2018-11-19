let endpoint = "http://www.recipepuppy.com/api/?&q=cake&p=2";
let body = document.querySelector("body");

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    displayCat(data);
  });

function displayCat(link) {
  let img = document.createElement("img");
  img.setAttribute("src", link.file);
  body.appendChild(img);
}
