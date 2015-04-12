	//TODO: make more specific errors
	//rock paper scissors game
	//playMore never loops back to the start of the function...
function load (){
	var userChoice ="";
	var computerChoice = "";
	var validChoice = true;
	var test = prompt("type yes");
	console.log(test)
	//choice1 is userChoice, choice2 is the computerChoice
	var compare = function (computerChoice, userChoice){
		var playMore = "yes";
		while(playMore == "yes"){

			var userChoice = prompt("Do you choose rock, paper or scissors?");
			var computerChoice = Math.random(0,1);
			//alert(computerChoice);

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
				playMore = "no";
			}

			if ( !( userChoice == "rock" || userChoice == "scissors" || userChoice == "paper" ) ) {
				alert("Invalid choice from you.");
				validChoice = false;
				playMore = "no";				
			}

			if ( validChoice ) {
				if ( computerChoice == userChoice ) {
					alert("tied");
					playMore = "no";
				} else if ( ( computerChoice == "rock" && userChoice == "scissors" )
						 || ( computerChoice == "paper" && userChoice == "rock" )
						 || ( computerChoice == "scissors" && userChoice == "paper" ) ) {
					alert("The Computer Wins.");
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