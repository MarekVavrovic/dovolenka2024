
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
const countDownTitle = document.querySelector(".count-down-title");
const btns = document.querySelectorAll(".tab-btn");

const countdowns = {
  april: new Date(2024,3, 9, 23, 15, 11),
  august: new Date(2024, 7, 20, 23, 15, 11),
  october: new Date(2024, 9, 24, 22, 30, 11),
};

function updateCountdowns() {
  Object.keys(countdowns).forEach((key) => {
    const deadline = document.querySelector(`.deadline[data-date="${key}"]`);
    if (!deadline) return; // Skip if deadline element is not found for a date
    const items = deadline.querySelectorAll(".deadline-format h4");
    calculateTimeLeft(countdowns[key], items, deadline);
  });
}

function calculateTimeLeft(futureDate, items, deadline) {
  const today = new Date().getTime();
  const t = futureDate.getTime() - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  const values = [days, hours, minutes, seconds].map((item) =>
    item < 10 ? `0${item}` : item
  );

  if (t < 0) {
    deadline.innerHTML = `<h4 class="expired"></h4>`;
    countDownTitle.style.visibility="hidden"
    return; 
  }

  items.forEach((item, index) => {
    item.innerHTML = values[index];
  });
}

updateCountdowns();
setInterval(updateCountdowns, 1000);
