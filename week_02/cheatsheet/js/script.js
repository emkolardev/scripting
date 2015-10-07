//================================
// do this stuff on document ready
//================================
var main = function() {
	
	//==================================================
	// slide up cheat sheet header and body when clicked
	//==================================================
	$('#myHeader').click(function() {
	  
		$('#myHeader').animate({
			top: "-90px"
			}, 200);
    
		$('#mockup').animate({
			top: "0px"
			}, 200);
	});
	
	//================================================================================
	// when element is clicked, send it to a function that opens its w3schools webpage
	//================================================================================
	$('#mockup').click(function() {
	  
		goToSite(0);
	  
	});
  
	$('#mockHeader').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(1);
	  
	});  
  
	$('#mockH1').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(2);
	  
	});
	
	$('#mockH2').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(3);
	  
	});

	$('#mockNav').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(4);
	  
	});	
	
	$('#mockUl').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(5);
	  
	});
	  
	$('#mockLi').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(6);
	  
	});  
	
	$('#mockLi2').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(7);
	  
	});	

	$('#mockDiv').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(8);
	  
	});	
	
	$('#mockArticle').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(9);
	  
	});
	
	$('#mockH3').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(10);
	  
	});
	
	$('#mockA').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(11);
	  
	});		
	
	$('#mockSection').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(12);
	  
	});			

	$('#mockSpan').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(13);
	  
	});			
	
	$('#mockHr').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(14);
	  
	});		

	$('#mockSection2').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(15);
	  
	});		
	
	$('#mockHr2').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(16);
	  
	});		

	$('#mockSection3').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(17);
	  
	});		
	
	$('#mockOl').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(18);
	  
	});		

	$('#mockImg').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(19);
	  
	});	
	
	$('#mockForm').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(20);
	  
	});	
	
	$('#mockP').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(21);
	  
	});	
	
	$('#mockStrong').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(22);
	  
	});		
	
	$('#mockLabel').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(23);
	  
	});	
	
	$('#mockInput').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(24);
	  
	});
	
	$('#mockTextarea').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(25);
	  
	});		
	
	$('#mockButton').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(26);
	  
	});	
	
	$('#mockFooter').click(function(event) {
	  
	  	event.stopPropagation();
		goToSite(27);
	  
	});		
};

$(document).ready(main); 

//======================================================
// function that opens window and loads appropriate page
//======================================================
function goToSite(which) {

	var urls = [
		"http://www.w3schools.com/jsref/dom_obj_body.asp", 
		"http://www.w3schools.com/jsref/dom_obj_header.asp", 
		"http://www.w3schools.com/jsref/dom_obj_heading.asp", 
		"http://www.w3schools.com/jsref/dom_obj_heading.asp", 
		"http://www.w3schools.com/jsref/dom_obj_nav.asp", 
		"http://www.w3schools.com/jsref/dom_obj_ul.asp", 
		"http://www.w3schools.com/jsref/dom_obj_li.asp", 
		"http://www.w3schools.com/jsref/dom_obj_li.asp", 
		"http://www.w3schools.com/jsref/dom_obj_div.asp", 
		"http://www.w3schools.com/jsref/dom_obj_article.asp", 
		"http://www.w3schools.com/jsref/dom_obj_heading.asp", 
		"http://www.w3schools.com/jsref/dom_obj_anchor.asp",
		"http://www.w3schools.com/jsref/dom_obj_section.asp",
		"http://www.w3schools.com/jsref/dom_obj_span.asp",
		"http://www.w3schools.com/jsref/dom_obj_hr.asp",
		"http://www.w3schools.com/jsref/dom_obj_section.asp",
		"http://www.w3schools.com/jsref/dom_obj_hr.asp",
		"http://www.w3schools.com/jsref/dom_obj_section.asp",
		"http://www.w3schools.com/jsref/dom_obj_ol.asp",
		"http://www.w3schools.com/jsref/dom_obj_image.asp",
		"http://www.w3schools.com/jsref/dom_obj_form.asp",
		"http://www.w3schools.com/jsref/dom_obj_paragraph.asp",
		"http://www.w3schools.com/jsref/dom_obj_strong.asp",
		"http://www.w3schools.com/jsref/dom_obj_label.asp",
		"http://www.w3schools.com/jsref/dom_obj_text.asp",
		"http://www.w3schools.com/jsref/dom_obj_textarea.asp",
		"http://www.w3schools.com/jsref/dom_obj_pushbutton.asp",
		"http://www.w3schools.com/jsref/dom_obj_footer.asp"
	];
		
	window.open(urls[which]);
	
};