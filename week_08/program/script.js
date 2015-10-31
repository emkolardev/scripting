$(function() {
	$('#numBtn').on('click', function() {
		var mults = [7, 1443];
		var num = $('#num').val();
		$.each(mults, function(index, value){
			if (num) {num *= value;}
		});
		alert(num);
	});
	$('#q1').on('focusout', function() {
		var el = $('#q1');
		if (el.val().toLowerCase() != "yes")
		{
			alert("Let me fix that for you.");
			 el.val("yes");
			return;
		}
		else {return;}
	});
	$('#qaBtn').on('click', function() {
		var text = message = ""; var space = " ";
		var answers = $('#qForm input');
		for (var i = 0; i < answers.length; i++) {
			if (answers[i]) 
				{text += answers[i].value + space;} 
		};
		message = "Your answers have been recorded (not by cat):\n" + text + "\nThanks for taking mowr survey!";
		alert(message);
	});
	$('input')
	$('#qzBtn').on('click', function() {
		var answers = $('#quizForm input');
		var num = 0;
		for (var i = 0; i < answers.length; i++)
		{
			var val = answers[i].value;
			if (i == 0) { num = val; alert(val); }
			if (i == 1 || i == 2) { num += val; alert(val); }
			if (i == 3) { num *= val; alert(val); }
			if (i == 4) { num /= val; alert(val); }
		}
		alert(num);
	});
});