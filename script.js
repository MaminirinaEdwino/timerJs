var heure = document.getElementById('heure')
var minute = document.getElementById('minute')
var seconde = document.getElementById('seconde')

var heure1 = document.getElementById('heure1')
var minute1 = document.getElementById('minute1')
var seconde1 = document.getElementById('seconde1')
var barreSeconde = document.getElementById('barreSecond')
var barreMinute = document.getElementById('barreMinute')
var barreSeconde1 = document.getElementById('barreSecond1')
var barreMinute1 = document.getElementById('barreMinute1')
var barreHeure = document.getElementById('barreHeure')
var barreHeure1 = document.getElementById('barreHeure1')
let etat = false

let sec = 0
let min = 0
let heur = 0
let timer;
setInterval(async () => {
    let now = new Date()
    let nowheure = now.getHours()
    let nowminute = now.getMinutes()
    let nowseconde = now.getSeconds()
    bsw1 = (nowseconde * 100) / 60
    bmw1 = (nowminute * 100) / 60
    bhw1 = (nowheure * 100) / 24
    barreSeconde1.style.width = bsw1 + '%'

    barreMinute1.style.width = bmw1 + '%'
    barreHeure1.textContent = nowheure + ' H'
    barreHeure1.style.width = bhw1 + '%'
    barreSeconde1.textContent = nowseconde + ' sec'
    barreMinute1.textContent = nowminute + ' min'
    { nowheure < 10 ? heure1.textContent = "0" + nowheure : heure1.textContent = nowheure }
    { nowminute < 10 ? minute1.textContent = "0" + nowminute : minute1.textContent = nowminute }
    { nowseconde < 10 ? seconde1.textContent = "0" + nowseconde : seconde1.textContent = nowseconde }
}, 1000);
let start = async () => {
    timer = setInterval(async () => {


        if (sec < 60) {
            sec += 1
        }
        if (sec == 60) {
            sec = 0
            min++
        }
        if (min == 60) {
            heur++
            min = 0
        }
        bsw = (sec * 100) / 60
        bmw = (min * 100) / 60
        bhw = (heur * 100) / 24
        barreSeconde.style.width = bsw + '%'
        barreSeconde.textContent = sec + ' sec'
        barreMinute.style.width = bmw + '%'
        barreMinute.textContent = min + ' min'
        barreHeure.textContent = heur + ' H'
        barreHeure.style.width = bhw + '%'
        { sec < 10 ? seconde.textContent = "0" + sec : seconde.textContent = sec }
        { min < 10 ? minute.textContent = "0" + min : minute.textContent = min }
        { heur < 10 ? heure.textContent = "0" + heur : heure.textContent = heur }

    }, 1000);
}
let stop = () => {
    clearInterval(timer);
}
const reset = () => {
    sec = 0
    min = 0
    heur = 0
}
