(function () {
	"use strict";
	const messageDiv = document.getElementById("message");

	function hiddenMsg() {
		setTimeout(function () {
			document.body.removeChild(messageDiv);
		}, 2000);
	}

	hiddenMsg();
})();
