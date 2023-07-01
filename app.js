const button = document.getElementById("send-button");

button.addEventListener("click", submitEmail);

function submitEmail() {
	var thanks = document.getElementById("thank-you-message");
	var main = document.getElementById("cover-info");
	main.style.display = "none";
	thanks.style.display = "block";
	ValidateEmail();
}

const dismissButton = document.getElementById("dismiss-button");

dismissButton.addEventListener("click", dismissMessage);

function dismissMessage() {
	location.reload();
}