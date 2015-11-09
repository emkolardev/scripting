var cities = [
	"Saint Louis, MO", 
	"Rolla, MO",
	"Baraboo, WI", 
	"Warrenton, MO",
	"New York, New York",
	"Saint Charles, MO",
	"O'Fallon, MO",
	"Petaluma, CA",
	"Kalamazoo, MI",
	"Chicago, IL"
];
var par = document.getElementById("textOut");
var str;

function count() {
	printString("~~~~ count by twos: ~~~~");	
	for (var i = 1; i <= 100; i++)
	{
		if (i % 2 == 0)
		{
			console.log(i);
			printString(i);
		}
	}
};

function printWhile() {
	var i = 0;
	printString("~~~~ while loop: ~~~~"); 
	while (i < cities.length) {
		printString(cities[i]);
		i++;
	}
};

function printFor() {
	printString("~~~~ for loop: ~~~~");
	for (var i = 0; i < cities.length; i++) {
		printString(cities[i]);
	}
};

function printEach() {
	printString("~~~~ foreach with callback: ~~~~");
	cities.forEach(printString);
}

function printString(output) {
	console.log(output);
	str = document.createTextNode(output);
	par.appendChild(str);
	par.appendChild(document.createElement("br"));	
};

function lineBr() {
	par.appendChild(document.createElement("br"));	
}