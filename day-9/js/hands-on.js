(function () {
    const lines = [];
    const item = "Laptop";
    const price = 60000;
    const tax = 0.18;
    lines.push("Task 1 — template literal with GST inside string");
    lines.push(
        "Answer: " +
            `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + price * tax}.`
    );
    lines.push(
        "Answer: multiline → " +
            `base ₹${price}; GST ₹${price * tax}; total ₹${price + price * tax}`.replace(/; /g, "\n  ")
    );

    lines.push("");
    lines.push("Task 2 — array + object destructuring");
    const scores = [88, 75, 92, 60, 45];
    const [top, second, ...others] = scores;
    lines.push("Answer: top=" + top + ", second=" + second + ", others=" + JSON.stringify(others));
    const user = { name: "Anaya", age: 21, address: { city: "Jaipur", pincode: "302001" } };
    const { name: uname, age: userAge, address: { city } } = user;
    lines.push("Answer: name=" + uname + ", userAge=" + userAge + ", city=" + city);

    lines.push("");
    lines.push("Task 3 — rest parameters");
    function sumAll(...numbers) {
        return numbers.reduce(function (a, n) {
            return a + n;
        }, 0);
    }
    function joinNames(separator, ...names) {
        return names.join(separator);
    }
    lines.push("Answer: sumAll(1,2,3) → " + sumAll(1, 2, 3));
    lines.push("Answer: sumAll(10,20,30,40) → " + sumAll(10, 20, 30, 40));
    lines.push("Answer: sumAll() → " + sumAll());
    lines.push('Answer: joinNames(", ", "Priya", "Aarav", "Riya") → ' + joinNames(", ", "Priya", "Aarav", "Riya"));

    lines.push("");
    lines.push("Task Bonus — merge settings");
    const defaults = { theme: "light", lang: "en", notifications: true };
    const userPrefs = { theme: "dark", fontSize: 16 };
    lines.push("Answer: merged → " + JSON.stringify({ ...defaults, ...userPrefs }));
    function applyPrefs(d, p) {
        return { ...d, ...p };
    }
    lines.push("Answer: applyPrefs(defaults, {lang:'hi'}) → " + JSON.stringify(applyPrefs(defaults, { lang: "hi" })));

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
