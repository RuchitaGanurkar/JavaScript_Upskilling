(function () {
    const lines = [];
    const MAX_STUDENTS = 24;
    const trainerName = "Coach";

    lines.push("ALL_CAPS constant: MAX_STUDENTS = " + MAX_STUDENTS);
    lines.push("camelCase: trainerName = " + trainerName);
    lines.push("");
    lines.push("Single-line comment explains WHY next line exists.");
    const greeting = "Hi, " + trainerName + "!";
    lines.push(greeting);

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
