const btn = document.querySelector('.step-btn .btn');
const file = document.querySelector('#file');
const imgButton = document.querySelector('.imgButton');

btn.disabled = true;

file.addEventListener('input', () => {
    if (file.files.length) {
        btn.disabled = false;
        imgButton.style.opacity = 0;
        file.style.opacity = 1;
    } else {
        btn.disabled = true;
        imgButton.style.opacity = 1;
        file.style.opacity = 0;
    }
});

imgButton.addEventListener('click', () => {
    file.click();
});