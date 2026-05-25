const typing = document.querySelector(".typing");

const words = [
  "Frontend Developer",
  "Web Designer",
  "Tech Enthusiast",
  "MERN Developer"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect() {

  let currentWord = words[wordIndex];

  typing.textContent =
    currentWord.slice(0, charIndex++);

  if (charIndex > currentWord.length) {

    charIndex = 0;

    wordIndex++;

    if (wordIndex >= words.length) {
      wordIndex = 0;
    }

  }

  setTimeout(typeEffect, 200);
}

if (typing) {
  typeEffect();
}
function sendMessage(event) {

  event.preventDefault();

  const popup =
    document.getElementById(
      "popup-message");

  // SHOW POPUP

  popup.classList.add("show");

  // CLEAR FORM

  document
    .querySelector(".contact-form")
    .reset();

  // HIDE POPUP

  setTimeout(() => {

    popup.classList.remove(
      "show");

  }, 2000);
}
g