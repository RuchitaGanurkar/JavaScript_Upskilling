(function () {
    const lines = [];
    const raw = "  riya  ";
    lines.push("trim + upper: " + raw.trim().toUpperCase());
    lines.push("includes 'iy': " + String(raw.trim().includes("iy")));
    const piStr = "3.14159";
    lines.push("parseFloat piStr → " + parseFloat(piStr));
    lines.push("Falsy check on '': " + Boolean(""));
    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
