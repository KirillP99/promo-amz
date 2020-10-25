const link = document.querySelector('.link-step-rate');

link.addEventListener('click', () => location.href = 'http://localhost:3000/done.html');

$("#rate").rate({
  selected_symbol_type: 'image',
  max_value: 5,
  step_size: 1,
  initial_value: 1,
  symbols: {
    image: {
      base: '<img style="padding-right: 9px" src="../assets/images/star-small.svg" alt="star" />',
      hover: '<img style="padding-right: 9px" src="../assets/images/star-main.svg" alt="star" />',
      selected: '<img style="padding-right: 9px" src="../assets/images/star-main.svg" alt="star" />',
    },
  }
});
