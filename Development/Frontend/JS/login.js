$(document).ready(function() {
    $("button").click(function() {
        if(checkValidate() != "")
            $("#result").html(checkValidate());
        else
        {
            $("#result").html("Registering user...");
			var data = $("#regForm").serializeArray();
			console.log(data);
			$.post($("#regForm").attr("action"), data, function(info) {
                $("#result").html(info);
            });
        }
	});
	
	$("#regForm").submit(function() {
		return false;
	});
});

function checkValidate() {
    var message = validateUsername() + validatePassword();
    return message;
}

function validateUsername(){
	/*************** Verify the Username ************/
	/*Minimum 6 chars, only alphanumeric*/
	var username = $("input[name='username']").val();
	if(username.length < 6 || !isAlpha(username.charAt(0)) || !isAlphaNumeric(username))
	{
		return "Username must be alphanumeric, begin with a letter, and be at least 6 characters long.\n"; 
	}
	else
	{
		return "";
	}
}

function validatePassword(){
	/*************** Verify the Password ************/
	/* Alphanumberic, 8 chars minimum, at least 1 capital letter */
    var password = $("input[name='psw']").val();
    var message = "";
	if(password.length < 8)
	{
		message += "Password must have at least 8 characters.\n";
	}
	if(!checkCapital(password) || !isAlphaNumeric(password))
	{
		message += "Password must have a capital letter and be alphanumeric.\n";
	}
	if($("input[name='repeat']").val() != password)
	{
		message += "Passwords do not match.\n";
	}
	return message;
}

function isAlpha(value)
{
	var validChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
	for(var i = 0; i < value.length; i++)
	{
		if(validChars.indexOf(value.charAt(i)) == -1)
		{
			return false;
		}
	}
	return true;
}

function checkNumeric(value)
{
	var validChars = "1234567890";
	for(var i = 0; i < value.length; i++)
	{
		if(validChars.indexOf(value.charAt(i)) != -1)
		{
			return true;
		}
	}
	return false;
}

function isAlphaNumeric(value)
{
	var validChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890_";
	for(var i = 0; i < value.length; i++)
	{
		if(validChars.indexOf(value.charAt(i)) == -1)
		{
			return false;
		}
	}
	return true;
}

function checkCapital(value)
{
	var validChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
	for(var i = 0; i < value.length; i++)
	{
		if(validChars.indexOf(value.charAt(i)) != -1)
		{
			return true;
		}
	}
	return false;
}

function checkLowerCase(value)
{
	var validChars = "qwertyuiopasdfghjklzxcvbnm";
	for(var i = 0; i < value.length; i++)
	{
		if(validChars.indexOf(value.charAt(i)) != -1)
		{
			return true;
		}
	}
	return false;
}