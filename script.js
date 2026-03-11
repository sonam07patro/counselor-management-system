let usedHours = 0
let totalHours = 192

function checkin(id){

let session = document.getElementById("s"+id)
let count = parseInt(session.innerText)

if(count < 3){

count++
session.innerText = count

let percent = (count/3)*100
document.getElementById("bar"+id).style.width = percent+"%"

usedHours++
document.getElementById("used").innerText = usedHours
document.getElementById("remaining").innerText = totalHours-usedHours

}

}