const forename = document.getElementById("forename");
const surname = document.getElementById("surname");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const edu = document.getElementById("education-field");
const qual = document.getElementById("qualifications");
const addinf = document.getElementById("additional-info");
const submitBut = document.getElementById("submit");
const form = document.getElementById("form");
const allInputs = document.querySelectorAll('input')

form.addEventListener("submit", function (e) {
  let messages = [];
  if (allInputs.value === "" || allInputs.value == null) {
    messages.push("This box cannot be empty");
  }

  if (messages.length > 0) {
    e.preventDefault();
    forename.placeholder = messages.join(", ");
    surname.placeholder = messages.join(", ");
    postcode.placeholder = messages.join(", ");
    phone.placeholder = messages.join(", ");
    email.placeholder = messages.join(", ");
  }

  setTimeout(function () {
    forename.placeholder = `Your ${forename.name}`;
    surname.placeholder = `Your ${surname.name}`;
    postcode.placeholder = `Your ${postcode.name}`;
    phone.placeholder = `Your ${phone.name}`;
    email.placeholder = `Your ${email.name}`;
  }, 2500);
});

submitBut.addEventListener('click', function() {
  submitBut.style.translate = '5px 5px'
  submitBut.style.boxShadow = '0px 0px black'

  setTimeout(function() {
    submitBut.style.translate = '0px 0px'
    submitBut.style.boxShadow = '5px 5px black'
  }, 500)
})
