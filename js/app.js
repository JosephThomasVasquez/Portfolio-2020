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

// codeBracket.forEach(function (bracket) {
//     bracket.addEventListener('mouseover', function () {

//         bracket.classList.toggle('bracket');
        
//     })
// });
