

// Generate random number for dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").src = randomImage1;

// Generate random number for dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").src = randomImage2;

// Determine the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🥳Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins!🥳";
} else {
    document.querySelector("h1").textContent = "Draw";
}



// $(document).on("keypress" , function() {

//  diceOne();

// })

// $("button").on("click" , function () {
//   $("button").addClass("pressed")
//   setTimeout(() => {
//   $("button").removeClass("pressed")
//   }, 100);

//   diceOne();
// })
