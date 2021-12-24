function contar() {
    var inicio = document.querySelector('input#txInicio')
    var fim = document.querySelector('input#txFim')
    var passo = document.querySelector('input#txPasso')
    var res = document.querySelector('div#res')

    if (inicio.value == '' || fim.value == '' || passo.value == '') {
        alert('Preencha todos os campos.')

    }else if(fim.value < inicio.value){
        alert('O campo "Fim" não pode ser menor que o campo "Inicio".')

    }else{
        res.innerHTML = ''
        for (let i = inicio.value; i <= fim.value ; i=Number(i)+Number(passo.value)) {
            res.innerHTML += `${i}`
            if (i < fim.value++ ) {
                res.innerHTML += String.fromCodePoint(128073);
            }
        }
        res.innerHTML += String.fromCodePoint(127937);
    }
}
