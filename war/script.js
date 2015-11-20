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

var isWebDown = false;
var isCssDown = false;
var isJsDown = false;
var isJspDown = false;
$('#web').click(function() {
	if (isWebDown == false) {
		$('#web').html("- Web Development -"),
		isWebDown = true;
	}
	else {
		$('#web').html("Web Development<img src='select.png' alt=''>");
		isWebDown = false;
	}
	$('div div').slideUp();
	$('#css').html("CSS<img src='select.png' alt=''>");
	$('#js').html("Javascript<img src='select.png' alt=''>");
	$('#jsp').html("Java Server Pages<img src='select.png' alt=''>");
	$('#web + div').slideToggle(
		400,
		function() {
			$('#iframe').css({
				"display": "none"
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
	if (isCssDown == false) {
		$('#css').html("- CSS -"),
		isCssDown = true;
	}
	else {
		$('#css').html("CSS<img src='select.png' alt=''>");
		isCssDown = false;
	}
	$('li:not(#css):not(#web) + div').slideUp();
	$('#js').html("Javascript<img src='select.png' alt=''>");
	isJsDown = false;
	$('#jsp').html("Java Server Pages<img src='select.png' alt=''>");
	isJspDown = false;
	$('#css + div').slideToggle();
});
$('#js').click(function() {
	if (isJsDown == false) {
		$('#js').html("- Javascript -"),
		isJsDown = true;
	}
	else {
		$('#js').html("Javascript<img src='select.png' alt=''>");
		isJsDown = false;
	}
	$('li:not(#js):not(#web) + div').slideUp();
	$('#css').html("CSS<img src='select.png' alt=''>");
	isCssDown = false;
	$('#jsp').html("Java Server Pages<img src='select.png' alt=''>");
	isJspDown = false;
	$('#js + div').slideToggle();
});
$('#jsp').click(function() {
	if (isJspDown == false) {
		$('#jsp').html("- Java Server Pages -"),
		isJspDown = true;
	}
	else {
		$('#jsp').html("Java Server Pages<img src='select.png' alt=''>");
		isJspDown = false;
	}
	$('li:not(#jsp):not(#web) + div').slideUp();
	$('#css').html("CSS<img src='select.png' alt=''>");
	isCssDown = false;
	$('#js').html("Javascript<img src='select.png' alt=''>");
	isJsDown = false;
	$('#jsp + div').slideToggle();
});

$('a[target="display"]').click(function() {
	$('ul').animate(
		{"left": "10vw"},
		2000,
		function() {
			$('#iframe').css({
				"display": "initial",
			});
			$('#iframeTitle').html($('iframe').contents().find('title').html());
		}
	);
});