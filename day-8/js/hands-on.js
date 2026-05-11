(function () {
    const lines = [];

    lines.push("=== Task 1: Student object ===");
    const student = {
        name: "Anaya",
        age: 21,
        city: "Jaipur",
        course: "B.Tech",
        marks: [82, 88, 91]
    };
    lines.push("full student: " + JSON.stringify(student));
    lines.push("name: " + student.name + ", age: " + student.age + ", first mark: " + student.marks[0]);
    student.email = "anaya@example.com";
    student.age = 22;
    delete student.city;
    lines.push("after edits: " + JSON.stringify(student));

    lines.push("");
    lines.push("=== Task 2: bankAccount methods ===");
    const bankAccount = {
        holder: "Aarav",
        balance: 5000,
        deposit: function (amount) {
            this.balance += amount;
            return this.balance;
        },
        withdraw: function (amount) {
            if (this.balance < amount) {
                return "Insufficient funds";
            }
            this.balance -= amount;
            return this.balance;
        }
    };
    lines.push("deposit 1000 → " + bankAccount.deposit(1000));
    lines.push("withdraw 2000 → " + bankAccount.withdraw(2000));
    lines.push("withdraw 10000 → " + bankAccount.withdraw(10000));

    lines.push("");
    lines.push("=== Task 3: Destructuring product ===");
    const product = { id: 101, name: "Laptop", price: 60000, brand: "Dell", stock: 5 };
    const { name: pname, price } = product;
    const { brand: make } = product;
    const { warranty = "1 year" } = product;
    lines.push("name=" + pname + " price=" + price + " make=" + make + " warranty=" + warranty);

    lines.push("");
    lines.push("=== Bonus: keys / values / entries ===");
    lines.push("keys: " + JSON.stringify(Object.keys(student)));
    lines.push("values: " + JSON.stringify(Object.values(student)));
    Object.entries(student).forEach(function (entry) {
        lines.push(entry[0] + ": " + entry[1]);
    });
    lines.push("property count: " + Object.keys(student).length);

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
