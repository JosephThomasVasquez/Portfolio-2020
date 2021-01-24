const nameElement = document.querySelector('.name');
const createLetterElement = document.createElement('span');
const codeBracket = document.querySelectorAll('.code');
console.log(codeBracket);

const nameLetters = ['J', 'o', 's', 'e', 'p', 'h']

insertLetter();

function insertLetter() {

    for(let i = 0; i < nameLetters.length; i++) {

        nameElement.innerHTML += `<span class="fader">${nameLetters[i]}</span>`;
    
    }
}

// Smooth scrolling function
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 1000 );
});