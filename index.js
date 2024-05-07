let fill = 90;
let intervalId = null;
const fishbowl = document.getElementById('fishbowl');
const fish = document.getElementById('fish');
const tap    = document.getElementById('tap');

const emptyFishbowl = () => setInterval(() => {
  if (fill > 0) {
    fill--;
    fishbowl.style.background = `linear-gradient(to top, #f1c40f ${fill}%, #3498db ${fill}%)`;
  } else {
    clearInterval(intervalId);
    tap.style.display = 'block';
  }
}, 1000);