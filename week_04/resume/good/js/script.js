$(function () {
	console.log("hi");
	var objPlus = $('#objPlus');
	var edPlus = $('#edPlus');
	var exPlus = $('#exPlus');
	var skPlus = $('#skPlus');
	var inPlus = $('#inPlus');
	var education = $('#education');
	var experience = $('#experience');
	var skills = $('#skills');
	var interests = $('#interests');
	var obSlide = $('#obSlide');
	var edSlide = $('#edSlide');
	var exSlide = $('#exSlide');
	var skSlide = $('#skSlide');
	var inSlide = $('#inSlide');

	objPlus.on('click', function() {
		objPlus.toggleClass('minus');
		education.toggleClass('education');
		education.toggleClass('open');
		obSlide.toggleClass('slide');
		obSlide.toggleClass('slideOpen');
	});

	edPlus.on('click', function() {
		edPlus.toggleClass('minus');
		experience.toggleClass('experience');
		experience.toggleClass('open');
		edSlide.toggleClass('slide');
		edSlide.toggleClass('slideOpen');
	});

	exPlus.on('click', function() {
		exPlus.toggleClass('minus');
		skills.toggleClass('skills');
		skills.toggleClass('open');
		exSlide.toggleClass('slide');
		exSlide.toggleClass('slideOpen');
	});

	skPlus.on('click', function() {
		skPlus.toggleClass('minus');
		interests.toggleClass('interests');
		interests.toggleClass('open');
		skSlide.toggleClass('slide');
		skSlide.toggleClass('slideOpen');
	});

	inPlus.on('click', function() {
		inPlus.toggleClass('minus');
		inSlide.toggleClass('slide');
		inSlide.toggleClass('slideOpen');
	});	

});