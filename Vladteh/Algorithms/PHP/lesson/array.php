<!-- <pre>
<!-- <?php
$firstArray = []; // Актуальный
$secondArray = array(); // Старый способ

var_dump($firstArray);



$numberArray = [1,2,3,4,5];
$mixedArray = [1, 'String',3.5];

var_dump($numberArray);
var_dump($mixedArray);

$users= [
	[
		"NAME" => "Mark",
		"AGE" => 25,
		"PHONE" => "+75906790756"
	],
	[
		"NAME" => "Oleg",
		"AGE" => 34,
		"PHONE" => "+7534534534"
	],
	[
		"NAME" => "Gevorg",
		"AGE" => 18,
		"PHONE" => "+7593453535"
	]
	];

	var_dump($users);
	var_dump($users[0]["NAME"]); 

?> 
</pre> -->

<pre>
<?php
// $nameArray = [1,2,3,"string",true]; // PHP 5.+
// $anotherArray = array();

// var_dump($nameArray);

$users = [
	["ID" => "nameId",
	"Name" => "Mark",
	"Age" => 24, 
	"Mail" => "fjkgd@gmail.com"],

	["ID" => "nameId",
	"Name" => "Oleg",
	"Age" => 24, 
	"Mail" => "fjkgd@gmail.com"],

	["ID" => "nameId",
	"Name" => "Pavel",
	"Age" => 24, 
	"Mail" => "fjkgd@gmail.com"]
];
var_dump($users[2]["Name"]);



?>
</pre>