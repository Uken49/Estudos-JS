// Objeto
let pessoa = {
    nome: 'José',
    sexo: 'M',
    cpf: '4002892203',
    idade: 32,
    envelhecer(i=0) {
        console.log('Feliz aniversário!!')
        this.idade += i
    }
}
pessoa.envelhecer(1)
console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`)
