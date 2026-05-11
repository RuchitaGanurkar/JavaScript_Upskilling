(function () {
    const lines = [];
    const names = ["Priya", "Aarav", "Riya"];
    const greetings = names.map(function (n) {
        return "Hello, " + n;
    });
    lines.push("greetings: " + JSON.stringify(greetings));

    const nums = [2, 3, 4, 5, 6, 7, 8];
    const evenSum = nums.filter(function (n) {
        return n % 2 === 0;
    }).reduce(function (a, n) {
        return a + n;
    }, 0);
    lines.push("even sum: " + evenSum);

    const arr = [3, 1, 4, 1, 5, 9, 2, 6];
    const maxSpread = Math.max(...arr);
    const maxReduce = arr.reduce(function (m, x) {
        return x > m ? x : m;
    }, arr[0]);
    lines.push("max (spread-style via apply): " + maxSpread + ", max reduce: " + maxReduce);

    function average(list) {
        const sum = list.reduce(function (a, x) {
            return a + x;
        }, 0);
        return sum / list.length;
    }
    lines.push("average([10,20,30]): " + average([10, 20, 30]));

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
