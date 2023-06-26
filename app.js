const button = document.getElementById('send-button')

button.addEventListener("click", submitEmail);

function submitEmail() {
    var thanks = document.getElementById('thank-you-message');
    var main = document.getElementById('cover-info');
    main.style.display = "none";
    thanks.style.display = "block";
}

const dismissButton = document.getElementById('dismiss');

dismissButton.addEventListener("click", dismissMessage)

function dismissMessage() {
    var thanks = document.getElementById('thank-you-message');
    var main = document.getElementById('cover-info');
    main.style.display = "block";
    thanks.style.display = "none";
}