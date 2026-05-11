(function () {
    const lines = [];
    const courseTitle = "JavaScript Upskilling";
    const cohortYear = 2026;
    let completedLessons = 0;
    completedLessons += 1;

    lines.push("Task: declare const/let and log them");
    lines.push("courseTitle: " + courseTitle);
    lines.push("cohortYear: " + cohortYear);
    lines.push("completedLessons: " + completedLessons);
    lines.push("");
    lines.push("console.log types:");
    lines.push(String(typeof courseTitle));
    lines.push(String(typeof cohortYear));
    lines.push(String(typeof completedLessons));

    console.log(lines.join("\n"));
    document.getElementById("out").textContent = lines.join("\n");
})();
