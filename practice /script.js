let button = document.getElementById("login");
let message = document.getElementById("message");

button.onmouseover = function () {
    button.textContent = "are you ready?";
};

button.onmouseout = function () {
    button.textContent = "Log In";
};

button.onclick = function () {
    message.textContent = "Welcome!";
};
