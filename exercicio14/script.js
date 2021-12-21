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
            if (idade < 18) {
                gênero = 'jovem'
                img.setAttribute('src', 'homemCrianca.png')
            } else if (idade < 50) {
                gênero = 'adulto'
                img.setAttribute('src', 'homemAdulto.png')
            } else {
                gênero = 'idoso'
                img.setAttribute('src', 'homemIdoso.png')
            }

        } else if (fsex[1].checked) {
            if (idade < 18) {
                gênero = 'jovem'
                img.setAttribute('src', 'mulherCrianca.png')
            } else if (idade < 50) {
                gênero = 'adulta'
                img.setAttribute('src', 'mulherAdulta.png')
            } else {
                gênero = 'idosa'
                img.setAttribute('src', 'mulherIdosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}