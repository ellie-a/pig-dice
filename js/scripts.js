// business logic
// debugger;

function Player () {
this.currentRoll = 0;
this.turn= 0;
}

Player.prototype.rollDice = function() {

  var roll = Math.floor((Math.random()*6)+1);
 this.currentRoll = roll
  if (roll > 1) {
    this.turn += roll;
  } else if (roll === 1) {
    this.turn = 0;
  }
}

// Dice.prototype.turnScore = function(diceRoll) {
//   // console.log(this.roll);
//   if (this.roll === 1) {
//     return this.turn = 0;
//   } else if (this.roll !== 1) {
//     return this.turn += this.roll;
//   } else if (this.turn >= 100) {
//     alert("game over");
//   }
// }


// user logic

$(document).ready(function() {

  var newRoll = new Player();
  $("button#playerRoll").click(function() {

    newRoll.rollDice();

    $("#rollOne").text(newRoll.currentRoll);
    $("#turnTotal").text(newRoll.turn);

  });
  //callback for holding

});
