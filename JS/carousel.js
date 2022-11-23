let imgs = document.getElementById('img')
let img = document.querySelectorAll('#img div')

let left = document.getElementById('left')
let right = document.getElementById('right')

let controle = 0

right.addEventListener('click', function () {
    controle += 1

    if (controle > img.length - 1) {
        controle = 0
    }
    imgs.style.transform = `translateX(${-controle * 500}px)`
})

left.addEventListener('click', function car() {
    controle -= 1
    if (controle < 0) {
        controle = img.length - 1
    }
    imgs.style.transform = `translateX(${-controle * 500}px)`
})
