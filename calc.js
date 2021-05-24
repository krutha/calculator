const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("What would you like to calculate?", function(input){
	 var tokens = input.split(' ');
	
	var mathSymbol = tokens[0];
	 var num1 = Number(tokens[1]);
	 console.log('num1',num1)
	 var num2 = Number(tokens[2]);
	 console.log('num2',num2)
	 if(mathSymbol === '+'){
		 console.log(num1+num2)
	 }
	 if(mathSymbol === '*'){
		console.log(num1+num2)
	}
	if(mathSymbol === '-'){
		console.log(num1+num2)
	}
	if(mathSymbol === '/'){
		console.log(num1+num2)
	}
	// This line closes the connection to the command line interface.
	reader.close()
	if(mathSymbol === "sqr"){
		console.log(math.swqr(num1))}

	if ( mathSymbol === "cube"){
		console.log(math.pow(num2,3));
	}
	if (mathSymbol === "mod"){
		console.log(math.pow(num1 % num2));
	}

});
