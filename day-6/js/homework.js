(function () {
    const lines = [];
    function kmToMiles(km) {
        return km * 0.621;
    }
    function gstAmount(price, rate) {
        const r = rate === undefined ? 18 : rate;
        return (price * r) / 100;
    }
    function fullName(first, last) {
        return first + " " + last;
    }
    function isAdult(age) {
        return age >= 18;
    }
    lines.push("kmToMiles(10) = " + kmToMiles(10));
    lines.push("gstAmount(1000) = " + gstAmount(1000));
    lines.push("gstAmount(1000, 12) = " + gstAmount(1000, 12));
    lines.push('fullName("Priya","Sharma") = ' + fullName("Priya", "Sharma"));
    lines.push("isAdult(17) = " + isAdult(17) + ", isAdult(21) = " + isAdult(21));
    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
