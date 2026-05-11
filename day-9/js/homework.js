(function () {
    const lines = [];
    const person = { first: "Priya", last: "Sharma", city: "Jaipur" };
    lines.push(`${person.first} ${person.last} from ${person.city}`);

    const arr = [1, 2, 3, 4, 5, 6];
    const [head, ...tail] = arr;
    lines.push("head=" + head + " tail=" + JSON.stringify(tail));

    function multiply(...nums) {
        return nums.reduce(function (a, n) {
            return a * n;
        }, 1);
    }
    lines.push("multiply(2,3,4)=" + multiply(2, 3, 4));

    const base = { a: 1, b: 2 };
    const next = { ...base, b: 99 };
    lines.push("base.b=" + base.b + " next.b=" + next.b);

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
