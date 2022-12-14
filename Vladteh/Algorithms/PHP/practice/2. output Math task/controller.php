<?php

if (isset($_POST['solve_problem'])) {

	$op1 = $_POST['op1'];
	$op2 = $_POST['op2'];
	$sum = $_POST['sum'];


	if (is_numeric($op1) && is_numeric($op2) && is_numeric($sum)) {

		$equation = $op1 . " + " . $op2 . " = " . $sum; // 10 + 5 = 15;

		if ($op1 + $op2 == $sum) {
				$success = "Вы правильно решили уравнение: " . $equation;
		} else {
			$error = "Вы неправильно решили уравнение: " . $equation;
		}

    }  else {
        $error = "Вы неправильно ввели данные: " . $op2;
    }

}

if (!isset($error)) {

    $sourceOperator1 = rand(0, 10);
    $sourceOperator2 = 0;
    $sourceSum = rand (0, 100);

} else {
    $sourceOperator1 = $op1;
    $sourceOperator2 = $op2;
    $sourceSum = $sum;
}


