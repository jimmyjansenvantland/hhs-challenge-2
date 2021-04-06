var red = "#E51736";
var green = "#00CC61";
var white = "#FFF";
var black = "#000";
var partlyTransparent = "0.15";
var blackTrans = "rgba(0,0,0," + partlyTransparent + ")";
var whiteTrans = "rgba(255,255,255," + partlyTransparent + ")";

var today = new Date();
var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December');
var date = document.getElementById("date");
var time = document.getElementById("timeText");

// datum van vandaag onder 'clock'
date.innerHTML = months[(today.getMonth()+1)] + ' ' + today.getDate() + ', ' + today.getFullYear();

// tijd in de klok, ik snap niet waarom ik niet de var 'today' kan gebruiken
function klokTikt(){
    var now = new Date();
    var seconds = now.getSeconds();
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    var minutes = now.getMinutes();
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    var hours = now.getHours();
    if(hours < 10){
        hours = '0' + hours;
    }
    time.innerHTML = hours + ':' + minutes + ':' + seconds;
}
klokTikt();
setInterval(klokTikt, 1000);


// veranderend design om bepaalde tijd

function changeDesignOnTime(){
    var now = new Date();
    var seconds = now.getSeconds();
    var timeBoxInner = document.getElementById("timeBoxInner");
    var icon = [document.getElementById('offCanvasSun'), document.getElementById('offCanvasSunset'), document.getElementById('offCanvasMoon')];
    timeBoxInner.style.background = blackTrans;
    var timeBoxBackground = document.getElementById("dashboard-inner");
    if (seconds < 20){
        timeBoxBackground.style.backgroundImage = "url('morning-gradient.svg')";
        icon[1].style.opacity = 1;
        icon[2].style.opacity = 0;
        timeBoxInner.style.background = whiteTrans;
    } else if(seconds > 19 && seconds < 30) {
        timeBoxBackground.style.backgroundImage = "url('day-gradient.svg')";
        icon[0].style.opacity = 1;
        icon[1].style.opacity = 0;
        timeBoxInner.style.background = whiteTrans;
    } else if (seconds >= 30 && seconds < 50){
        timeBoxBackground.style.backgroundImage = "url('evening-gradient.svg')";
        icon[1].style.opacity = 1;
        icon[0].style.opacity = 0;
        timeBoxInner.style.background = whiteTrans;
    } else{
        timeBoxBackground.style.backgroundImage = "url('night-gradient.svg')";
        icon[0].style.opacity = 0;
        icon[1].style.opacity = 0;
        icon[2].style.opacity = 1;
        timeBoxInner.style.background = blackTrans;
    }
}

changeDesignOnTime();
setInterval(changeDesignOnTime, 1000);

