(function () {
    const lines = [];

    function logGrade(marks) {
        if (marks < 0 || marks > 100) {
            return "Invalid marks";
        }
        if (marks >= 90) {
            return "A";
        }
        if (marks >= 75) {
            return "B";
        }
        if (marks >= 60) {
            return "C";
        }
        return "F";
    }

    lines.push("Task 1 — grading");
    [72, 95, 50, 75, -1, 101].forEach(function (m) {
        lines.push("Answer: marks " + m + " → " + logGrade(m));
    });

    lines.push("");
    lines.push("Task 2 — day switch");
    function dayKind(day) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                return "Weekday";
            case "Saturday":
            case "Sunday":
                return "Weekend";
            default:
                return "Invalid day";
        }
    }
    ["Monday", "Saturday", "Holiday"].forEach(function (d) {
        lines.push("Answer: " + d + " → " + dayKind(d));
    });

    lines.push("");
    lines.push("Task 3 — truthy / falsy");
    const samples = [0, "0", "", " ", null, undefined, NaN, [], {}, "false"];
    samples.forEach(function (value) {
        const label =
            value instanceof Array ? "[]" : value === " " ? "' '" : JSON.stringify(value);
        lines.push("Answer: " + label + " → " + (value ? "truthy" : "falsy"));
    });
    lines.push("Answer: six falsy values → false, 0, \"\", null, undefined, NaN");

    lines.push("");
    lines.push("Task Bonus — guard clauses");
    function canComment(user) {
        if (!user) {
            return;
        }
        if (user.isBanned) {
            return;
        }
        if (user.age < 13) {
            return;
        }
        lines.push("Answer: Comment allowed for age " + user.age);
    }
    canComment({ name: "x", isBanned: false, age: 14 });
    canComment({ name: "banned", isBanned: true, age: 20 });
    canComment(null);

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
