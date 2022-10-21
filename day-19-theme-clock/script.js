// Variables
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

// const body = document.querySelector("body");
// const toggle = document.querySelector('.toggle')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

// Time Rotation Mapping Variable/Formula
const scale = (num, in_min, in_max, out_min, out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}




// Old Theme Toggle
// toggle.addEventListener('click', (e) => {
//     const html = document.querySelector('html')
//     if(html.classList.contains('dark')){
//         html.classList.remove('dark')
//         // e.target.innerHTML = 'Dark Mode'
//     }else {
//         html.classList.add('dark')
//         // e.target.innerHTML = 'Light Mode'
//     }
// })

//New Theme Toggle
toggle.addEventListener("change", () => {

    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className === "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className === "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});




function setTime(){
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    // recognizes 24-hour time - still need this part for 12-hour format
    const hours = time.getHours()
    // recognizes 12-hour clock rotation
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    //AM/PM determiner -- if else syntax -> condition ? then : else
    const ampm = hours >= 12 ? 'PM' : 'AM'


    // Time Rotation Mapping - ${variable(x1, y1, x2, y2)}
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    // Changes digital time
    // 24hour format
    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}`: minutes}`
    // 12hour format
    // timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`

    //Change date
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class = "circle">${date}</span>`
}



setTime()
// Movement of seconds
setInterval(setTime, 1000)