let input = document.getElementById("inp")
let email = document.getElementById("email")
let mess = document.getElementById("mess")
let error = document.querySelector(".error")
let sub = document.getElementById("sub")

sub.addEventListener("click", function(event) {
    if (input.value.trim() === "" || email.value.trim() === "" || mess.value.trim() === "") {
        event.preventDefault()
        error.innerHTML = "You have an error. All fields are required.";
    } else if (!/^[a-zA-Z\._\-0-9]*[a-zA-z]*[\.][a-z]{2,4}$/.test(email.value)) {
        event.preventDefault() // منع الإرسال إذا كان البريد غير صحيح
        error.textContent = "Invalid email format";    
    }
})