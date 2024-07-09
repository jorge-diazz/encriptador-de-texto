const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

document.getElementById("encrypt").onclick = function() {
	let message = document.getElementById("userText").value.toLowerCase();

	if (message) {
		for (let i = 0; i < keys.length; i++) {
			if (message.includes(keys[i][0])) {
				message = message.replaceAll(keys[i][0], keys[i][1]);
			}
		}

		showMessage(message);
	} else {
		noMessage();
	}
}

document.getElementById("decrypt").onclick = function() {
	let message = document.getElementById("userText").value.toLowerCase();

	if (message) {
		for (let i = 0; i < keys.length; i++) {
			if (message.includes(keys[i][1])) {
				message = message.replaceAll(keys[i][1], keys[i][0]);
			}
		}

		showMessage(message);
	} else {
		noMessage();
	}
}

document.getElementById("copy").onclick = function() {
	let copyText = document.getElementById("showText");

	copyText.select();
	copyText.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(copyText.value);

	return;
}

function showMessage(message) {
	document.getElementById("noMessage").style.display = "none";
	document.getElementById("message").style.display = "inline";
	document.getElementById("showText").value = message;
}

function noMessage() {
	document.getElementById("message").style.display = "none";
	document.getElementById("noMessage").style.display = "inline";
	document.getElementById("showText").value = "";
}

noMessage();