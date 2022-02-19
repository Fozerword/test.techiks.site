$('#sendMail').on("click", function (){

	var email = $('#email').val().trim();
	var name = $('#name').val().trim();
	var massage = $('#massage').val().trim();
	var error=true;
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(email ===''){
		$('#email').attr("placeholder", "enter email");
		$('#email').addClass('error');
		error=false;
	}else if(reg.test(email) == false){
		$('#email').val('');
	    $('#email').attr("placeholder", "incorrect email");
		$('#email').addClass('error');
	}
	if(name===''){
		$('#name').attr("placeholder", "enter name");
		$('#name').addClass('error');
		error= false;
	}
	if(massage==''){
		$('#massage').attr("placeholder", "enter massage");
		$('#massage').addClass('error');
		error= false;
	}else if(massage.length<20){
		$('#massage').val('');
		$('#massage').attr("placeholder", "enter at least 20 characters");
		$('#massage').addClass('error');
		error= false;
	}

	if(error){
		$.ajax({
			url: 'ajax/massage.php',
			type: 'POST',
			cache: false,
			data: {name: name, email: email, massage: massage},
			dataType: 'html',
			beforeSend: function(){
				$('#sendMail').prop("disabled", true);
			},
			success: function(data){
				if(!data)
					alert("Были ошибки, сообщение не отправленно");
				else
					$('#form').trigger("reset");


					console.log("все получилось");
					$('#sendMail').prop("disabled", false);
			}
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");			
		});
		
	}
})
$('#name').click(function(){
    $('#name').removeClass('error');
});
$('#email').click(function(){
    $('#email').removeClass('error');
});
$('#massage').click(function(){
    $('#massage').removeClass('error');
});