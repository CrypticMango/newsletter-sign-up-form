const button = document.getElementById("send-button");

button.addEventListener("click", submitEmail);

function submitEmail() {
	var thanks = document.getElementById("thank-you-message");
	var main = document.getElementById("cover-info");
	main.style.display = "none";
	thanks.style.display = "block";
}

const dismissButton = document.getElementById("dismiss-button");

dismissButton.addEventListener("click", dismissMessage);

function dismissMessage() {
	location.reload();
}

var input = document.getElementById("email");
console.log(input);

function ValidateEmail(input) {
	var validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (input.value.match(validRegex)) {
		alert("Valid email address!");

		document.input.focus();

		return true;
	} else {
		alert("Invalid email address!");

		document.input.focus();

		return false;
	}
}

ValidateEmail();