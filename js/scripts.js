// business logic
// debugger;

function Players () {
//this.user = playerName
// this.playerOne = player1;
// this.playerTwo: player2;
this.currentRoll = 0;
this.turn= 0;
this.gameScore= 0;
// this.playerTwoGameScore= 0;
}



Players.prototype.rollDice = function() {

  var roll = Math.floor((Math.random()*6)+1);
  this.currentRoll = roll
  if (roll > 1) {
    this.turn += roll;
  } else if (roll === 1) {
    this.turn = 0;
  }
}

Players.prototype.totalScore = function() {
    this.gameScore = this.gameScore + this.turn;
    // this.playerTwoGameScore = this.playerTwoGameScore + this.turn;
    if (this.gameScore >= 100) {
      alert("Player 1 wins!");
      this.gameScore = 0;
    }
    // else if (this.playerTwoGameScore >= 100) {
    //   alert("Player 2 wins!");
    //   this.playerTwoGameScore = 0;
    //
    // }
}

//var playerNames = [];


// user logic

$(document).ready(function() {

  // var playerNumber;
  // var player = new Players (playerNumber);
  // playerNames.push(player);
  // var player2NewRoll = new Players (player2);
 console.log(playerNames)


  $("button#playerRoll").click(function() {

    newroll.rollDice();

    $("#player1NewRoll").text(newRoll.currentRoll);
    $("#turnTotal").text(newRoll.turn);

  });

  $("button#playerHold").click(function() {


    newRoll.totalScore();

    $("#playerScore").text(newRoll.gameScore);

  });

  // player 2 here

//   $("button#playerRoll1").click(function() {
//
//     player2NewRoll.rollDice();
//
//     $("#rollOne1").text(player2NewRoll.currentRoll);
//     $("#turnTotal1").text(player2NewRoll.turn);
//
//   });
//
//   $("button#playerHold1").click(function() {
//
//     player2NewRoll.totalScore();
//
//     $("#playerTwoScore").text(player2NewRoll.gameScore);
//
//   });
//
//
//
//
// });
