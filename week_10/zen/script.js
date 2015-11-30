var freq = 1000; 
var inter = 0;
var paragraphs = document.getElementsByTagName('p');
var rnd, rnd2, thisPar;

function setRandomColors() {
	for (var i = 0; i < paragraphs.length; i++)
	{
		rnd = Math.floor(Math.random() * (paragraphs.length));
		paragraphs[rnd].style.backgroundColor = randomColor();
	}

}
function checkTheTime() {
    if(inter >= freq) { clearInterval(inter); }
    inter = setInterval( "changeColor()", freq ); 
}
function changeColor()
{
	rnd2 = Math.floor(Math.random() * (paragraphs.length));
	paragraphs[rnd2].style.backgroundColor = randomColor();    
    console.log('colorize me, captain!');
    checkTheTime();
}