(function () {
    const lines = [];

    let count = 0;
    const counterBtn = document.querySelector("#counter-btn");
    const countSpan = document.querySelector("#count");
    counterBtn.addEventListener("click", function () {
        count += 1;
        countSpan.textContent = String(count);
        if (count >= 10) {
            counterBtn.textContent = "Stop clicking!";
        }
    });
    lines.push("Task 1: click counter wired (try the button).");

    const liveInput = document.querySelector("#live-input");
    const preview = document.querySelector("#preview");
    liveInput.addEventListener("input", function () {
        const v = liveInput.value;
        preview.textContent = v.length === 0 ? "Start typing..." : v;
    });
    lines.push("Task 2: live preview on #live-input.");

    const form = document.querySelector("#reg-form");
    const nameField = document.querySelector("#name-field");
    const welcome = document.querySelector("#welcome");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = nameField.value.trim();
        welcome.textContent =
            name.length === 0 ? "Please enter your name" : "Welcome, " + name + "!";
    });
    lines.push("Task 3: form submit handled (try submit).");

    const todoList = document.querySelector("#todo-list");
    todoList.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("done");
        }
    });
    const extra = document.createElement("li");
    extra.textContent = "New task (delegation)";
    todoList.appendChild(extra);
    lines.push("Task bonus: delegation on #todo-list; new li added.");

    document.getElementById("out").textContent = lines.join("\n");
    console.log(lines.join("\n"));
})();
