var red="#E51736",green="#00CC61",white="#FFF",black="#000",partlyTransparent="0.15",blackTrans="rgba(0,0,0,"+partlyTransparent+")",whiteTrans="rgba(255,255,255,"+partlyTransparent+")",today=new Date,months=new Array("January","February","March","April","May","June","July","August","September","November","December"),date=document.getElementById("date"),time=document.getElementById("timeText");function klokTikt(){var e=new Date,t=e.getSeconds();t<10&&(t="0"+t);var a=e.getMinutes();a<10&&(a="0"+a);var n=e.getHours();n<10&&(n="0"+n),time.innerHTML=n+":"+a+":"+t}function changeDesignOnTime(){var e,t=(new Date).getHours(),a=document.getElementById("timeBoxInner"),n=[document.getElementById("offCanvasSun"),document.getElementById("offCanvasSunset"),document.getElementById("offCanvasMoon")];a.style.background=blackTrans;var r=document.getElementById("dashboard-inner");a.style.background=7<=t&&t<12?(r.style.backgroundImage="url('morning-gradient.svg')",n[1].style.opacity=1,n[2].style.opacity=0,whiteTrans):12<=t&&t<18?(r.style.backgroundImage="url('day-gradient.svg')",n[0].style.opacity=1,n[1].style.opacity=0,whiteTrans):18<=t&&t<23?(r.style.backgroundImage="url('evening-gradient.svg')",n[1].style.opacity=1,n[0].style.opacity=0,whiteTrans):(r.style.backgroundImage="url('night-gradient.svg')",n[0].style.opacity=0,n[1].style.opacity=0,n[2].style.opacity=1,blackTrans)}date.innerHTML=months[today.getMonth()+1]+" "+today.getDate()+", "+today.getFullYear(),klokTikt(),setInterval(klokTikt,1e3),changeDesignOnTime(),setInterval(changeDesignOnTime,1e3);