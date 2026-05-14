(function () {
    "use strict";
    const lines = [];

    lines.push("Question 1 — user.greet predictions");
    lines.push("Predict: user.greet() → user's name; fn() → TypeError (strict); .call({ name: 'X' }) → 'X'.");
    const user = {
        name: "Priya",
        greet() {
            return this.name;
        }
    };
    const fn = user.greet;
    let fnResult = "";
    try {
        fnResult = String(fn());
    } catch (e) {
        fnResult = e.name + ": " + e.message;
    }
    lines.push(
        "Actual: user.greet() → " + user.greet() + "; fn() → " + fnResult + "; call → " + user.greet.call({ name: "X" })
    );

    lines.push("");
    lines.push("Question 2 — class method callback, three fixes");
    class Counter {
        constructor() {
            this.count = 0;
        }
        inc() {
            this.count += 1;
            return this.count;
        }
    }
    //  bind 
    const c1 = new Counter();
    const incBound = c1.inc.bind(c1);
    lines.push("bind: " + [incBound(), incBound(), incBound()].join(", "));
    // arrow 
    const c2 = new Counter();
    const wrap = () => c2.inc();
    lines.push("arrow wrapper: " + [wrap(), wrap(), wrap()].join(", "));
    // class field arrow 
    class CounterArrow {
        count = 0;
        inc = () => {
            this.count += 1;
            return this.count;
        };
    }
    const c3 = new CounterArrow();
    const incField = c3.inc;
    lines.push("class field arrow: " + [incField(), incField(), incField()].join(", "));

    lines.push("");
    lines.push("Question 3 — sum with apply");
    function sum(...nums) {
        return nums.reduce(function (a, b) {
            return a + b;
        }, 0);
    }
    const arr = [1, 2, 3, 4, 5];
    lines.push("Answer: sum.apply(null, arr) → " + sum.apply(null, arr));
    lines.push("Why apply: spreads an array as positional arguments without manual rest/spread at the call site.");

    lines.push("");
    lines.push("Question 4 — arrow and bind");
    const f = () => {
        return this;
    };
    const bound = f.bind({ x: 1 });
    lines.push("Answer: f() → " + String(f()) + "; bound() → " + String(bound()) + " (same as f).");
    lines.push("Why: arrow functions have no own this; bind cannot change lexical this.");


    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
