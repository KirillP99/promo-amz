const btn = document.querySelector('.step-btn .btn');
const file = document.querySelector('#file');
const imgButton = document.querySelector('.imgButton');

btn.disabled = true;

file.addEventListener('input', () => {
    if (file.files.length) {
        btn.disabled = false;
        imgButton.innerText = file.files[0].name;
    }
});

imgButton.addEventListener('click', () => {
    file.click();
});