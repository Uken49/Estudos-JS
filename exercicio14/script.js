function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txAno')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homem')
            } else if (idade < 21) {
                img.setAttribute('src', 'homem')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem')
            } else {
                img.setAttribute('src', 'homem')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}