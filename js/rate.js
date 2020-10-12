const stars = document.querySelector('.stars');
const star = document.querySelector('.star-image');
const link = document.querySelector('.link-step-rate');

link.addEventListener('click', () => location.href = 'http://localhost:3000/done.html');

const changeStars = (amountStars) => {
  stars.innerHTML = '';
  for (let i = 0; i <= amountStars; i += 1) {
    const newNode = star.cloneNode(true);
    stars.appendChild(newNode);
  }
};

const getLeft = (amountStars) => {
  const width = document.body.clientWidth;
  switch (amountStars) {
    case 0: {
      return -3;
    }
    case 1: {
      return 19.6;
    }
    case 2: {
      return 42;
    }
    case 3: {
      return  65;
    }
    case 4: {
      return width > 425 ? 87 : 70;
    }
  }
};

$( ".range" ).slider({
  animate: "slow",
  range: "min",
  value: 60,
  step: 25,
  change: (event, { value }) => {
    stars.style.left = `${getLeft(value / 25)}%`;
    changeStars(value / 25);
  }
});
