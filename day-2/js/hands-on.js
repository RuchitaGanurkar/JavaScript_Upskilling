(function () {
    const lines = [];
    lines.push("Task 1 — typeof samples");
    ["Hello", 42, true, undefined, null, Symbol(), 10n].forEach(function (v) {
        lines.push("Answer: typeof " + String(v) + " → " + typeof v);
    });
    lines.push("");
    lines.push("Task 2 — coercion");
    lines.push('Answer: 5 + "3" → ' + (5 + "3"));
    lines.push('Answer: "5" + 3 → ' + ("5" + 3));
    lines.push('Answer: "abc" - 1 → ' + ("abc" - 1));
    lines.push("Answer: true + 1 → " + (true + 1));
    lines.push("");
    lines.push("Task 3 — explicit conversion");
    lines.push('Answer: Number("hello") → ' + Number("hello"));
    lines.push('Answer: parseInt("42px") → ' + parseInt("42px", 10));
    lines.push("Answer: String(99) → " + String(99));
    lines.push('Answer: Boolean("") → ' + Boolean(""));
    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
