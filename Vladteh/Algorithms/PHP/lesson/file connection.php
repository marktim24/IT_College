<?php
// include_once 'variables basic.php';
include 'variables basic.php'; // Warning
require 'variables basic.php'; // Fatal error

include_once 'variables basic.php';
require_once 'variables basic.php';

var_dump($a);
