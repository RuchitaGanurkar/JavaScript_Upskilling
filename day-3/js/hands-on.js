(function () {
    const lines = [];

    lines.push("--- Task 1: Arithmetic detective ---");
    const a = 17;
    const b = 5;
    // Predictions: 22, 12, 85, 3.4, 2, 1419857
    lines.push("// predicted: 22, 12, 85, 3.4, 2, 1419857");
    lines.push("a + b = " + (a + b));
    lines.push("a - b = " + (a - b));
    lines.push("a * b = " + (a * b));
    lines.push("a / b = " + (a / b));
    lines.push("a % b = " + (a % b));
    lines.push("a ** b = " + (a ** b));
    const n = 42;
    lines.push("42 is " + (n % 2 === 0 ? "even" : "odd"));

    lines.push("");
    lines.push("--- Task 2: Equality trap (guess in comments) ---");
    // Prefer === because == triggers coercion and surprises (e.g. 0 == false).
    lines.push('5 == "5" → ' + (5 == "5"));
    lines.push('5 === "5" → ' + (5 === "5"));
    lines.push("0 == false → " + (0 == false));
    lines.push("0 === false → " + (0 === false));
    lines.push("null == undefined → " + (null == undefined));

    lines.push("");
    lines.push("--- Task 3: Access control ---");
    let hasLicense = true;
    const hasCar = false;
    const studentAge = 19;
    const canDrive = studentAge >= 18 && hasLicense;
    const canTravel = hasLicense || hasCar;
    lines.push("canDrive (age>=18 AND license): " + canDrive);
    lines.push("canTravel (license OR car): " + canTravel);
    hasLicense = false;
    lines.push("After hasLicense=false:");
    lines.push("canDrive: " + (studentAge >= 18 && hasLicense));
    lines.push("canTravel: " + (hasLicense || hasCar));

    lines.push("");
    lines.push("--- Bonus: ternary and nullish ---");
    const mood = studentAge >= 18 ? "adult" : "minor";
    lines.push("mood: " + mood);
    let username = null;
    const display = username ?? "Guest";
    const display2 = username || "Guest";
    lines.push("display (??): " + display);
    lines.push("display2 (||): " + display2);
    lines.push("// ?? only falls back on null/undefined; || also treats 0 and '' as empty.");

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
