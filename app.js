// question no 1

var userInput = prompt("Enter your city");

if
    (userInput === "karachi"){
    alert("welcome to the city of lights")

} else{
    alert("welcome")
};

// question no 2 

var gender = prompt("Please select your gender");

if
(gender === "female"){
    alert("Goodmorning Ma'am")

} else {(gender === "male") 
    alert("Good morning sir")
};


// question no 3

var color = prompt("Enter a traffic signal")

if (color === 'red') {
    alert ('Must Stop');
} else if (color === 'yellow') {
    alert ('Ready to move');
} else if (color === 'green') {
    alert ("move now");
} else {
    alert ('Please select a valid signal color.');
}

// question no 4
 var fuel = prompt("how much fuel present in your car in liters");

 if (fuel < "0.25liters"){
    alert("Please refill the fuel in your car")
 };

//  question no 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true")
};
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost  = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}