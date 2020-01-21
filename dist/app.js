/*********************
      Variables
**********************/
let random = 1 + Math.floor(Math.random() * 10);
console.log(random);
let count = 1;

/*********************
    Element Hooks
**********************/
let input = document.querySelector("input");
let submit = document.querySelector("button:nth-of-type(1)");
let playAgain = document.querySelector("button:nth-of-type(2)");
let para = document.querySelector("p.message");

/*********************
      Submit Event
**********************/
submit.addEventListener("click", function(e) {
  e.preventDefault();

  console.log(count);

  if (Number(input.value) === random) {
    para.className = "win";
    if (input.value > 9) {
      para.className = "win double-digit";
    }
    gameOver(`${random} is correct, YOU WIN!`, `green`);
    console.log("You Win");
  } else if (count == 3) {
    para.className = "loss";
    gameOver(
      `Game Over, you lost. The<br> correct number was ${random}`,
      `red`
    );
    console.log("You lost");
  } else {
    // Show message
    para.className = "message";
    if (input.value > 9) {
      para.className = "message double-digit";
    }
    para.innerHTML = `${input.value} is not correct, ${3 - count} guesses left`;
    count++;
  }
});

function gameOver(msg, color) {
  // Disable input
  input.disabled = true;

  // Show message
  para.innerHTML = msg;

  // Remove submit button
  submit.style.display = "none";

  // Show to play again button
  playAgain.style.display = "inline";
}

/*********************
    Play Again Event
**********************/
playAgain.addEventListener("click", function(e) {
  // Reset number of tries
  count = 1;

  // Enable input
  input.disabled = false;

  // Remove message
  para.innerHTML = "";

  // Show submit button
  submit.style.display = "inline";

  // Show to play again button
  playAgain.style.display = "none";
});
