(function () {
    const lines = [];
    lines.push("Homework review: strict comparisons and shortcuts");
    const total = 100;
    const discount = 15;
    let payable = total;
    payable -= discount;
    payable *= 1.18;
    lines.push("payable after -= then *=1.18 → " + payable.toFixed(2));
    lines.push("null === undefined → " + (null === undefined));
    lines.push("NaN === NaN → " + (NaN === NaN));
    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
