function contar() {
    let inicio = document.querySelector('input#txInicio')
    let fim = document.querySelector('input#txFim')
    let passo = document.querySelector('input#txPasso')
    let res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Preencha todos os campos.'

    } else if (Number(fim.value) < Number(inicio.value)) {
        res.innerHTML = 'O campo "Fim" não pode ser menor que o campo "Inicio".'

    } else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1.')
            p = 1
        }
        if (i < f) {
            for (let j = i; i <= f; j += p) {
                res.innerHTML += `${j} \u{1F449}`
            }
        }else{
            for(let j=i; j>=f; c-=p){
                res.innerHTML += `${j} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`

    }
}
