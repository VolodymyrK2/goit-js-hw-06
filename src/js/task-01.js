const cardEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${cardEl.length}`);
console.log(" ");
const titlesEl = document.querySelectorAll("h2");
const listEl = document.querySelectorAll("ul ul");

titlesEl.forEach(title => {
    console.log(`Category: ${title.textContent}`); 
    const itemsEl = title.nextElementSibling.querySelectorAll("li");
    console.log(`Elements: ${itemsEl.length}`);
    console.log(" ");
 })
