(function () {
    const lines = [];
    lines.push("Homework-style practice: traffic light");
    const light = "yellow";
    let action = "";
    switch (light) {
        case "green":
            action = "Go";
            break;
        case "yellow":
            action = "Slow";
            break;
        case "red":
            action = "Stop";
            break;
        default:
            action = "Unknown";
    }
    lines.push(light + " → " + action);

    const score = 68;
    const passed = score >= 60 ? "Pass" : "Fail";
    lines.push("score " + score + " → " + passed);

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
