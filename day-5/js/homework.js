(function () {
    const lines = [];
    lines.push("Print squares 1 to 8:");
    for (let i = 1; i <= 8; i++) {
        lines.push(i + "² = " + i * i);
    }
    lines.push("");
    lines.push("Countdown from 5 with do-while style (while):");
    let x = 5;
    while (x > 0) {
        lines.push("tick " + x);
        x--;
    }
    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
