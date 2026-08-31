const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const lengthItem = document.getElementById("lengthItem");
const numberItem = document.getElementById("numberItem");
const uppercaseItem = document.getElementById("uppercaseItem");

password.addEventListener("input", () => {
    if (password.value.length >= 8) {
        lengthItem.classList.add("valid");
    } else {
        lengthItem.classList.remove("valid");
    }
    if (/\d/.test(password.value)) {
        numberItem.classList.add("valid");
    } else {
        numberItem.classList.remove("valid");
    }
    if (/[A-Z]/.test(password.value)) {
        uppercaseItem.classList.add("valid");
    } else {
        uppercaseItem.classList.remove("valid");
    }
});

password.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        password.value = "";

        lengthItem.classList.remove("valid");
        numberItem.classList.remove("valid");
        uppercaseItem.classList.remove("valid");
    }

});
togglePassword.addEventListener("click", ()=> {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});