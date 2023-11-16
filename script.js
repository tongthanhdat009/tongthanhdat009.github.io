const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".login");
const Iconclose = document.querySelector(".icon-close");
let login = document.getElementsByClassName("dangnhap")[0];
let signup = document.getElementsByClassName("dangki")[0];

registerLink.addEventListener("click", () => {
    login.style.display = "none";
    signup.style.display = "block";
});

loginLink.addEventListener("click", () => {
    signup.style.display = "none";
    login.style.display = "block";
});

btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
});

Iconclose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});

function checkInputLength(input) {
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10);
    }
}
