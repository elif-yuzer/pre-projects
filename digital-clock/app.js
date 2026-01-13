const timeDisplay = document.getElementById("time-display");
const ampmDisplay = document.getElementById("ampm-display");
const dateDisplay = document.getElementById("date-display");

const digitalClock=()=>{
    const simdi=new Date()
    let hour=simdi.getHours()
    let minute=simdi.getMinutes()
    let second=simdi.getSeconds()
    let date = simdi.toLocaleDateString();
   /* let ampm=simdi.toLocaleTimeString() */
   let ampm = hour >= 12 ? "PM" : "AM";
  

    hour=hour<10 ? "0" + hour : hour
    minute=minute<10 ? "0" + minute : minute
    second=second<10 ? "0" + second : second
    ampm=hour>=12 ? "PM" : "AM"

    timeDisplay.innerText=`${hour}:${minute}:${second}`
    ampmDisplay.innerText=ampm
    dateDisplay.innerText = date;

}


setInterval(digitalClock,1000)