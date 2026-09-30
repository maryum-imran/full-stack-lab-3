let nameInput = document.getElementById("studentName");
let marksInput = document.getElementById("marks");
let button = document.getElementById("calculate");
let result = document.getElementById("result");

button.addEventListener("click", function() {
    let name = nameInput.value;
    let marks = Number(marksInput.value);

    if (name == "" || marksInput.value == "") {
        result.textContent = "Please enter student name and marks.";
        result.style.color = "red";
    }
    else if (marks < 0 || marks > 100) {
        result.textContent = "Marks must be between 0 and 100.";
        result.style.color = "red";
    }
    else {
        let grade;

        if (marks >= 85) {
            grade = "A";
        }
        else if (marks >= 70) {
            grade = "B";
        }
        else if (marks >= 50) {
            grade = "C";
        }
        else {
            grade = "F";
        }

        result.textContent = `${name} scored ${marks} → Grade ${grade}`;

        if (grade == "F") {
            result.style.color = "red";
        }
        else {
            result.style.color = "green";
        }
    }
});