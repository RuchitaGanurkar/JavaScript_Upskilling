(function () {
    const lines = [];

    lines.push("Task 1 — var hoist");
    (function () {
        var name;
        lines.push("Answer: first console.log(name) → " + String(name) + " (var is hoisted and initialized undefined in this scope, so no ReferenceError).");
        name = "Priya";
        lines.push("Answer: second console.log(name) → " + name);
    })();

    lines.push("");
    lines.push("Task 2 — TDZ with let");
    lines.push("Answer: TDZ stands for Temporal Dead Zone.");
    try {
        new Function("console.log(city); let city = 'Jaipur';")();
    } catch (e) {
        lines.push("Answer: console.log(city) before let throws " + e.name + " — " + e.message);
    }
    (function () {
        let city = "Jaipur";
        lines.push("Answer: with let declared first, log city → " + city);
    })();

    lines.push("");
    lines.push("Task 3 — declaration vs expression order");
    (function () {
        const trace = [];
        function sayHi() {
            trace.push("Hi");
        }
        try {
            sayHi();
            greet();
        } catch (e) {
            trace.push("greet error: " + e.name);
        }
        var greet = function () {
            trace.push("Hello");
        };
        greet();
        lines.push(
            "Answer: sayHi() works (declaration fully hoisted). greet() before assignment throws TypeError (var greet is undefined then called). After line, greet() works. Trace: " +
                trace.join(" | ")
        );
    })();

    lines.push("");
    lines.push("Task Bonus — call stack / printSquare(5)");
    function multiply(a, b) {
        return a * b;
    }
    function square(n) {
        return multiply(n, n);
    }
    function printSquare(n) {
        lines.push("Answer: printSquare(5) logs " + square(n) + " (stack when multiply runs: global → printSquare → square → multiply).");

    }
    printSquare(5);

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
