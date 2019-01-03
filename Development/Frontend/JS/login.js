$(document).ready(function() {
    $("button").click(function() {
        $("#result").html("Logging in...");
		var data = $("#loginForm").serializeArray();
		console.log(data);
		$.post($("#loginForm").attr("action"), data, function(info) {
            $("#result").html(info);
        });
	});
	
	$("#loginForm").submit(function() {
		return false;
	});
});