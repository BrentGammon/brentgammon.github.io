

  var forenameName = ['Kristina','Devora','Arielle','Tiny','Kamilah','Kenya','Blossom','Heidy','Kirstie','Raisa','Rosette','Takako',
 'Calandra','Efren','Sanford','Cassandra', 'Venus','Collin','Lucrecia','Marcellus','Yee','Carola','Shelly','Aurore','Rochelle',
 'Ardell','Samira','Ocie','Hyacinth','Dexter','Ezequiel','Lyda','Carmelina','Bernetta','Theressa',
 'Ryann','Dakota','Ellena','Slyvia','Cassi','Leigh','Vern','Nery','Jame','Tereasa','Jung','Wilhelmina','Jules','Nu','Brandee' ];
 
 var age = [1,2,3,4,5,6,7,8,9,10,
11,12,13,14,15,16,17,18,19,20,
21,22,23,24,25,26,27,28,29,30,
31,32,33,34,35,36,37,38,39,40,
41,42,43,44,45,46,47,48,49,50,
51,52,53,54,55,56,57,58,59,60,
61,62,63,64,65,66,67,68,69,70,
71,72,73,74,75,76,77,78,79,80,
81,82,83,84,85,86,87,88,89,90,
91,92,93,94,95,96,97,98,99,100];


var userArray = [];


var computerWin = 0;
var playerWin = 0;
var gameDraw = 0;


function userArrayss(){
	var value = document.getElementById("text").value;
	userArray.push(value);
	
}

function displayArray(){
	alert("Size: " + userArray.length + ",  Values: " + userArray);
	
}


function randomPerson(){
 var nameLength = forenameName.length;
 var ageLength = age.length;
 var rName = Math.floor((Math.random(nameLength) * 50));
 var rAge = Math.floor((Math.random(ageLength) * 100));
 
 document.getElementById("person").innerHTML = "My Name is " + forenameName[rName] + " And I'm " + age[rAge] + " Years old." ;
 }

function rockpaperscissors(value){
	var move =["Rock","Paper","Scissors"];
	var item = Math.floor((Math.random(move) * 3));
	var computerMove = move[item];
	var userMove = value;
	
	switch(userMove + computerMove){
	case "RockRock":
	gameDraw++;
	document.getElementById("game1").innerHTML = "Computer: Rock Player: Rock - DRAW!";
	break;
	case "PaperPaper":
	gameDraw++;
	document.getElementById("game1").innerHTML = "Computer: Paper Player: Paper - DRAW!";
	break;
	case "ScissorsScissors":
	gameDraw++;
	document.getElementById("game1").innerHTML = "Computer: Scissors Player: Scissors - DRAW!";
	break;
	case "ScissorsPaper":
	playerWin++;
	document.getElementById("game1").innerHTML = "Computer: Paper Player: Scissors - YOU WIN!";
	break;
	case "RockScissors":
	playerWin++;
	document.getElementById("game1").innerHTML = "Computer: Scissors Player: Rock - YOU WIN!";
	break;
	case "PaperRock":
	playerWin++;
	document.getElementById("game1").innerHTML = "Computer: Rock Player: Paper - YOU WIN!";
	break;
	case "ScissorsRock":
	computerWin++;
	document.getElementById("game1").innerHTML = "Computer: Rock Player: Scissors - YOU LOSE!";
	break;
	case "PaperScissors":
	computerWin++;
	document.getElementById("game1").innerHTML = "Computer: Scissors Player: Paper - YOU LOSE!";
	break;
	case "RockPaper":
	computerWin++;
	document.getElementById("game1").innerHTML = "Computer: Paper Player: Rock - YOU LOSE!";
	break;
	
	
	}
}

function winCount(){
	document.getElementById("winInfo").innerHTML = "Computer: " + computerWin + " Player: " + playerWin + " Draw: " + gameDraw;
}



