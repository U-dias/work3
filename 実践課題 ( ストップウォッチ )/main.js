const counter = document.getElementById('counter');
const start = document.getElementById('start');
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let startTime;
let timeoutId;
let elapsedTime = 0;


/*スタート部分*/
start.addEventListener('click', () => 
{
    buttonStateRunnig ();
    startTime = Date.now();
    console.log(startTime);
    console.log(new Date(startTime))
    countUp();
});

function countUp() {
    const d=new Date(Date.now()-startTime+elapsedTime);
    const m=String(d.getMinutes()).padStart(2,"0");
    const s=String(d.getSeconds()).padStart(2,"0");
    const ms =String(d.getMilliseconds()).padStart(3,"0");
    counter . textContent = `${m}:${s}:${ms}`;
    timeoutId =setTimeout(() => {
        countUp();
    } , 10);
}

/*ストップ部分*/
stop.addEventListener('click',() => {
    buttonStateStop ();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
});

/*リセット部分*/
reset.addEventListener (`click` , () => {
    buttonStateInitial ()
    
    counter.textContent =`00:00:000`;
    elapsedTime = 0;
    }
)

/*ボタンの動作*/
function buttonStateInitial () {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
}

function buttonStateRunnig () {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
}

function buttonStateStop () {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
}

buttonStateInitial ();












