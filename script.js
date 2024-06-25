const form = document.querySelector(".newsletter");
const log = document.querySelector(".subbutton");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  log.textContent = "You're now subscribed to all things Cool Girls!";
});

function validateForm() {
    const name = document.forms["volunteer"]["name"].value;
    const email = document.forms["volunteer"]["email"].value;
    const message = document.forms["volunteer"]["message"].value;

    
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }


    return true;
}