(function () {
    const lines = [];
    const book = { title: "JS Guide", author: "MDN", year: 2024, pages: 320 };
    const key = "title";
    lines.push("Answer: book[key] → " + book[key]);
    book.summary = function () {
        return this.title + " by " + this.author + " (" + this.year + ")";
    };
    lines.push("Answer: summary() → " + book.summary());
    const demo = { a: 1, b: 2 };
    lines.push("Answer: entries demo");
    Object.entries(demo).forEach(function (kv) {
        lines.push("Answer: " + kv[0] + " → " + kv[1]);
    });
    const original = { x: 1, y: 2 };
    const altered = { ...original, y: 99 };
    lines.push("Answer: original.y → " + original.y + ", copy.y → " + altered.y);
    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
