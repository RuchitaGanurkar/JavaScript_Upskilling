(function () {
    const lines = [];
    const p = document.getElementById("hw-text");
    p.textContent = "Plain text once";
    p.innerHTML = "With <strong>bold</strong> inside";
    p.textContent = "Back to plain.";
    lines.push("Homework 1: paragraph cycled textContent / innerHTML / textContent.");

    const items = document.querySelectorAll("#hw-list li");
    for (let i = 0; i < items.length; i++) {
        if (i % 2 === 0) {
            items[i].classList.add("even");
        }
    }
    lines.push("Homework 2: added class 'even' to even indices (0,2,4).");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "hw-dynamic-btn";
    btn.className = "hw-btn";
    btn.textContent = "Click me";
    document.querySelector("#hw-cards").before(btn);
    lines.push("Homework 3: button created and inserted.");

    const products = [
        { name: "Mouse", price: 800 },
        { name: "Keyboard", price: 2500 },
        { name: "Monitor", price: 12000 }
    ];
    const host = document.getElementById("hw-cards");
    products.forEach(function (prod) {
        const c = document.createElement("div");
        c.className = "card";
        c.textContent = prod.name + " — ₹" + prod.price;
        host.appendChild(c);
    });
    lines.push("Homework 4: three product cards.");

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
