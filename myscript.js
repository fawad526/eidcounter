const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minutesE1=document.getElementById('minutes');
const secondsE1=document.getElementById('seconds');



const eid="21 April 2023";

function countdown(){
    
    const eidDate = new Date(eid);
    const currentDate = new Date();

    const totalSeconds = (eidDate - currentDate  ) / 1000;
    
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60
    const seconds=Math.floor(totalSeconds)%60;


    daysE1.innerHTML=days;
    hoursE1.innerHTML=formatTime(hours);
    minutesE1.innerHTML=formatTime(minutes);
    secondsE1.innerHTML=formatTime(seconds);

    
}
function formatTime(time){
    return time < 10 ? `0${time}` : time; 
}

countdown();
setInterval(countdown , 1000);