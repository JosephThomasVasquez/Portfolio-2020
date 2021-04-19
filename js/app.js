import sendEmail from "./sendEmailForm.js";

const nameElement = document.querySelector(".name");
const createLetterElement = document.createElement("span");
const codeBracket = document.querySelectorAll(".code");

// Contact Form
const formSubmit = document.getElementById("submit-form");
const nameField = document.getElementById("name-field");
const emailField = document.getElementById("email-field");
const messageField = document.getElementById("message-field");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  const contactData = {
    email: "",
    subject: "",
    message: "",
  };

  if (nameField.value !== "" && emailField.value !== '' && messageField.value !== '') {
	sendEmail(contactData);
  }

  //   const contactData = {
  //     email: "user@email.com",
  //     subject: "Did you get this?",
  //     message: "This is the message from the email if it was sent."
  //   };

  //   const { email, subject, message } = testContent;

});

// console.log(codeBracket);

const nameLetters = ["J", "o", "s", "e", "p", "h"];

insertLetter();

function insertLetter() {
  for (let i = 0; i < nameLetters.length; i++) {
    nameElement.innerHTML += `<span class="fader">${nameLetters[i]}</span>`;
  }
}

// Smooth scrolling function
$("a[href^='#']").click(function (e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top;

  $("body, html").animate(
    {
      scrollTop: position,
    },
    1000
  );
});
