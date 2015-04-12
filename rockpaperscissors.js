	//Written by: Christopher Pierce, 2015 for OKCODERS class
	//TODO: Make more specific errors
	//	    Make the html page display a counter for the win / loss ratio
	//		Make the win counter for under each of the 3 pieces (rock, paper, scissors)
	//		Make the winning piece change pictures to a more victorious picture
	//rock paper scissors game

function load (){
	var userChoice = "";
	var computerChoice = "";
	var validChoice = true;
	//var test = prompt("type yes");
	//console.log(test)
	//choice1 is userChoice, choice2 is the computerChoice
	var compare = function (computerChoice, userChoice){
		var playMore = "yes";

		while(playMore == "yes"){

			var userChoice = prompt("Do you choose rock, paper or scissors?");
			var computerChoice = Math.random(0,1);

			//map a random number to the name of one of 3 possibilities
			if (computerChoice < 0.34) {
				computerChoice = "rock";
			} else if(computerChoice <= 0.67) {
				computerChoice = "paper";
			} else {
				computerChoice = "scissors";
			} alert("Computer: " + computerChoice);


			if ( !( computerChoice == "rock" || computerChoice == "scissors" || computerChoice == "paper" ) ) {
				alert("Invalid choice for the computer.");
				validChoice = false;
				playMore = prompt("Type yes to continue.");
				console.log(playMore)
			}

			if ( !( userChoice == "rock" || userChoice == "scissors" || userChoice == "paper" ) ) {
				alert("Invalid choice from you.");
				validChoice = false;
				playMore = prompt("Type yes to continue.");
				console.log(playMore)				
			}

			if ( validChoice ) {
				if ( computerChoice == userChoice ) {
					alert("tied");
					playMore = prompt("Type yes to continue.");
					console.log(playMore);
				} else if ( ( computerChoice == "rock" && userChoice == "scissors" )
						 || ( computerChoice == "paper" && userChoice == "rock" )
						 || ( computerChoice == "scissors" && userChoice == "paper" ) ) {
					alert("The Computer Wins.");
					playMore = prompt("Type yes to continue.");
					console.log(playMore);
				} else {
					alert("You win!");
					playMore = prompt("Type yes to continue.");
					console.log(playMore);
				}
			}	//end if(validChoice)
		}	//end while
	};	//end of compare();
	
	compare(computerChoice, userChoice);
}	//end of load()