var red="#E51736",green="#00CC61",white="#FFF",black="#000",partlyTransparent="0.15",blackTrans="rgba(0,0,0,"+partlyTransparent+")",whiteTrans="rgba(255,255,255,"+partlyTransparent+")",today=new Date,months=new Array("January","February","March","April","May","June","July","August","September","November","December"),date=document.getElementById("date"),time=document.getElementById("timeText");function klokTikt(){var e=new Date,t=e.getSeconds();t<10&&(t="0"+t);var n=e.getMinutes();n<10&&(n="0"+n);var a=e.getHours();a<10&&(a="0"+a),time.innerHTML=a+":"+n+":"+t}function changeDesignOnTime(){var e,t=(new Date).getSeconds(),n=document.getElementById("timeBoxInner"),a=[document.getElementById("offCanvasSun"),document.getElementById("offCanvasSunset"),document.getElementById("offCanvasMoon")];n.style.background=blackTrans;var r=document.getElementById("dashboard-inner");n.style.background=t<20?(r.style.backgroundImage="url('morning-gradient.svg')",a[1].style.opacity=1,a[2].style.opacity=0,whiteTrans):19<t&&t<30?(r.style.backgroundImage="url('day-gradient.svg')",a[0].style.opacity=1,a[1].style.opacity=0,whiteTrans):30<=t&&t<50?(r.style.backgroundImage="url('evening-gradient.svg')",a[1].style.opacity=1,a[0].style.opacity=0,whiteTrans):(r.style.backgroundImage="url('night-gradient.svg')",a[0].style.opacity=0,a[1].style.opacity=0,a[2].style.opacity=1,blackTrans)}date.innerHTML=months[today.getMonth()+1]+" "+today.getDate()+", "+today.getFullYear(),klokTikt(),setInterval(klokTikt,1e3),changeDesignOnTime(),setInterval(changeDesignOnTime,1e3);