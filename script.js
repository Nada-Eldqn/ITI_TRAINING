


"use strict";
window.onload = function() {
    alert("Welcome to my site");
    var name = prompt("Enter your name");
    document.getElementById("welcome").textContent = "Welcome " + name;
}

function sumNumbers(num1, num2) {
    return num1 + num2;
}
