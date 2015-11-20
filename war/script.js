$(document).ready(function() {
	$('div').slideUp();
});
$('#web').hover(
	function() {$('#web img').css("visibility", "initial");},
	function() {$('#web img').css("visibility", "hidden");}
);
$('#css').hover(
	function() {$('#css img').css("visibility", "initial");},
	function() {$('#css img').css("visibility", "hidden");}
);
$('#js').hover(
	function() {$('#js img').css("visibility", "initial");},
	function() {$('#js img').css("visibility", "hidden");}
);
$('#jsp').hover(
	function() {$('#jsp img').css("visibility", "initial");},
	function() {$('#jsp img').css("visibility", "hidden");}
);

$('#web').click(function() {
	$('div div').slideUp();
	$('#web + div').slideToggle(
		400,
		function() {
			$('iframe').css({
				"border": "none",
				"width": "0px"
			});
			$('ul').animate(
				{"left": "35vw"},
				2000,
				function() {}
			);
		}
	);
});
$('#css').click(function() {
	$('li:not(#css):not(#web) + div').slideUp();
	$('#css + div').slideToggle();
});
$('#js').click(function() {
	$('li:not(#js):not(#web) + div').slideUp();
	$('#js + div').slideToggle();
});
$('#jsp').click(function() {
	$('li:not(#jsp):not(#web) + div').slideUp();
	$('#jsp + div').slideToggle();
});

$('a[target="display"]').click(function() {
	$('ul').animate(
		{"left": "10vw"},
		2000,
		function() {
			$('iframe').css({
				"border": "0.15625vw solid black",
				"width": "45vw"
			});
		}
	);
});