let statusTracker;
let percentage = 0;

const checkStatus = () => {
	percentage += 20;
	
	$('#progressBar.green').animate({
		width : percentage + '%'
	});
	
	if (percentage === 120) {
		stop();
		location.href = 'rate.html';
	}
}

const startProgress = () => {
	statusTracker = setInterval(checkStatus, 1200);
}

const stop = () => {
	clearInterval(statusTracker);
}

$(document).ready(() => {
	$('#progressBar').progressbar({
		value: 1
	});
	
	startProgress();
});
