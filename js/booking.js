const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

e.preventDefault()

const data = new FormData(form)

const name = sanitize(data.get("name"))
const email = sanitize(data.get("email"))

document.getElementById("success").innerText =
"Termin Anfrage gesendet!"

})

function sanitize(text){

return text
.replace(/</g,"&lt;")
.replace(/>/g,"&gt;")

}