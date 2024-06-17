const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

const hour1 = document.getElementById('hour1')
const minute1 = document.getElementById('minute1')
const second1 = document.getElementById('second1')
const day = document.getElementById('day')

const period = document.getElementById('period')
const period1 = document.getElementById('period1')


var monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const clock = setInterval(function time() {
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    let periodRailway = h >= 12 ? 'PM' : 'AM'
    period.innerText = periodRailway

    // For Railway Time
    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.textContent = h.toString().padStart(2, '0')
    minute.innerText = min.toString().padStart(2, '0')
    second.innerText = sec.toString().padStart(2, '0')
    

    // To convert it into 12-hour format
    let periodText = h >= 12 ? 'PM' : 'AM'
    let hour12 = h % 12
    hour12 = hour12 ? hour12 : 12 // the hour '0' should be '12'

    // For Normal Time
    hour1.textContent = hour12.toString().padStart(2, '0')
    minute1.innerText = min.toString().padStart(2, '0')
    second1.innerText = sec.toString().padStart(2, '0')
    period1.innerText = periodText // Add this line to update the period
}, 1000)
