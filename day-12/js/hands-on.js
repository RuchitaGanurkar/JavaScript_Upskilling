(function () {
    const lines = [];

    lines.push("=== Task 1: safeParse ===");
    function safeParse(str) {
        try {
            return JSON.parse(str);
        } catch (err) {
            console.log("Invalid JSON:", err.message);
            return null;
        }
    }
    lines.push("valid → " + JSON.stringify(safeParse('{"name":"Priya"}')));
    lines.push("broken → " + String(safeParse('{"name":"Priya"')));

    lines.push("");
    lines.push("=== Task 2: setAge ===");
    function setAge(age) {
        if (typeof age !== "number") {
            throw new Error("Age must be a number");
        }
        if (age < 0 || age > 120) {
            throw new Error("Age must be 0–120");
        }
        return age;
    }
    function trySetAge(label, age) {
        try {
            lines.push(label + " → " + setAge(age));
        } catch (e) {
            lines.push(label + " → caught: " + e.message);
        }
    }
    trySetAge("setAge(25)", 25);
    trySetAge('setAge("twenty")', "twenty");
    trySetAge("setAge(200)", 200);

    lines.push("");
    lines.push("=== Task 3: ValidationError ===");
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError";
        }
    }
    function validateEmail(email) {
        if (email.indexOf("@") === -1) {
            throw new ValidationError("Invalid email");
        }
        return true;
    }
    function tryEmail(em) {
        try {
            validateEmail(em);
            lines.push(em + " → ok");
        } catch (err) {
            if (err instanceof ValidationError) {
                lines.push(em + " → ValidationError: " + err.message);
            } else {
                lines.push(em + " → " + err.message);
            }
        }
    }
    tryEmail("priya@example.com");
    tryEmail("priya-no-at");

    lines.push("");
    lines.push(
        "Bonus (modules): real multi-file imports need type=module + a server; skipped in this single-file setup."
    );

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
