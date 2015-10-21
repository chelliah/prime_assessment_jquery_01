var clickCounter = 0;

function generate() {
	clickCounter++;
	$('#numClicks > p').text("The generate button has been pressed " + clickCounter + " times.")
	$("#container").append("<div class='generated-div'></div>");
	var $el = $("#container").children().last();
	$el.append("<button class='change'>Change</button>");
	$el.append("<button class='delete'>Delete</button>");	
}

$(document).ready(function(){
	console.log("Hi");
	$("#generate").on('click',function(){
		generate();
	});

	$("#container").on('click','.delete',function(){
		var $el = $(this).parent();
		$el.remove();
	});

	$("#container").on('click','.change',function(){
		var $el = $(this).parent();
		$el.toggleClass("red");
	});
});