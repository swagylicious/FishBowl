let fill = 90;
let intervalId = null;
const fishbowl = document.getElementById('fishbowl');
const fish = document.getElementById('fish');
const tap    = document.getElementById('tap');

const emptyFishbowl = () => setInterval(() => {
    fill = fill - 1;
    fishbowl.style = `--filling`
}, 200);