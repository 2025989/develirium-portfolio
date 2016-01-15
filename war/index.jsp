<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		
		<!-- SELECT CSS FILE DEPENDING ON WINDOW SIZE -->
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
		<title>Develirium Portfolio</title>
	</head>
	
	<body>
		<h1>Welcome to my portfolio on Software Development!</h1>
		
		<!-- NAVBAR -->
		<nav>
			<ul>
				<a href="./index.jsp"><li>Home</li></a>
				<a href="./creations.jsp"><li>Creations</li></a>
				<a href="./about.jsp"><li>About</li></a>
				<a href="./contact.jsp"><li>Contact</li></a>
			</ul>
		</nav>
		
		<!-- CONTENT -->
		<span>
			<h4>Have a nice day!</h4>
			<br><br>
			<p>
				My name is Daniel. I'm study software development at ROC Flevoland, The Netherlands.
			</p>
		</span>
	</body>
</html>