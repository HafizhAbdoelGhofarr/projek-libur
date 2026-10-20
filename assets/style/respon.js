const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

let username;
let description;
document.getElementById("submit").onclick = function() {

    username = document.getElementById("name").value;
    description = document.getElementById("message").value;

    
    document.getElementById("heroname").textContent = `Hi, I'm ${username}`;
    document.getElementById("herodesc").textContent = description;
    console.log(username, description);
}
