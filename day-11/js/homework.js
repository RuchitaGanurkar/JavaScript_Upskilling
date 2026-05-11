(function () {
    const lines = [];

    document.getElementById("rand-bg").addEventListener("click", function () {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    });
    lines.push("1: Random background button ready.");

    const lenInput = document.getElementById("len-input");
    lenInput.addEventListener("input", function () {
        lenInput.style.color = lenInput.value.length < 3 ? "red" : "green";
    });
    lines.push("2: Length input colors red/green live.");

    document.getElementById("sum-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const a = Number(document.getElementById("num-a").value);
        const b = Number(document.getElementById("num-b").value);
        document.getElementById("sum-out").textContent = "Sum: " + (a + b);
    });
    lines.push("3: Sum form uses preventDefault.");

    const delegationList = document.getElementById("delegation-list");
    delegationList.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            console.log("List item:", e.target.textContent);
        }
    });
    const li6 = document.createElement("li");
    li6.textContent = "Item F (dynamic)";
    delegationList.appendChild(li6);
    lines.push("4: Sixth item added; delegation works for it too.");

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
