//JavaScript Review File

console.log("Happy!");

var age = 18;
var birthYear = 1998;
var graduationYear = 2017;
var siblings = 4;
var kids = 0;
var todaysYear = 2016;

console.log("I am " + age);
console.log("I was born in " + birthYear);

if(graduationYear < todaysYear){
	console.log("I graduated in " + graduationYear);
} else {
	console.log("I will graduate in " + graduationYear);
}
//manipulating the DOM
document.getElementById("my-age").innerHTML = age;
document.getElementById("birthYear").innerHTML = birthYear;
document.getElementById("graduationYear").innerHTML = graduationYear;
document.getElementById("siblings").innerHTML = siblings;
document.getElementById("kids").innerHTML = kids;


var somethingFunny = "Pacers won the SuperBowl";

function revealFunny(){
	document.getElementById("reveal-funny-line").innerHTML = somethingFunny;
}

var thisTruth = "This is True.";
var thisLie = "This is a Lie";
var thisTruth2 = "This is True.";
function revealTruth(){
	document.getElementById("reveal-truth").innerHTML = thisTruth;
}
function revealLie(){
	document.getElementById("reveal-Lie").innerHTML = thisLie;
}
function revealTruth2(){
	document.getElementById("reveal-truth2").innerHTML = thisTruth2;
}


var Q1 = "League of Legends";
var Q2 = "Something about you girl by IceJJFish";
var Q3 = "Purple";
function revealFact(){
	document.getElementById("reveal-Fact").innerHTML = Q1;
}
function revealFact2(){
	document.getElementById("reveal-Fact2").innerHTML = Q2;
}
function revealFact3(){
	document.getElementById("reveal-Fact3").innerHTML = Q3;
}

// array
var abc = "abcdefghijklmnopqrstuvwxyz";
var abcArray = ["a", "b", "c", "d", "e"];
var numberArray = [1, 2, 3, 4, 5];

console.log(abc.charAt(3));
console.log(abcArray[2]);

// array 2
var typesOfSoda = new Array();
typesOfSoda[0] = "Mnt Dew";
typesOfSoda[1] = "Root beer";
typesOfSoda[2] = "Red cream soda";

console.log(typesOfSoda);


var worstSoda = new Array();
worstSoda[0] = "Sprite";
worstSoda[1] = "Coke";
worstSoda[2] = "Pepsi";

console.log(worstSoda);

/*var counter = 0;

while(counter < 10){
	counter++;
	console.log("The Score is " + counter);
}

for (var i = 1; i < 21; i++){
	console.log(i);
}


for (var u = 0; u < 41; u = u + 5){
	console.log(u);
}

for (var p = 0; p < 101; p = p + 25){
	console.log(p);
	if(p === 50){
		console.log("Halfway there!")
	}
}

for (var a = 0; a < 11; a++){
	if(a === 9){
		console.log("nine");
	} else if(a === 10){
		console.log("ten");
	} else {
		console.log(a);
	}

}



var friends = ["Bryce", "Joey", "Stephanie", "Sasha"];
var friendsList = "";

for(i = 0; i < friends.length; i++){
	friendsList += friends[i];
	if(i === 3){
		console.log(friendsList);
	}
}

for(var o = "#"; o.length < 8; o+= "#"){
	console.log(o);
}


for (var q = 0; q < 21; q = q + 2){
	console.log(q);
}
*/


for (var w = 0; w < 51; w = w + 5){
	if(w === 50){
		console.log(w + " I'm Rich!");
	} else {
		console.log(w);
	}
}


var beachBag = {
	numBottles		: 3,
	colorOfTowel	: "Green",
	isWet			: false,

	zipUp			: function(){
		console.log("ZZzzzt");
	}

}

console.log(beachBag);
console.log(beachBag.isWet);
beachBag.zipUp();

var player = {
	life			: 1000,
	damage			: 10,
	hasSword		: true,
	hasNinjaStars	: true,
	hasArmor		: false,

	attack			: function(target){
		console.log(this.name + " attacks " + target + " for " + this.damage + " damage!");

	},

	sliceWithSword	: function(target){
		var damage = 25 * this.damage;
		console.log(this.name + " did " + damage + " damage to " + target + "!");
	},

	heal			: function(target){
		var healPower = 250;
		console.log(this.name + " heals " + healPower + " health to " + target + "!");
	}


}
player.name = "Logan"


var animal = {
	isLiving		: true,
	isEating		: true,
	runs			: true,
	jumps			: true,
	numberOfEyes	: 2,
	isCute			: true,
	legs 			: true,

	breath			: function(){
		console.log(hheeeeheehehe);
	}
}

var snake = Object.create(animal);

console.log(snake.numberOfEyes);

snake.legs = 0;

console.log(snake.legs);

var rabbit = Object.create(animal);

rabbit.ears = "Huge";

var dog = Object.create(animal);

dog.isFreindly = true;
dog.fur = soft
dog.breath = function(){
	console.log("woof");
}