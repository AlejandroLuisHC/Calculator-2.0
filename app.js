// Capturing buttons

const
one 			= document.getElementById('one'),
two 			= document.getElementById('two'),
three 			= document.getElementById('three'),
four 			= document.getElementById('four'),
five 			= document.getElementById('five'),
six 			= document.getElementById('six'),
seven 			= document.getElementById('seven'),
eight 			= document.getElementById('eight'),
nine 			= document.getElementById('nine'),
zero			= document.getElementById('zero'),
add 			= document.getElementById('add'),
subtract		= document.getElementById("subtract"),
multiply 		= document.getElementById("multiply"),
divide 			= document.getElementById("divide"),
power 			= document.getElementById("pwr"),
root            = document.getElementById("root"),
percent         = document.getElementById("percent"),
reverse 		= document.getElementById("reverse"),
clean 			= document.getElementById("clean"),
allClear		= document.getElementById("ac"),
equals 			= document.getElementById("equals");


// Capturing the display

const 
result 			= document.getElementById("result"),
preview 		= document.getElementById("preview");


// Welcoming message

window.onload = async () => {
	result.textContent = "WELCOME"
	await wait(1000)
	for (let i = 0; i <= 12; i++) {
		if (i === 12) {
			result.textContent = "0";
		} else if (i < 5) {
			result.textContent += "-";
		} else if (i > 4) {
			result.textContent = result.textContent.substring(1);
			result.textContent += "-";
		};
		await wait(200)
	};
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


// Events number input{

zero.onclick      =()=> {(result.textContent === "ERROR") || (result.textContent === "0") ? result.textContent = "0" 
						 : result.textContent += "0"; charactersCap(result);};
one.onclick       =()=> {(result.textContent === "ERROR") || (result.textContent === "0") ? result.textContent = "1" 
						 : result.textContent += "1"; charactersCap(result);};
two.onclick       =()=> {(result.textContent === "ERROR") || (result.textContent === "0") ? result.textContent = "2" 
						 : result.textContent += "2"; charactersCap(result);};
three.onclick     =()=> {(result.textContent === "ERROR") || (result.textContent === "0") ? result.textContent = "3" 
                         : result.textContent += "3"; charactersCap(result);};
four.onclick      =()=> {(result.textContent === "ERROR") || (result.textContent === "0") ? result.textContent = "4" 
						 : result.textContent += "4"; charactersCap(result);};
five.onclick      =()=> {(result.textContent === "ERROR") || (result.textContent === "0") ? result.textContent = "5" 
						 : result.textContent += "5"; charactersCap(result);};
six.onclick       =()=> {(result.textContent === "ERROR") || (result.textContent === "0") ? result.textContent = "6" 
						 : result.textContent += "6"; charactersCap(result);};
seven.onclick     =()=> {(result.textContent === "ERROR") || (result.textContent === "0") ? result.textContent = "7" 
						 : result.textContent += "7"; charactersCap(result);};
eight.onclick     =()=> {(result.textContent === "ERROR") || (result.textContent === "0") ? result.textContent = "8" 
						 : result.textContent += "8"; charactersCap(result);};
nine.onclick      =()=> {(result.textContent === "ERROR") || (result.textContent === "0") ? result.textContent = "9" 
 	 					 : result.textContent += "9"; charactersCap(result);};
float.onclick     =()=> {result.textContent === "ERROR" ? result.textContent = "." : result.textContent += "."; charactersCap(result);};
percent.onclick   =()=> result.textContent = parseFloat(result.textContent) / 100;  
clean.onclick     =()=> clear();	
allClear.onclick  =()=> clearAll();


	// Events operation input

reverse.onclick = function() {
	if (result.textContent[0] !== "-") {
		result.textContent = `-${result.textContent}`;
	} else {
		result.textContent = result.textContent.substring(1);
	}
}

add.onclick = function() {
	if (operator !== "") {
		operandB = result.textContent;
		solve();
	}
	operandA = result.textContent;
	preview.textContent = operandA + "+";
	operator = "+";
	clear();
}

subtract.onclick = function() {
	if (operator !== "") {
		operandB = result.textContent;
		solve();
	}
	operandA = result.textContent;
	preview.textContent = operandA + "-";
	operator = "-";
	clear();
}

multiply.onclick = function() {
	if (operator !== "") {
		operandB = result.textContent;
		solve();
	}
	operandA = result.textContent;
	preview.textContent = operandA + "*";
	operator = "*";
	clear();
}

divide.onclick = function() {
	if (operator !== "") {
		operandB = result.textContent;
		solve();
	}
	operandA = result.textContent;
	preview.textContent = operandA + "/";
	operator = "/";
	clear();
}

root.onclick = function(e) {
	if (operator !== "") {
		operandB = result.textContent;
		solve();
	}
	operandA = result.textContent;
	preview.textContent = operandA + "√(?)";
	operator = "√";
	clear();
}

power.onclick = function(e) {
	if (operator !== "") { 
		operandB = result.textContent;
		solve();
	}
	operandA = result.textContent;
	preview.textContent = operandA + "^(?)";
	operator = "^";
	clear();
}

equals.onclick = function(e) {
	if (operator === "^" || operator === "√") {
		operandB = result.textContent;
		preview.textContent = preview.textContent.slice(0, -3) + operandB + "=";
		solve();
	} else if (operator !== "") {
		operandB = result.textContent;
		preview.textContent += operandB + "=";
		solve();
	}
}


	// Auxiliar variables

var
operandA,
operandB,
operator = "";


	// Functions 

function clearAll() {
	preview.textContent = "";
    result.textContent = "0";
    operandA = 0;
    operandB = 0;
    operator = "";
}

function clear() {
	result.textContent = "0";
}

function clearSolve() {
	result.textContent = "0";
    operandA = 0;
    operandB = 0;
    operator = "";
}

function solve() {
    var sol = 0;
    switch (operator) {
        case "+":
            sol = parseFloat(operandA) + parseFloat(operandB);
            break;
        
        case "-":
            sol = parseFloat(operandA) - parseFloat(operandB);
            break;
        
        case "*":
            sol = parseFloat(operandA) * parseFloat(operandB);
            break;
        
        case "/":
            sol = parseFloat(operandA) / parseFloat(operandB);
            break;
        case "^":
            sol = parseFloat(operandA) ** parseFloat(operandB);
            break;
        case "√":
            sol = parseFloat(operandA) ** (1 / parseFloat(operandB));
            break;
    }
    clearSolve(); 
    sol = Math.round(sol * 1000) / 1000;
	if(sol > 999999) {
		sol = sol.toExponential(3);
	};
    result.textContent = sol;
}


function charactersCap(e) {
	if (e.textContent.length > 12) {
		e.textContent = "ERROR";
	} else if (e.textContent.length === 12) {
		alert("Careful! You cannot enter longer than 12 digits number!");
	};
}



	// Switching between themes 

function toggleTheme() {
    const theme = document.getElementById("style");
    if (theme.getAttribute("href") === "style-light.css") {
        theme.href = "style.css";
    } else if (theme.getAttribute("href") === "style.css") {
        theme.href = "style-light.css";
    }
}

function toggleThemeContrast() {
    const theme = document.getElementById("style");
    if (theme.getAttribute("href") !== "style-contrast.css") {
		theme.href = "style-contrast.css";
    } else {
        theme.href = ("href", "style.css");
    }
}
