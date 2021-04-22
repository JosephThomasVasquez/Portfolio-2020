import sendEmail from "./sendEmailForm.js";

const nameElement = document.querySelector(".name");
const createLetterElement = document.createElement("span");
const codeBracket = document.querySelectorAll(".code");

// Contact Form
const formSubmit = document.getElementById("submit-form");
const userInputFields = document.querySelectorAll(".user-input-field");

let contactData = {};

userInputFields.forEach((input) => {
  input.addEventListener("input", (e) => {
    const { name, value } = e.target;
    contactData[name] = value;
  });
});

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  if (contactData) {
    console.log("Email is sent!", contactData);
    sendEmail(contactData);

	contactData = {};
	userInputFields.forEach((input) => {
		input.value = ';'
	  });
	console.log(contactData);
  }

});

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
