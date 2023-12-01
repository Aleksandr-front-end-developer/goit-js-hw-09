import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]')
btn.disabled = true

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selecteddates) {
		const targetDate = selecteddates[0];

		if (targetDate < new Date()) {
			Notiflix.Notify.failure('Please choose a date in the future', {
				timeout: 3000,
			});

			btn.disabled = true

		} else {
			btn.disabled = false

			btn.addEventListener('click', () => {
				btn.disabled = true
				const currentDate = new Date();
				let difference = targetDate - currentDate;

				const intervalId = setInterval(changeTimer, 1000)
				changeTimer();

				function changeTimer() {
					if (difference <= 0) {
						clearInterval(intervalId);
						return
					}

					const { days, hours, minutes, seconds } = convertMs(difference);

					const daysEl = document.querySelector('[data-days]')
					const hoursEl = document.querySelector('[data-hours]')
					const minutesEl = document.querySelector('[data-minutes]')
					const secondsEl = document.querySelector('[data-seconds]')

					daysEl.textContent = addZeroStart(days);
					hoursEl.textContent = addZeroStart(hours);
					minutesEl.textContent = addZeroStart(minutes);
					secondsEl.textContent = addZeroStart(seconds);

					difference -= 1000;

				}

			});
		}

	},
};

flatpickr(input, options);

function addZeroStart(number) {
	return number.toString().padStart(2, 0);
}

function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}

