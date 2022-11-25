let edit = document.getElementById('edit')
let div = document.getElementById('textPrinc')

edit.addEventListener('click', function car() {
    textName = prompt("Informe o Nome do usuário:")
    textEdit = prompt("Informe o Texto:")
    localStorage.setItem('Name', textName)
    localStorage.setItem('Text', textEdit)
    console.log(window.localStorage.getItem('Name'))
    console.log(window.localStorage.getItem('Text'))

    div.innerHTML = `<h2>${window.localStorage.getItem('Name')}</h2><br><p>${window.localStorage.getItem('Text')}</p>`
    let i = 1
    window.localStorage.setItem('controle', i)
})

if (window.localStorage.getItem('controle') == 1) {
    div.innerHTML = `<h2>${window.localStorage.getItem('Name')}</h2><br><p>${window.localStorage.getItem('Text')}</p>`
}

let person = document.getElementsByClassName('marker')

let array = [20, 40, 10, 60, 70, 90, 30]
for (i = 0; i < person.length; i++) {
    person[i].style.left = `${array[i]}%`
}