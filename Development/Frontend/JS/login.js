$(document).ready(function() {
    $("button").click(function() {
        $("#result").html("Logging in...");
		var data = $("#regForm").serializeArray();
		console.log(data);
		$.post($("#loginForm").attr("action"), data, function(info) {
            $("#result").html(info);
        });
	});
	
	$("#regForm").submit(function() {
		return false;
	});
});