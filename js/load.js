let i = 0;

const move = () => {
	if (i === 0) {
		i = 1;
		
		const elem = document.querySelector('.img-wrapper');
		let width = 0;
		
		const id = setInterval(frame, 500);
		
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
				location.href = 'rate.html';
			} else {
				width += 20;
				elem.style.width = width + "%";
			}
		}
	}
}


$(document).ready(() => {
	move();
});
