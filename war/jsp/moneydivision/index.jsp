<!DOCTYPE html>

<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<style>
			body {
				padding-top: 15vw;
				text-align: center;
			}
			div {
				font: 1.8vw "Arial";
			}
		</style>
		<title></title>
	</head>

	<body>
		<div>
			<p>Jan krijgt &euro; <%=String.format("%.2f", ((double)113/4))%></p>
			<p>Ali krijgt &euro; <%=String.format("%.2f", ((double)113/4))%></p>
			<p>Jeannette krijgt &euro; <%=String.format("%.2f", ((double)113/4))%></p>
			<p>Daniel krijgt &euro; <%=String.format("%.2f", ((double)113/4))%></p>
		</div>
	</body>
</html>