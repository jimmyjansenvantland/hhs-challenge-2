
function changeDesignOnTime(){
    var now = new Date();
    var seconds = now.getSeconds();
    var timeBoxInner = document.getElementById("timeBoxInner");
    timeBoxInner.style.background = blackTrans;
    var timeBoxBackground = document.getElementById("dashboard-inner");
    if (seconds < 20){
        timeBoxBackground.classList.remove("nightGradient");
        timeBoxBackground.classList.add("morningGradient");
    } else if(seconds > 19 && seconds < 30) {
        timeBoxBackground.classList.remove("morningGradient");
        timeBoxBackground.classList.add("dayGradient");
    } else if (seconds > 29 && seconds < 50){
        timeBoxBackground.classList.remove("dayGradient");
        timeBoxBackground.classList.add("eveningGradient");
    } else{
        timeBoxBackground.classList.remove("eveningGradient");
        timeBoxBackground.classList.add("nightGradient");
    }
}

function changeDesignOnTime(){
    var now = new Date();
    var seconds = now.getSeconds();
    var timeBoxInner = document.getElementById("timeBoxInner");
    timeBoxInner.style.background = blackTrans;
    var timeBoxBackground = document.getElementById("dashboard-inner");
    if (seconds < 20){
        timeBoxBackground.style.backgroundImage = morningGradient;
        timeBoxInner.style.background = whiteTrans;
    } else if(seconds > 19 && seconds < 30) {
        timeBoxBackground.style.backgroundImage = dayGradient;
        timeBoxInner.style.background = whiteTrans;
    } else if (seconds > 29 && seconds < 50){
        timeBoxBackground.style.backgroundImage = eveningGradient;
        timeBoxInner.style.background = whiteTrans;
    } else{
        timeBoxBackground.style.backgroundImage = nightGradient;
        timeBoxInner.style.background = blackTrans;
    }
}


