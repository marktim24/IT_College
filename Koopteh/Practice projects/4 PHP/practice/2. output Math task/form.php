<?php
	include (__DIR__ . '/controller.php');
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Math task</title>
</head>

<body>
<h1>Решите задачу:</h1>

	<form method = 'POST' action = "<? echo $_SERVER['PHP_SELF']; ?>" name = "mathProblem">
		<input type="hidden" value="<? echo $sourceOperator1; ?>" name="op1">
		<input type="hidden" value="<? echo $sourceSum; ?>" name="sum">

		<div>
			<span> <?php echo $sourceOperator1; ?> + </span>
			<input type="text" value ="<?php echo $sourceOperator2; ?>" size="2" name="op2">
			<span> = <?php echo $sourceSum; ?> </span>
		</div>
		<br>
		<input type="submit" name = "solve_problem" value="Готово">
		
		<div> 

			<? if (isset($success)) {?>
				<font color="green">
					<? echo $success; }?> 
				</font>

				<? if (isset($error)) {?>
				<font color="red">
					<? echo $error; }?> 
				</font>
		</div>
		</form>

	
</body>
</html>