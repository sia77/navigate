$(document).ready(function(){

	var boxIds = [1, 2, 3, 4, 5];
	console.log("length: ",  );
	$(".buttons").on("click", function(){

		var nextId = parseInt( $('.boxes:visible').attr('id') )+1;
		var stepLength = $('.boxes').length;

		if(stepLength >= nextId  ){
			$(".boxes").hide();
			$("#"+nextId).show();
		}
	});
});