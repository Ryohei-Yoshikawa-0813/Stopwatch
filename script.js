let startButton;
let stopButton;
let resetButton;
let showTime; //表示時間
let timer;
let startTime; //開始時間
let elapsedTime = 0; //経過時間
let holdTime = 0; //停止時間

//変数にHTML要素を設定
window.onload = function() {
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    showTime = document.getElementById("time");
}

//スタートボタンを押した時
function start() {
    startTime = Date.now();

    measureTime();

    //ボタンの活性・非活性
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
}

//ストップボタンを押した時
function stop() {
    //タイマーの停止
    clearInterval(timer);

    //停止した時の時間
    holdTime += Date.now -startTime;

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

//リセットボタンを押した時
function reset() {
    clearInterval(timer);

    elapsedTime = 0;
    holdTime = 0;
    showTime.textContent = "00:00.000";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

//時間計測
function measureTime() {
    timer = setTimeout(function() {
        //経過時間を計算し表示
        elapsedTime = Date.now() - startTime + holdTime;
        showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 23);

        //関数を繰り返す(計測を継続)
        measureTime();
    }, 10);
}