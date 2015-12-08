<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<script src="2.1.4_jquery.min.js"></script>
		<script>
			var mq = window.matchMedia("(min-width: 1000px)");
			
			if (mq.matches) {
				// window width is at least 1000px
				document.write("<link rel='stylesheet' type='text/css' href='style.css'>");
			}
			else {
				// window width is less than 1000px
				document.write("<link rel='stylesheet' type='text/css' href='styleMobile.css'>");
			}
		</script>
		
		<title>2025989 Portfolio</title>
	</head>
	
	<body>
		<h1>Welcome to my portfolio on Software Development!</h1>
		<nav>
			<ul>
				<a target="_blank" href="http://github.com/2025989/"><li>GitHub</li></a>
				<!-- <li id="apps">Applications<img src="openMenuArrow.png" alt=""></li>
				<div>
					<li>TEST<img src="openMenuArrow.png" alt=""></li>
					<div>
						<a target="display" href="./css/helloworld/index.html"><li>Hello World</li></a>
					</div>
				</div> -->
				<li id="games">Games<img src="openMenuArrow.png" alt=""></li>
				<div>
					<li>Greenfoot (Java)<img src="openMenuArrow.png" alt=""></li>
					<div>
						<a target="display" href="./games/garpsgame/index.html"><li>GarpsGame</li></a>
					</div>
				</div>
				<li id="web">Web Development<img src="openMenuArrow.png" alt=""></li>
				<div>
					<li id="css">Cascading Style Sheets<img src="openMenuArrow.png" alt=""></li>
					<div>
						<a target="display" href="./css/helloworld/index.html"><li>Hello World</li></a>
						<a target="display" href="./css/simplewebsite/index.html"><li>Simple Website</li></a>
						<a target="display" href="./css/table/index.html"><li>Table</li></a>
						<a target="display" href="./css/css1-4/index.html"><li>CSS 1-4</li></a>
						<a target="display" href="./css/float/index.html"><li>Float</li></a>
						<a target="display" href="./css/loginform/index.html"><li>Login Form</li></a>
						<a target="display" href="./css/exampleform/index.html"><li>Example Form</li></a>
						<a target="display" href="./css/fonts/index.html"><li>Fonts</li></a>
						<a target="display" href="./css/fullfeaturedwebsite/index.html"><li>Full Featured Website</li></a>
						<a target="display" href="http://projectbierhier.appspot.com"><li>Project Bierhier</li></a>
					</div>
					
					<li id="js">Javascript<img src="openMenuArrow.png" alt=""></li>
					<div>
						<a target="display" href="./js/test/index.html"><li>jQuery Test</li></a>
						<a target="display" href="./js/menu/index.html"><li>jQuery Menu</li></a>
						<a target="display" href="./js/testevent/index.html"><li>Test Event</li></a>
						<a target="display" href="./js/buttonevent/index.html"><li>Button Event</li></a>
						<a target="display" href="./js/colorlists/index.html"><li>Color Lists</li></a>
						<a target="display" href="./js/clickblock/index.html"><li>Click Block</li></a>
						<a target="display" href="./js/animation/index.html"><li>Animation</li></a>
						<a target="display" href="./js/variables/index.html"><li>Javascript Variables</li></a>
						<a target="display" href="./js/typeof/index.html"><li>typeof</li></a>
						<a target="display" href="./js/functions/index.html"><li>Javascript functions</li></a>
						<a target="display" href="./js/functionsjquery/index.html"><li>Javascript functions (jQuery)</li></a>
						<a target="display" href="./js/imageslider/index.html"><li>Image Slider</li></a>
						<a target="display" href="./js/policeapp/index.html"><li>Police App</li></a>
						<a target="display" href="./js/copyobject/index.html"><li>Copy Object</li></a>
						<a target="display" href="./js/cargarage/index.html"><li>Car Garage</li></a>
						<a target="display" href="./js/mobilehelloworld/index.html"><li>Mobile Hello World</li></a>
					</div>
					
					<li id="jsp">Java Server Pages<img src="openMenuArrow.png" alt=""></li>
					<div>
						<a target="display" href="./jsp/moneydivision/index.jsp"><li>Money Division</li></a>
						<a target="display" href="./jsp/seconds/index.jsp"><li>Seconds</li></a>
						<a target="display" href="./jsp/greeting/index.jsp"><li>Greeting</li></a>
						<a target="display" href="./jsp/fibonacci/index.jsp"><li>Fibonacci</li></a>
						<a target="display" href="./jsp/chessboard/index.jsp"><li>Chessboard</li></a>
						<a target="display" href="./jsp/fivetimestable/index.jsp"><li>Five Times Table</li></a>
						<a target="display" href="./jsp/timestablesgrid/index.jsp"><li>Times Tables Grid</li></a>
						<a target="display" href="./jsp/timestableselect/index.jsp"><li>Times Table Select</li></a>
						<a target="display" href="./jsp/timestablenext/index.jsp"><li>Times Table Next</li></a>
						<a target="display" href="./jsp/simpletemperatureconversion/index.jsp"><li>Simple Temperature Conversion</li></a>
						<a target="display" href="./jsp/highestlowestnumber/index.jsp"><li>Highest &amp; Lowest Number</li></a>
						<a target="display" href="./jsp/temperatureconversion/index.jsp"><li>Temperature Conversion</li></a>
						<a target="display" href="./jsp/calculator/index.jsp"><li>Calculator</li></a>
					</div>
				</div>
			</ul>
			<div id="dockButton"></div>
		</nav>
		<div id="iframe">
			<h2 id="iframeTitle"></h2>
			<iframe name="display"></iframe>
		</div>
	</body>
	
	<script>
		var mq = window.matchMedia("(min-width: 1000px)");
		
		if (mq.matches) {
			// window width is at least 1000px
			$.getScript("script.js", function() {});
		}
		else {
			// window width is less than 1000px
			$.getScript("scriptMobile.js", function() {});
		}
	</script>
</html>