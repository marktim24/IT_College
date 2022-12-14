
<pre>
<?php

var_dump(); // возвращает тип переменной


// проверка типов переменной 

is_array();
is_bool();

is_float();
is_double();
is_real();

is_int();
is_integer();
is_long();

is_null();
is_object();
is_scalar();
is_string();

$a = 0; 
isset($a); // true 
empty($a);

работа с массивами
$arr = [
	"user1" => "id02",
	"user2" => "id03",
];

// count($arr); // 2
var_dump(array_pop($arr));
var_dump(array_shift($arr));

array_push($arr, 2);
array_unshift($arr, 2);

array_keys($arr);
var_dump(in_array("value2",$arr));
var_dump(array_key_exists("key1", $arr));

array_unique($arr);


// математические функции

abs(-10); // 10

cos(0.6);
sin(0.6);
log(0.6);
pi(); 

floor(2.99); // 2
ceil(2.01); // 3 
round(4.5); // 5

round(4.5754, 2); // 4.57
max(1,2,3,4,5,6);
min(1,2,3,4,5,6);

pow(4, 2); // 16
4 ** 2; // 16 

rand(0,10); // 4


строки 
$myStr = "ios and android";
strlen($myStr); // 3
$arr = (explode(' ', $myStr));
var_dump(implode(' ', $arr));

var_dump (htmlspecialchars ("<a href='www.php.net'>PHP</a>"));
var_dump(trim ("                   Hello                                           ,      Oleg  \t"));
var_dump(trim ("                   Hello                                           ,      Oleg  "));

дата и время

var_dump(time()); // кол-во секунд с 1970 года
var_dump(date('Y-m-d H:m:s')); 

?>
</pre>