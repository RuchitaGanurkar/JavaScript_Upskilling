(function () {
    const lines = [];

    lines.push("=== typeof quiz ===");
    ["Hello", 42, true, undefined, null, Symbol(), 10n].forEach(function (v) {
        lines.push("typeof " + String(v) + " → " + typeof v);
    });

    lines.push("");
    lines.push("=== coercion predictions ===");
    lines.push('5 + "3" → ' + (5 + "3"));
    lines.push('"5" + 3 → ' + ("5" + 3));
    lines.push('"abc" - 1 → ' + ("abc" - 1));
    lines.push("true + 1 → " + (true + 1));

    lines.push("");
    lines.push("=== explicit conversion ===");
    lines.push("Number('hello') → " + Number("hello"));
    lines.push("parseInt('42px') → " + parseInt("42px", 10));
    lines.push("String(99) → " + String(99));
    lines.push("Boolean('') → " + Boolean(""));

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
