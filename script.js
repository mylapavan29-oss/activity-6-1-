
// Input Event
let nameInput = document.getElementById("name");

nameInput.addEventListener("input", function() {
    document.getElementById("displayName").innerHTML =
        "Student Name: " + nameInput.value;
});


// Mouseover Event
let button = document.getElementById("submitBtn");

button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "green";
});


// Mouseout Event
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "blue";
});


// Keydown Event
document.addEventListener("keydown", function(event) {
    document.getElementById("lastKey").innerHTML =
        "Last Key Pressed: " + event.key;
});


// Submit Event and Validation
let form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();
    let course = document.getElementById("course").value.trim();

    let error = document.getElementById("error");
    let success = document.getElementById("success");

    error.innerHTML = "";
    success.innerHTML = "";

    if (name === "" || email === "" ||
        age === "" || course === "") {

        error.innerHTML = "Please fill in all required fields.";

    } else if (Number(age) <= 0) {

        error.innerHTML = "Please enter a valid age.";

    } else {

        success.innerHTML = "Registration Successful!";

        form.reset();

        document.getElementById("displayName").innerHTML = "";
    }

});
