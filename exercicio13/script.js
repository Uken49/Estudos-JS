function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 18) {
        img.src = 'noite.png'
        document.body.style.background = '#5e476b'
    }else if (hora >=12) {
        img.src = 'tarde.png'
        document.body.style.background = '#fda803'
    }else{
        img.src = 'manha.png'
        document.body.style.background = '#edd5ba'
    }
}