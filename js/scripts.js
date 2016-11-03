// business logic
// debugger;

function Player1 () {
this.currentRoll = 0;
this.turn= 0;
this.gameScore= 0;
}



Player1.prototype.rollDice = function() {
  var roll = Math.floor((Math.random()*6)+1);
  this.currentRoll = roll
  if (roll > 1) {
    this.turn += roll;
  } else if (roll === 1) {
    this.turn = 0;
    $(".playerOne").hide();
    $(".playerTwo").show();
  }
}

Player1.prototype.totalScore = function() {
    this.gameScore = this.gameScore + this.turn;
}


// player 2 business logic

function Player2 () {
this.currentRoll = 0;
this.turn= 0;
this.gameScore= 0;
}



Player2.prototype.rollDice = function() {
  var roll = Math.floor((Math.random()*6)+1);
  this.currentRoll = roll
  if (roll > 1) {
    this.turn += roll;
  } else if (roll === 1) {
    this.turn = 0;
    $(".playerTwo").hide();
    $(".playerOne").show();
  }
}

Player2.prototype.totalScore = function() {
    this.gameScore = this.gameScore + this.turn;
}



// user logic

$(document).ready(function() {

  var newRoll = new Player1();
  var newRoll1 = new Player2();


  $("button#playerRoll").click(function() {

    newRoll.rollDice();

    $("#rollOne").text(newRoll.currentRoll);
    $("#turnTotal").text(newRoll.turn);

  });

  $("button#playerHold").click(function() {

    newRoll.totalScore();

    $("#playerScore").text(newRoll.gameScore);

    $(".playerOne").hide();
    $(".playerTwo").show();
  });

  // player 2 here

  $("button#playerRoll1").click(function() {

    newRoll1.rollDice();

    $("#rollOne1").text(newRoll1.currentRoll);
    $("#turnTotal1").text(newRoll1.turn);

  });

  $("button#playerHold1").click(function() {

    newRoll1.totalScore();

    $("#playerTwoScore").text(newRoll1.gameScore);

    $(".playerTwo").hide();
    $(".playerOne").show();
  });




});
