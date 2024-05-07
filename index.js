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
        fish.classList.add('fishbowl__fish--dead');
    }else if(fill < 50){
        fish.classList.add('fishbowl__fish--dying');
    }else{
        fish.classList.remove('fishbowl__fish--dead');
        fish.classList.remove('fishbowl__fish--dying');
    }
}, 200);

intervalId = emptyFishbowl();

tap.addEventListener('click', () => {
    tap.classList.add('fishbowl__tap--active');
    setTimeout(() => tap.classList.remove('fishbowl__tap--active'), 500);{
        if (fill <= 50) {
            
        }
        if (fill === 100) {
            clearInterval(intervalId);
        }
    };
});