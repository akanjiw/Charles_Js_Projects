alert('Welcome to the Number Guessing Game!\nInpect the page the acces the console.');
console.log('Week 1: Project 2\nNumber Guessing Game');

document.querySelector('input').value = 0; // Reset the input field


function checkGuess() {
  document.querySelector('span').innerText = 0;

  let userGuess = parseInt(document.getElementById('guess').value);

  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(`You Chosed: ${userGuess}\nRandom choice was: ${randomNumber}`);

  if (userGuess === randomNumber) {
    document.getElementById('result').innerText = "Congratulations..! You guessed the right number!";
  } else {
    if (userGuess <= 0 || userGuess > 10) {
      document.getElementById('result').innerText = "Please enter a number between 1 and 10";
    } else {
      document.getElementById('result').innerText = `Sorry, the number was: ${randomNumber}`;
    }
  }
}
