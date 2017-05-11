
var guessed = [];
	var comGuess = "";
	var alphabet = "abcdefghijklmnopqrstuvwxyz";

	var wins = 0;
	var loss = 0;

  	comGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  	console.log("Computer's guess= " + comGuess);

  	document.querySelector("#wins").innerHTML = "0";
  	document.querySelector("#loss").innerHTML = "0";

  	document.onkeyup = function(event) {
  		var letter = [];
  		letter.push(String.fromCharCode(event.keyCode).toLowerCase());
  		console.log(letter);



  		if (letter == comGuess){
  			console.log("match");
  			wins++;
  			document.querySelector("#wins").innerHTML = wins;
  			guessed = [];
  			document.querySelector("#guesses").innerHTML = guessed;
  			comGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  			console.log("Computer's guess= " + comGuess);
  		}
  		else if(guessed.length == 9){
  			loss++;
  			document.querySelector("#loss").innerHTML = loss;
  			guessed = [];
  			document.querySelector("#guesses").innerHTML = guessed;
  			comGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  			console.log("Computer's guess= " + comGuess);
  		}
  		else{
  			guessed.push(String.fromCharCode(event.keyCode).toLowerCase());
  			console.log("mismatch");
  			document.querySelector("#guesses").innerHTML = guessed;
  		}
  		console.log(guessed);
  	}
	

	
