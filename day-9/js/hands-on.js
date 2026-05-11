(function () {
    const lines = [];

    lines.push("=== Task 1: Template literal price ===");
    const item = "Laptop";
    const price = 60000;
    const tax = 0.18;
    lines.push(
        `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + price * tax}.`
    );
    lines.push(
        `Multiline:\n  base: ₹${price}\n  GST (${tax * 100}%): ₹${price * tax}\n  total: ₹${price + price * tax}`
    );

    lines.push("");
    lines.push("=== Task 2: Array + object destructuring ===");
    const scores = [88, 75, 92, 60, 45];
    const [top, second, ...others] = scores;
    lines.push("top=" + top + " second=" + second + " others=" + JSON.stringify(others));
    const user = { name: "Anaya", age: 21, address: { city: "Jaipur", pincode: "302001" } };
    const {
        name: uname,
        age: userAge,
        address: { city }
    } = user;
    lines.push("name=" + uname + " userAge=" + userAge + " city=" + city);

    lines.push("");
    lines.push("=== Task 3: Rest parameters ===");
    function sumAll(...numbers) {
        return numbers.reduce(function (a, n) {
            return a + n;
        }, 0);
    }
    lines.push("sumAll(1,2,3)=" + sumAll(1, 2, 3));
    lines.push("sumAll(10,20,30,40)=" + sumAll(10, 20, 30, 40));
    lines.push("sumAll()=" + sumAll());
    function joinNames(separator, ...names) {
        return names.join(separator);
    }
    lines.push(
        'joinNames(", ", "Priya", "Aarav", "Riya")=' + joinNames(", ", "Priya", "Aarav", "Riya")
    );

    lines.push("");
    lines.push("=== Bonus: merge settings ===");
    const defaults = { theme: "light", lang: "en", notifications: true };
    const userPrefs = { theme: "dark", fontSize: 16 };
    const merged = { ...defaults, ...userPrefs };
    lines.push("merged: " + JSON.stringify(merged));
    function applyPrefs(d, p) {
        return { ...d, ...p };
    }
    lines.push("applyPrefs: " + JSON.stringify(applyPrefs(defaults, { lang: "hi" })));

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
