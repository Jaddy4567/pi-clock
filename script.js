var mode = 'clock';

var lastmode = '';
var lastViewWidth;
var timer = 1000;

function init() {
    var duration = timer * 60;
    runMeter(duration)
}

/**
 * 
 * @param {number} duration in milliseconds
 */
function runMeter(duration) {
    var meter = document.getElementById('Meter');

    var length = 0;
    var interval = setInterval(function () {
        length += 10;
        meter.value = length;
        if (length >= 100) {
            showClock();
            clearInterval(interval);
        }
    }, duration * 0.2);
}

function showClock() {
    var loading = document.getElementById("LoadingContainer");
    loading.className = "hidden";
    var container = document.getElementById("TextContainer");
    container.className = "";
    showTime()
}

function showTime() {

    // Just hardcode a future date for testing

    var now = new Date();
    var ms = now.getMilliseconds();

    if (mode != lastmode) {
        lastmode = mode;
        lastViewWidth = 0;
    }


    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    document.getElementById("hour").innerText = h;
    document.getElementById("min").innerText = m;
    document.getElementById("sec").innerText = s;

    // Trying to do something clever here to ensure we update the time roughly within
    // 100ms of the turn of the second

    if (ms < 990) {
        timer = 1000 - ms;
    }
    else {
        timer = 10;
    }

    setTimeout(showTime, timer);
}

