var agora = new Date() //Valor 'agora' está recebendo o horário do sistema.
var hora = agora.getHours() //Estou pegando apenas a hora do valor 'agora'.

console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!!')
}else if (hora >17) {
    console.log('Boa noite!!')
}else{
    console.log('Boa tarde!!')
}