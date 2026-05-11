(function () {
    const lines = [];

    function safeDivide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }
    [function () {
        return safeDivide(10, 2);
    }, function () {
        return safeDivide(3, 0);
    }].forEach(function (fn, i) {
        try {
            lines.push("call " + i + ": " + fn());
        } catch (e) {
            lines.push("call " + i + ": caught " + e.message);
        }
    });

    class NotFoundError extends Error {
        constructor(message) {
            super(message);
            this.name = "NotFoundError";
        }
    }
    function getUserById(id) {
        if (id === 1 || id === 2 || id === 3) {
            return { id: id, name: "user" + id };
        }
        throw new NotFoundError("User " + id + " not found");
    }
    try {
        lines.push("user 2: " + JSON.stringify(getUserById(2)));
        getUserById(99);
    } catch (err) {
        if (err instanceof NotFoundError) {
            lines.push("not found branch: " + err.message);
        } else {
            lines.push(err.message);
        }
    }

    const calc = {
        add: function (a, b) {
            return a + b;
        },
        subtract: function (a, b) {
            return a - b;
        },
        multiply: function (a, b) {
            return a * b;
        },
        divide: function (a, b) {
            return safeDivide(a, b);
        },
        calculate: function (op, a, b) {
            switch (op) {
                case "add":
                    return this.add(a, b);
                case "subtract":
                    return this.subtract(a, b);
                case "multiply":
                    return this.multiply(a, b);
                case "divide":
                    return this.divide(a, b);
                default:
                    throw new Error("Unknown op");
            }
        }
    };
    lines.push(
        "inline calc namespace: 5+3=" +
            calc.add(5, 3) +
            ", default calculate('multiply',4,5)=" +
            calc.calculate("multiply", 4, 5)
    );
    lines.push(
        "// Homework 3–4: In a project, move calc to calc.js and use export/import."
    );

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
