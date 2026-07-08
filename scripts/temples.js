document.querySelector('#lastModified').innerHTML = `Last Modified: ${document.lastModified}`;
document.querySelector('#currentYear').innerHTML = new Date().getFullYear();

const hamburgerBtn = document.querySelector("#hamburger")
const header = document.querySelector("header")

hamburgerBtn.addEventListener("click", function (event) {
    header.classList.toggle('open')
})