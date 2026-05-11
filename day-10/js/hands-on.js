(function () {
    const lines = [];

    const titleEl = document.querySelector("#title");
    titleEl.textContent = "Hello, Student!";
    titleEl.style.color = "crimson";
    titleEl.style.fontFamily = "Georgia, serif";
    lines.push("Task 1: title updated (see h1 above).");

    const themeBtn = document.querySelector("#theme-btn");
    document.body.classList.toggle("dark");
    document.body.classList.toggle("dark");
    lines.push(
        "Task 2: toggled .dark twice on body; has dark now? " +
            document.body.classList.contains("dark")
    );

    const list = document.querySelector("#names-list");
    const names = ["Priya", "Aarav", "Riya", "Kabir"];
    names.forEach(function (name, index) {
        const li = document.createElement("li");
        li.textContent = index + 1 + ". " + name;
        li.className = "name-item";
        list.appendChild(li);
    });
    lines.push("Task 3: built list with " + names.length + " items.");

    const cards = document.querySelector("#cards");
    const product = { name: "Laptop", price: 60000, brand: "Dell" };
    const card = document.createElement("div");
    card.className = "card";
    const h3 = document.createElement("h3");
    h3.textContent = product.name;
    const p = document.createElement("p");
    p.textContent = product.brand;
    const span = document.createElement("span");
    span.textContent = "₹" + product.price;
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(span);
    cards.appendChild(card);
    lines.push("Bonus: product card appended.");

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
