(function () {
    "use strict";
    const lines = [];

    lines.push("Task 1 — Predict this");
    lines.push('Predict: user.greet() → logs "Priya"; g() → TypeError in strict (no receiver).');
    const logNames = [];
    const user = {
        name: "Priya",
        greet() {
            logNames.push(this.name);
        }
    };
    user.greet();
    const g = user.greet;
    let gError = "";
    try {
        g();
    } catch (e) {
        gError = e.name + ": " + e.message;
    }
    lines.push("Actual: after user.greet() log → " + logNames[0] + "; g() → " + (gError || "no error"));
    lines.push(
        "Why g() lost this: greet is invoked as a plain function (default binding), not as user.greet(), so this is not user."
    );

    lines.push("");
    lines.push("Task 2 — Timer, three fixes (same behavior as setInterval would get per tick)");
    class Timer {
        constructor() {
            this.sec = 0;
        }
        tick() {
            this.sec += 1;
            return this.sec;
        }
    }
    const tBind = new Timer();
    const tickBound = tBind.tick.bind(tBind);
    lines.push("Fix 1 bind → " + [tickBound(), tickBound(), tickBound()].join(", "));
    const tWrap = new Timer();
    lines.push(
        "Fix 2 arrow wrapper → " +
            [(() => tWrap.tick())(), (() => tWrap.tick())(), (() => tWrap.tick())()].join(", ")
    );
    class TimerArrow {
        sec = 0;
        tick = () => {
            this.sec += 1;
            return this.sec;
        };
    }
    const tField = new TimerArrow();
    const ref = tField.tick;
    lines.push("Fix 3 class field arrow (called like setInterval ref) → " + [ref(), ref(), ref()].join(", "));

    lines.push("");
    lines.push("Task 3 — call / apply / bind");
    function describe(role, city) {
        return this.name + " is a " + role + " from " + city;
    }
    const u = { name: "Aarav" };
    lines.push("call → " + describe.call(u, "mentor", "Jaipur"));
    lines.push("apply → " + describe.apply(u, ["mentor", "Jaipur"]));
    const devBound = describe.bind(u, "developer");
    lines.push("bind (role preset) → " + devBound("Pune") + " | " + devBound("Mumbai"));
    lines.push(
        "Difference: call and apply invoke now (args listed vs array); bind returns a new function for later without invoking immediately."
    );

    lines.push("");
    lines.push("Bonus — printRegular vs printArrow");
    const captured = [];
    const team = {
        members: ["Priya", "Aarav", "Riya"],
        printRegular() {
            this.members.forEach(function (m) {
                captured.push("regular:" + String(this && this.members && this.members.length) + ":" + m);
            });
        },
        printArrow() {
            this.members.forEach((m) => {
                captured.push("arrow:" + this.members.length + ":" + m);
            });
        }
    };
    team.printRegular();
    team.printArrow();
    lines.push("Regular forEach callback has its own this (undefined here) → broken length.");
    lines.push("Arrow inherits this from printArrow → team → length 3.");
    lines.push("Captured → " + captured.join(" | "));

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
