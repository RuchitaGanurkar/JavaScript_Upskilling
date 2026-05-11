(function () {
    const lines = [];

    lines.push("=== Task 1: Cart manipulation ===");
    const cart = ["bread", "milk", "eggs"];
    cart.push("butter");
    cart.unshift("rice");
    lines.push("after push+unshift: " + JSON.stringify(cart));
    const removed = cart.pop();
    lines.push("popped: " + removed + " → cart: " + JSON.stringify(cart));
    const spliced = cart.splice(1, 1);
    lines.push("splice(1,1) removed: " + JSON.stringify(spliced) + " → cart: " + JSON.stringify(cart));

    lines.push("");
    lines.push("=== Task 2: Filter / find / every / some ===");
    const scores = [88, 42, 75, 60, 91, 39, 55, 70];
    const passing = scores.filter(function (s) {
        return s >= 60;
    });
    lines.push("passing (>=60): " + JSON.stringify(passing));
    const firstFail = scores.find(function (s) {
        return s < 60;
    });
    lines.push("first failing score: " + firstFail);
    const allPass = scores.every(function (s) {
        return s >= 60;
    });
    lines.push("every passing? " + allPass);
    lines.push("some > 90? " + scores.some(function (s) {
        return s > 90;
    }));

    lines.push("");
    lines.push("=== Task 3: Map with 18% GST ===");
    const prices = [100, 250, 500, 1200, 80];
    const withGst = prices.map(function (p) {
        return p * 1.18;
    });
    lines.push("original: " + JSON.stringify(prices));
    lines.push("with 18% GST: " + JSON.stringify(withGst));
    const rounded = prices.map(function (p) {
        return Number((p * 1.18).toFixed(2));
    });
    lines.push("Bonus rounded: " + JSON.stringify(rounded));

    lines.push("");
    lines.push("=== Bonus: reduce ===");
    const expenses = [250, 800, 120, 50, 1500, 75];
    const expenseTotal = expenses.reduce(function (acc, x) {
        return acc + x;
    }, 0);
    lines.push("total expenses: " + expenseTotal);
    const maxExp = expenses.reduce(function (max, x) {
        return x > max ? x : max;
    }, expenses[0]);
    lines.push("max expense: " + maxExp);
    const over100 = expenses.filter(function (x) {
        return x > 100;
    }).reduce(function (a, x) {
        return a + x;
    }, 0);
    lines.push("Bonus sum >100 only: " + over100);

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
