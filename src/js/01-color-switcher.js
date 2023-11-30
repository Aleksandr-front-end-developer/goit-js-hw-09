
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStop.disabled = true;
let timerId = null;

btnStart.addEventListener('click', onClickBtnStart)
btnStop.addEventListener('click', onClickBtnStop)

function changeColorInterval() {
	changeColor();
	timerId = setInterval(changeColor, 1000);
}

function changeColor() {
	document.body.style.backgroundColor = `${getRandomHexColor()}`;
}

function onClickBtnStart() {
	btnStop.disabled = false;
	btnStart.disabled = true;
	changeColorInterval()
}
function onClickBtnStop() {
	btnStop.disabled = true;
	btnStart.disabled = false;
	clearInterval(timerId);
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}