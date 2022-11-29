let marker = document.getElementsByClassName('marker')

let array = [90, 75, 80, 75, 85, 50, 60]
for (i = 0; i < marker.length; i++) {
    marker[i].style.left = `${array[i]}%`
}