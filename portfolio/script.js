const typing = document.querySelector(".typing");

const words = [
  "Frontend Developer",
  "Web Designer",
  "Tech Enthusiast",
  "Future MERN Developer"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect(){

  let currentWord = words[wordIndex];

  typing.textContent =
  currentWord.slice(0, charIndex++);

  if(charIndex > currentWord.length){

    charIndex = 0;

    wordIndex++;

    if(wordIndex >= words.length){
      wordIndex = 0;
    }

  }

  setTimeout(typeEffect, 200);
}

if(typing){
  typeEffect();
}