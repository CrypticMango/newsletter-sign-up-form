const button = document.getElementById('send-button')

button.addEventListener("click", submitEmail);

function submitEmail() {
    var thanks = document.getElementById('thank-you-message');
    thanks.style.display = "block";
    var main = document.getElementById('cover-info');
    main.style.display = "none";
}
