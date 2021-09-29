const CountdownTimer = {
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
};

const daysHTML = document.querySelector('span[data-value="days"]');
const hoursHTML = document.querySelector('span[data-value="hours"]');
const minsHTML = document.querySelector('span[data-value="mins"]');
const secsHTML = document.querySelector('span[data-value="secs"]');

function getTime(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { days, hours, mins, secs };
}
setInterval(() => {
  const currentTime = Date.now();
  const time = CountdownTimer.targetDate - currentTime;
  console.log(getTime(time));

  daysHTML.textContent = getTime(time).days;
  hoursHTML.textContent = getTime(time).hours;
  minsHTML.textContent = getTime(time).mins;
  secsHTML.textContent = getTime(time).secs;
}, 1000);
