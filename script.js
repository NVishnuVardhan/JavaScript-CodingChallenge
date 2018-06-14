function player1name() {
    var Player1 = prompt("Please enter the name of the first player");
    if(Player1 != null){
        document.getElementById("player1").innerHTML = Player1;
    }
}
function player2name() {
    var Player2 = prompt("Please enter the name of the second player");
    if(Player2 != null){
        document.getElementById("player2").innerHTML = Player2;
    }
}

var Player1;
var Player2;
var agep1;
var agep2;
var heightp1;
var heightp2;
var scoreofp1;
var scoreofp2;




function detailsOfPlayers() {
     agep1 = parseInt(prompt("Enter the age of Player1: "));
     agep2 = parseInt(prompt("Enter the age of Player2: "));
     heightp1 = parseInt(prompt("Enter the height of Player1: "));
     heightp2 = parseInt(prompt("Enter the height of Player2: "));
    
    document.getElementById("ageofp1").innerHTML = agep1;
    document.getElementById("ageofp2").innerHTML = agep2;
    document.getElementById("heightofp1").innerHTML = heightp1;
    document.getElementById("heightofp2").innerHTML = heightp2;
    
}



function score() {
    
    scoreofp1 = heightp1 + agep1*5;
    scoreofp2 = heightp2 + agep2*5;

    document.getElementById("scorep1").innerHTML = scoreofp1;
    document.getElementById("scorep2").innerHTML = scoreofp2;
    if(scoreofp1 > scoreofp2){
        alert("Player 1 is the winner");
    }
    else if(scoreofp1 < scoreofp2){
        alert("Player 2 is the winner");
    }
    else{
        alert("It's a tie!");
    }
    
}


