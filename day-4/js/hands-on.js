(function () {
    const lines = [];

    function logGrade(marks) {
        if (marks < 0 || marks > 100) {
            lines.push("marks " + marks + " → Invalid marks");
            return;
        }
        let g = "F";
        if (marks >= 90) {
            g = "A";
        } else if (marks >= 75) {
            g = "B";
        } else if (marks >= 60) {
            g = "C";
        }
        lines.push("marks " + marks + " → " + g);
    }

    lines.push("=== Task 1: Grading system ===");
    logGrade(72);
    logGrade(95);
    logGrade(50);
    logGrade(75);
    logGrade(-1);
    logGrade(101);

    lines.push("");
    lines.push("=== Task 2: Day type (tests) ===");
    function logDayType(day) {
        let kind = "";
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                kind = "Weekday";
                break;
            case "Saturday":
            case "Sunday":
                kind = "Weekend";
                break;
            default:
                kind = "Invalid day";
        }
        lines.push(day + " → " + kind);
    }
    logDayType("Monday");
    logDayType("Saturday");
    logDayType("Holiday");

    lines.push("");
    lines.push("=== Task 3: Truthy / falsy ===");
    const samples = [0, "0", "", " ", null, undefined, NaN, [], {}, "false"];
    samples.forEach(function (value) {
        const label = value instanceof Array ? "[]" : value === " " ? "' '" : JSON.stringify(value);
        lines.push(label + " → " + (value ? "truthy" : "falsy"));
    });
    lines.push("");
    lines.push("// The 6 falsy values: false, 0, \"\", null, undefined, NaN");

    lines.push("");
    lines.push("=== Bonus: guard clauses ===");
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
        lines.push("Comment allowed for age " + user.age);
    }
    canComment({ name: "x", isBanned: false, age: 14 });
    canComment({ name: "banned", isBanned: true, age: 20 });
    canComment(null);

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
