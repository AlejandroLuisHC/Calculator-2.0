
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
	root            = document.getElementById('root'),
	percent         = document.getElementById('percent'),
	reverse 		= document.getElementById("reverse"),
	clean 			= document.getElementById("clean"),
	allClear		= document.getElementById("ac"),
	equals 			= document.getElementById("equals")
;

	// Capturing the display
const 
    result 		= document.getElementById("result");
    preview 	= document.getElementById("preview");
;

	// Events input numbers

	zero.onclick                =()=> result.textContent += "0";
	one.onclick                 =()=> result.textContent += "1";
	two.onclick                 =()=> result.textContent += "2";
	three.onclick               =()=> result.textContent += "3";
	four.onclick                =()=> result.textContent += "4";
	five.onclick                =()=> result.textContent += "5";
	six.onclick                 =()=> result.textContent += "6";
	seven.onclick               =()=> result.textContent += '7';
	eight.onclick               =()=> result.textContent += "8";
	nine.onclick                =()=> result.textContent += "9";
	float.onclick               =()=> result.textContent += ".";
	percent.onclick             =()=> result.textContent = parseFloat(result.textContent) / 100;  
	clean.onclick				=()=> clear();	
	allClear.onclick            =()=> clearAll();


	//auxiliar variables
var operandA;
var operandB;
var operator = "";

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
		preview.textContent += operandB + ")=";
		solve();
	 } else if (operator !== "") {
		operandB = result.textContent;
		preview.textContent += operandB + "=";
		solve();
	}
}

function clearAll() {
    preview.textContent = "";
    result.textContent = "";
    operandA = 0;
    operandB = 0;
    operator = "";
}
function clear() {
    result.textContent = "";
}

function clearSolve() {
    result.textContent = "";
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
    result.textContent = sol;
}



	// Switching between themes 

function toggleTheme() {
    const theme = document.getElementById("style");
    if (theme.getAttribute("href") === "style-light.css") {
        theme.href = "style.css";
    } else {
        theme.href = "style-light.css";
    }
}