// Array
let num = [5,3,5]
num[2] = 4 //Adiciona o elemento na posição expecifica
num.push('Um') //Adiciona o elemento na última posição
num.sort() //Organiza o vetor em ordem númerica/alfabética

console.log(num) //Exibe o array sem formatação
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num.length}`)

let pos = num.indexOf(5) //Procura a posição onde está o valor
console.log(`O valor 5 está na posição ${pos}`)