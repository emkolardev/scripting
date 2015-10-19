function madLib() {

	var color = document.getElementById('colorIn').value;

	var name = document.getElementsByClassName('nameIn');
	var verbs = document.getElementsByClassName('verbIn');
	var nouns = document.getElementsByClassName('nounIn');
	var adjs = document.getElementsByClassName('adjIn');
	var insults = document.getElementsByClassName('insultIn');
	var advs = document.getElementsByClassName('advIn');

	var nameS = document.getElementsByClassName('nameSp')
	var verbSp = document.getElementsByClassName('verb');
	var nounSp = document.getElementsByClassName('noun');
	var adjSp = document.getElementsByClassName('adj');
	var insultSp = document.getElementsByClassName('insult');
	var advSp = document.getElementsByClassName('adverb');

	var cats = [name, verbs, nouns, adjs, insults, advs];
	var spans = [nameS, verbSp, nounSp, adjSp, insultSp, advSp];
	for (var i = 0; i < cats.length; i++)
	{
		var cat = cats[i];
		var spanCat = spans[i];
		for (var j = 0; j < cat.length; j++)
		{
			var txtIn = cat[j].value;
			var spn = spanCat[j];
			console.log(txtIn)
			spn.innerHTML = txtIn;
			spn.style.fontWeight = '700';
		}
	}

	var out = document.getElementById('viewML');
	out.style.display = "block";
	out.style.backgroundColor = color;
	if (color != "#FFFFFF") {
		out.style.color = "white";
	}
}

function hideOut() {
	document.getElementById('viewML').style.display = "none";
}