$(document).ready(function() {
	$('div').slideUp();
});



//show arrow images on hover
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



//main menu onclick
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
		$('#web').html("Web Development<img src='openMenuArrow.png' alt=''>");
		$('#web img').css("visibility", "initial");
		isWebDown = false;
	}
	$('div div').slideUp();
	$('#css').html("Cascading Style Sheets<img src='openMenuArrow.png' alt=''>");
	$('#js').html("Javascript<img src='openMenuArrow.png' alt=''>");
	$('#jsp').html("Java Server Pages<img src='openMenuArrow.png' alt=''>");
	isCssDown = false;
	isJSDown = false;
	isJspDown = false;
	$('#dockButton').hide();
	$('#web + div').slideToggle(
		400,
		function() {
			$('#iframe').hide();
			$('nav').animate(
				{"left": "35vw"},
				1500,
				function() {}
			);
			$("a").css("color", "black");
		}
	);
});



//submenus onclick
$('#css').click(function() {
	if (isCssDown == false) {
		$('#css').html("- Cascading Style Sheets -"),
		isCssDown = true;
	}
	else {
		$('#css').html("Cascading Style Sheets<img src='openMenuArrow.png' alt=''>");
		$('#css img').css("visibility", "initial");
		isCssDown = false;
	}
	$('li:not(#css):not(#web) + div').slideUp();
	$('#js').html("Javascript<img src='openMenuArrow.png' alt=''>");
	isJsDown = false;
	$('#jsp').html("Java Server Pages<img src='openMenuArrow.png' alt=''>");
	isJspDown = false;
	$('#css + div').slideToggle();
});

$('#js').click(function() {
	if (isJsDown == false) {
		$('#js').html("- Javascript -"),
		isJsDown = true;
	}
	else {
		$('#js').html("Javascript<img src='openMenuArrow.png' alt=''>");
		$('#js img').css("visibility", "initial");
		isJsDown = false;
	}
	$('li:not(#js):not(#web) + div').slideUp();
	$('#css').html("Cascading Style Sheets<img src='openMenuArrow.png' alt=''>");
	isCssDown = false;
	$('#jsp').html("Java Server Pages<img src='openMenuArrow.png' alt=''>");
	isJspDown = false;
	$('#js + div').slideToggle();
});

$('#jsp').click(function() {
	if (isJspDown == false) {
		$('#jsp').html("- Java Server Pages -"),
		isJspDown = true;
	}
	else {
		$('#jsp').html("Java Server Pages<img src='openMenuArrow.png' alt=''>");
		$('#jsp img').css("visibility", "initial");
		isJspDown = false;
	}
	$('li:not(#jsp):not(#web) + div').slideUp();
	$('#css').html("Cascading Style Sheets<img src='openMenuArrow.png' alt=''>");
	isCssDown = false;
	$('#js').html("Javascript<img src='openMenuArrow.png' alt=''>");
	isJsDown = false;
	$('#jsp + div').slideToggle();
});



//link onclick > display in iframe
$('a[target="display"]').click(function() {
	var title = $(this).text();
	$('nav').animate(
		{"left": "7vw"},
		1500,
		function() {
			$('#dockButton').show();
			$('#dockButton').css({
				"background": "url('dockNavArrow.png') no-repeat center",
				"background-size": "100%",
				"background-color": "rgba(0, 0, 0, 0.075)"
			});
			$('#iframe').show();
			$('#iframeTitle').html(title);
		}
	);
});
$('a[target="display"]').click(function () { 
	$('a').css("color", "black");
	$(this).css("color", "#00AA00");
});



//dock menu
var isDocked = false;
$('#dockButton').click(function() {
	if (isDocked == false) {
		$('nav').animate(
			{"left": "-31.5vw"},
			1500,
			function() {
				$('#dockButton').css("transform", "scaleX(-1)");
			}
		);
		$('#dockButton').animate(
			{
				"width": "3.5vw",
				"height": "56vh"
			},
			1500,
			function() {}
		);
		$('h1').animate(
			{"top": "-2em"},
			1500,
			function() {}
		);
		$('#iframe').animate(
			{
				"width": "72vw",
				"height": "70vh",
				"right": "14vw",
				"top": "5vh"
			},
			1500,
			function() {}
		);
		isDocked = true;	
	}
	else {
		$('#dockButton').css("transform", "scaleX(1)");
		$('#dockButton').animate(
			{
				"width": "1.5vw",
				"height": "100%"
			},
			1500,
			function() {}
		);
		$('nav').animate(
			{"left": "7vw"},
			1500,
			function() {}
		);
		$('h1').animate(
			{"top": "5vh"},
			1500,
			function() {}
		);
		$('#iframe').animate(
			{
				"width": "45vw",
				"height": "60vh",
				"right": "7vw",
				"top": "17vh"
			},
			1500,
			function() {}
		);
		isDocked = false;
	}
});