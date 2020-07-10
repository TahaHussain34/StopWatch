
// stopwatch

var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
var status = "stopped"; 

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
}

function startStop(){
    if(status === "stopped"){
        interval = setInterval(timer, 10)
        var dis = document.getElementById("startStop")
        dis.innerHTML = " Stop"
        dis.className = "fa fa-pause"
        status = "started"
    }
    else{
        stop()
    }
}

function stop(){
    clearInterval(interval)
    var dis = document.getElementById("startStop")
    dis.innerHTML = " Start"
    dis.className = "fa fa-play"
    status = "stopped"
}

function reset(){
    stop()
    var name = prompt("Enter your name")
    var rec = name + " has run for " + minHeading.innerHTML + " minutes, " + secHeading.innerHTML + " seconds " + 
    msecHeading.innerHTML + " milliseconds"
    var res =  document.getElementById("rec")
    res.innerHTML = rec;
    msecHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    minHeading.innerHTML = 0;
    sec = 0;
    msec = 0;
    min = 0;
}




