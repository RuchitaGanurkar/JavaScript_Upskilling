(function () {
    const lines = [];
    lines.push("Task — const string, let counter, log values and typeof");
    const courseTitle = "JavaScript Upskilling";
    const cohortYear = 2026;
    let completedLessons = 0;
    completedLessons += 1;
    lines.push("Answer: courseTitle → " + courseTitle);
    lines.push("Answer: cohortYear → " + cohortYear);
    lines.push("Answer: completedLessons after += 1 → " + completedLessons);
    lines.push("Answer: typeof courseTitle → " + typeof courseTitle);
    lines.push("Answer: typeof cohortYear → " + typeof cohortYear);
    lines.push("Answer: typeof completedLessons → " + typeof completedLessons);
    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
