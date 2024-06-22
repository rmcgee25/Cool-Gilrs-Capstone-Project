function newsSub(event) {
    log.textContent = "You are now subscribed to all things Cool Girls!";
    event.preventDefault();
}

const form = document.querySelector(".newsletter");
const log = document.querySelector(".subbutton"); 

log.addEventListener("click", newsSub);

form.addEventListener("submit", function(event) {
    event.preventDefault();
});