(function () {
    const lines = [];

    lines.push("=== Task 1: Multiplication table of 7 ===");
    for (let i = 1; i <= 10; i++) {
        lines.push(`7 x ${i} = ${7 * i}`);
    }
    lines.push("Bonus — even multiples of 7 only:");
    for (let i = 1; i <= 10; i++) {
        if ((7 * i) % 2 !== 0) {
            continue;
        }
        lines.push(`7 x ${i} = ${7 * i}`);
    }

    lines.push("");
    lines.push("=== Task 2: Sum 1..100 (while) ===");
    let sum = 0;
    let j = 1;
    while (j <= 100) {
        sum += j;
        j++;
    }
    lines.push("sum all: " + sum);
    let oddSum = 0;
    let k = 1;
    while (k <= 100) {
        oddSum += k;
        k += 2;
    }
    lines.push("Bonus — odd only 1..99: " + oddSum);

    lines.push("");
    lines.push("=== Task 3: for...of names ===");
    const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];
    for (const name of names) {
        lines.push(name);
    }
    let longCount = 0;
    for (const name of names) {
        if (name.length > 4) {
            longCount++;
        }
    }
    lines.push("names longer than 4 chars: " + longCount);
    lines.push("Bonus — chars of Jaipur:");
    for (const c of "Jaipur") {
        lines.push("  " + c);
    }

    lines.push("");
    lines.push("=== Bonus: for...in on student ===");
    const student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech" };
    let propCount = 0;
    for (const key in student) {
        lines.push(key + ": " + student[key]);
        propCount++;
    }
    lines.push("property count: " + propCount);

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
