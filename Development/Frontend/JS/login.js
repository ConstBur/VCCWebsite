$(document).ready(function() {
    $("button").click(function() {
        if(checkValidate() != "")
            $("#result").html(checkValidate());
        else
        {
            $("#result").html("Registering user...");
            var data = $("#regForm :input").serializeArray();
            $.post($("#regForm").attr("action"), data, function(info) {
                $("#result").html(info);
            });
        }
    });
});

function checkValidate() {
    var message = validateEmail() + validatePassword();
    return message;
}

function validateEmail(){
	/*************** Verify the Email ************/
    var email = $("input[name='email']").val();
    var message = "";
	if(email.indexOf("@") == -1)
	{
		message += "Email doesn't have a @\n";
	}
	var username = email.substring(0, email.indexOf("@"));
	if(!isAlphaNumeric(username)) 
	{
		message += "Email isn't alphanumeric.\n";
	}

	var domain = email.substring(email.indexOf("@") + 1);
	if(domain.indexOf(".") == -1)
	{
		message += "Email has no domain name.\n";
	}
	var domainName = domain.substring(0, domain.indexOf("."));
	if(!isAlphaNumeric(domainName))
	{
		message += "Domain name isn't alphanumeric.\n";
	}
	var extension = domain.substring(domain.indexOf(".") + 1);
	if(!isAlpha(extension))
	{
		message += "Extension is not alphabetical.\n";
    }
    return message;
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
	if(!checkCapital(password) || !checkNumeric(password)
		|| !checkLowerCase(password)|| !isAlphaNumeric(password))
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
	var validChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-";
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
	var validChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
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