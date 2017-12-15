<?php 
	$project_name = $_GET["project"];
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
		window.open('<?php echo "projects/$project_name/index.html" ?>');
		console.log("huy");
	</script>
</body>
</html>