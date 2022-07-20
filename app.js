
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
	modulus 		= document.getElementById("modulus"),
	reverse 		= document.getElementById("reverse"),
	erase 			= document.getElementById("erase"),
	ac 				= document.getElementById("ac"),
	equals 			= document.getElementById("equals"),
	switchTheme		= document.getElementById("switch")
;

// Capturing the display
const 
    result = document.getElementById("result");
    preview = document.getElementById("preview");

;

one.addEventListener("click", function(){
 	preview.innerHTML += "1";
	
})

two.addEventListener("click", function(){
	 preview.innerHTML += "2";
	
})

three.addEventListener("click", function(){
	 preview.innerHTML += "3";
	
})

four.addEventListener("click", function(){
	 preview.innerHTML += "4";
	
})

five.addEventListener("click", function(){
	 preview.innerHTML += "5";
	
})

six.addEventListener("click", function(){
 	preview.innerHTML += "6";
	
})

seven.addEventListener("click", function(){
 	preview.innerHTML += "7";
	
})

eight.addEventListener("click", function(){
	 preview.innerHTML += "8";
	
})

nine.addEventListener("click", function(){
	 preview.innerHTML += "9";
	
})

zero.addEventListener("click", function(){
	 preview.innerHTML += "0";
	
})

add.addEventListener("click", function(){
	 preview.innerHTML += "+";
	
})

subtract.addEventListener("click", function(){
	 preview.innerHTML += "-";
	
})

multiply.addEventListener("click", function(){
	 preview.innerHTML += "*";
	
})

divide.addEventListener("click", function(){
	 preview.innerHTML += "/";
	
})

modulus.addEventListener("click", function(){
	 preview.innerHTML += "%";
	
})

float.addEventListener("click", function(){
	 preview.innerHTML += ".";
	
})

erase.addEventListener("click", function(){
	 preview.innerHTML = preview.innerHTML.slice(0, -1);
	
})

equals.addEventListener("click", function(){
	result.innerHTML = eval(preview.innerHTML)
})






      
    
	
// Switching between themes 