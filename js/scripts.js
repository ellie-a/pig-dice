// business logic
// debugger;

function Player () {
this.currentRoll = 0;
this.turn= 0;
this.gameScore= 0;
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

Player.prototype.totalScore = function() {
    this.gameScore = this.turn; //needs to add new turn to overall gameScore
}


// user logic

$(document).ready(function() {

  var newRoll = new Player();

  $("button#playerRoll").click(function() {

    newRoll.rollDice();

    $("#rollOne").text(newRoll.currentRoll);
    $("#turnTotal").text(newRoll.turn);

  });
  
  $("button#playerHold").click(function() {

    newRoll.totalScore();

    $("#playerScore").text(newRoll.gameScore);


  });

  //callback for holding

});
