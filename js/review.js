const textarea = document.querySelector('.textarea');
const btn = document.querySelector('.btn');

btn.disabled = true;

textarea.addEventListener('input', () => {
    btn.disabled = false;

    if (textarea.value.length < 2) {
        btn.disabled = true;
    }
});

btn.addEventListener('click', () => {
    location.href = 'http://localhost:3000/complete.html';
});
