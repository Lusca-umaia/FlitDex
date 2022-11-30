// barras de personalidade//////////////////////////////
let marker = document.getElementsByClassName('marker')

let array = [90, 75, 80, 75, 85, 50, 60]
for (i = 0; i < marker.length; i++) {
    marker[i].style.left = `${array[i]}%`
}

// botão editar////////////////////////////////////////
let btnEditar = document.getElementById('btnEditar')
let tituloSessaoDois = document.getElementById('tituloSessaoDois')
let descricaoSessaoDois = document.getElementById('descricaoSessaoDois')

btnEditar.addEventListener('click', function car() {
    console.log("entrou");
    titulo = prompt("Digite o Nome do usuário:")
    descricao = prompt("Escreva algo que o descreva:")
    localStorage.setItem('nome', titulo)
    localStorage.setItem('descricao', descricao)

    let verificador = true
    window.localStorage.setItem('verificadorLocalStarage', verificador)
})

if (window.localStorage.getItem('verificadorLocalStarage')) {
    let nomeLocal = window.localStorage.getItem('nome')
    let descricaoLocal = window.localStorage.getItem('descricao')

    !nomeLocal ? tituloSessaoDois.innerHTML = "Allan Sampaio" : tituloSessaoDois.innerHTML = nomeLocal
    !descricaoLocal ? descricaoSessaoDois.innerHTML = "Desenvolvedor .Net junior | C# | Entity Framework | SQL | Testes unitários | WebAPI" :descricaoSessaoDois.innerHTML = descricaoLocal
}