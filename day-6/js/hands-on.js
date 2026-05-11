(function () {
    const lines = [];

    lines.push("=== Task 1: Rectangle area ===");
    function area(length, width) {
        return length * width;
    }
    const areaArrow = (length, width) => length * width;
    lines.push("area(5,3) = " + area(5, 3));
    lines.push("area(10,4) = " + area(10, 4));
    lines.push("area(7,7) = " + area(7, 7));
    lines.push("Bonus areaArrow(8,6) = " + areaArrow(8, 6));

    lines.push("");
    lines.push("=== Task 2: Greet with default ===");
    const greet = (name = "Guest") => "Hello, " + name + "!";
    lines.push('greet("Priya") = ' + greet("Priya"));
    lines.push('greet("Aarav") = ' + greet("Aarav"));
    lines.push("greet() = " + greet());
    lines.push("Bonus greet(null) = " + greet(null));
    lines.push("(Default applies to undefined, not null.)");

    lines.push("");
    lines.push("=== Task 3: Celsius to Fahrenheit ===");
    const cToF = (c) => (c * 9) / 5 + 32;
    [0, 100, 37, 45].forEach(function (c) {
        lines.push(c + "°C → " + cToF(c) + "°F");
    });

    lines.push("");
    lines.push("=== Bonus: pure vs impure ===");
    function double(n) {
        return n * 2;
    }
    let total = 0;
    function addToTotal(n) {
        total += n;
        return total;
    }
    lines.push("double(3), double(3), double(3) → " + [double(3), double(3), double(3)].join(", "));
    total = 0;
    lines.push("addToTotal(3) x3 → " + [addToTotal(3), addToTotal(3), addToTotal(3)].join(", "));
    lines.push("// Pure double is easier to reason about: no hidden state.");

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
