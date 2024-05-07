let fill = 90;
let intervalId = null;
const fishbowl = document.getElementById('fishbowl');
const fish = document.getElementById('fish');
const tap    = document.getElementById('tap');

const emptyFishbowl = () => setInterval(() => {
    fill = fill - 1;
    fishbowl.style = `--filling: ${fill}%`;
    if (fill <= 0) {
        clearInterval(intervalId);
    }else if(fill < 20){
        fish.classList.add(`fishbowl__fish--dead`);
    }else if(fill < 50){
        fish.style = `fishbowl__fish--sick`;
    }
}, 200);