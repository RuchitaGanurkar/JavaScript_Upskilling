(function () {
    "use strict";
    const lines = [];

    lines.push("Task 1 — Array prototype chain");
    const arr = [1, 2, 3];
    const p1 = Object.getPrototypeOf(arr);
    const p2 = Object.getPrototypeOf(p1);
    const p3 = Object.getPrototypeOf(p2);
    lines.push("getPrototypeOf(arr) is Array.prototype → " + (p1 === Array.prototype));
    lines.push("next is Object.prototype → " + (p2 === Object.prototype));
    lines.push("next ends chain → " + String(p3));
    lines.push("Chain (comment): arr → Array.prototype → Object.prototype → null");

    lines.push("");
    lines.push("Task 2 — vehicle / car / bike via Object.create");
    const vehicle = {
        start() {
            return this.name + " starting";
        }
    };
    const car = Object.create(vehicle);
    car.name = "Tata Nexon";
    const bike = Object.create(vehicle);
    bike.name = "Royal Enfield";
    lines.push(car.start());
    lines.push(bike.start());
    lines.push("car hasOwn name → " + car.hasOwnProperty("name") + "; 'name' in car → " + ("name" in car));
    lines.push("car hasOwn start → " + car.hasOwnProperty("start") + "; 'start' in car → " + ("start" in car));

    lines.push("");
    lines.push("Task 3 — Person / Student constructors");
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        return "Hi, I'm " + this.name;
    };
    function Student(name, school) {
        Person.call(this, name);
        this.school = school;
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;
    Student.prototype.study = function () {
        return this.name + " studies at " + this.school;
    };
    const st = new Student("Riya", "IIT Delhi");
    lines.push(st.greet());
    lines.push(st.study());

    lines.push("");
    lines.push("Bonus — hasOwnProperty vs in");
    const dog = Object.create({ species: "Canis" });
    dog.name = "Bruno";
    lines.push("hasOwn name → " + dog.hasOwnProperty("name"));
    lines.push("hasOwn species → " + dog.hasOwnProperty("species"));
    lines.push("'name' in dog → " + ("name" in dog));
    lines.push("'species' in dog → " + ("species" in dog));
    lines.push("'toString' in dog → " + ("toString" in dog));
    lines.push("Rule: use hasOwn / Object.hasOwn for own keys; use 'in' when inherited keys matter too.");

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
