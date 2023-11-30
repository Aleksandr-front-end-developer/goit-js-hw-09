import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();

	let delay = Number(form.querySelector('[name="delay"]').value);
	const step = Number(form.querySelector('[name="step"]').value)
	const amount = Number(form.querySelector('[name="amount"]').value);

	for (let i = 1; i <= amount; i += 1) {
		setTimeout(() => {
			createPromise(i, delay)
				.then(({ position, delay }) => {
					Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
						timeout: 3000,
					})

				}).catch(({ position, delay }) => {
					Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
						timeout: 3000,
					})
				});
			delay += step;
		}, delay)
	}
}

function createPromise(position, delay) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			const shouldResolve = Math.random() > 0.3;
			if (shouldResolve) {
				res({ position, delay })
			} else {
				rej({ position, delay })
			}
		}, delay);
	});
}