const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.disabled = true;

input.addEventListener('input', () => {
    if (input.value.indexOf('@') !== -1) {
        btn.disabled = false;
    } else if (input.value.indexOf('@') === -1) {
        btn.disabled = true;
    }
});

btn.addEventListener('click', () => {
    location.href = 'review.html';
});
