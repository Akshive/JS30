const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // removing a weird css problem
  if (seconds === 59) {
    const hand = document.querySelector(".hand");
    hand.style.transition = "all 0s";
    setTimeout(() => {
      hand.style.transition = "all 0.05s";
    }, 1100);
  }

  // seconds/60*360 + offset
  const secondDeg = seconds * 6 + 90;
  const minDeg = minutes * 6 + 90;
  const hoursDeg = hours * 30 + 90;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
};
setInterval(setDate, 1000);
