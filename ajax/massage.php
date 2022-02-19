<?php
	$email =  $_POST['email'];
	$name =  $_POST['name'];
	$massage =  $_POST['massage'];

	$subject = "=?utf-8?B?".base64_encode("сообщение")."?=";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

	$success = mail("akovkvlv798@gmail.com", $subject, $message, $headers);
	echo $success;
?>