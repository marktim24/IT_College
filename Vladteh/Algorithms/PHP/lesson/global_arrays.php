
<pre>
<?php

var_dump($_COOKIE); // все cookie страницы
var_dump($_FILES); // список файлов, загруженных на сервер
var_dump($_GET); // список всех переменных переданных методом GET
var_dump($_POST); // список всех переменных переданных методом POST
var_dump($_REQUEST); // GET + POST + COOKIES
var_dump($_SERVER); // все данные и настройки сервера во внутреннем скрипте
var_dump($_SESSION); // все переменные созданные текущим пользователем
var_dump($_ENV); // переменные, установленные для всех скриптов


?>
</pre>