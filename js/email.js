const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
// const prefixBlock = document.querySelector('.prefix-block');

btn.disabled = true;

// const changeInputEvent = new Event('input');

input.addEventListener('input', () => {
    if (input.value.indexOf('@') !== -1) {
        btn.disabled = false;
    } else if (input.value.indexOf('@') === -1) {
        btn.disabled = true;
    }
});

// prefixBlock.addEventListener('click', e => {
//     e.preventDefault();

//     if (!input.value) {
//         return;
//     }

    // if (e.target.className === 'prefix' && input.value.indexOf('@') !== -1) {
    //     input.value = input.value.replace(/(@.+)/g, e.target.innerText);
    //     return;
    // }

    // if (e.target.className === 'prefix') {
    //     input.value += e.target.innerText;
    //     input.dispatchEvent(changeInputEvent);
    // }

//     input.removeEventListener('input', changeInputEvent);

//     return;
// });

btn.addEventListener('click', () => {
    location.href = 'review.html';
});
