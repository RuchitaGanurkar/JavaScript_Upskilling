
// Select and Change Text

const title = document.querySelector("#title");

title.textContent = "Hello, Ruchita!";
title.style.color = "crimson"; // inline
title.style.fontFamily = "Georgia, serif";


//  Toggle Theme

const themeBtn = document.querySelector("#theme-btn");


document.body.classList.toggle("dark");
console.log("Dark mode:", document.body.classList.contains("dark"));

document.body.classList.toggle("dark");
console.log("Dark mode:", document.body.classList.contains("dark"));



// Build List Dynamically

const names = ["Priya", "Aarav", "Riya", "Kabir"];
const list = document.querySelector("#names-list");

names.forEach((name, index) => {
  const li = document.createElement("li");
  li.textContent = `${index + 1}. ${name}`; 
  li.classList.add("name-item");
  list.appendChild(li);
});

// Card Design

const product = {
  name: "Laptop",
  price: 60000,
  brand: "Dell"
};

const cardsContainer = document.querySelector("#cards");

const card = document.createElement("div");
card.classList.add("card");

const titleElm = document.createElement("h3");
titleEl.textContent = product.name;

const brandElm = document.createElement("p");
brandEl.textContent = product.brand;

const priceElm = document.createElement("span");
priceEl.textContent = `${product.price}`;

card.appendChild(titleElm);
card.appendChild(brandElm);
card.appendChild(priceElm);

cardsContainer.appendChild(card);
