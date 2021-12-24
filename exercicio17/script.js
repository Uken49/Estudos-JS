document.querySelector('input#btn1').addEventListener('click', tabuada)

function tabuada() {
    let num = document.querySelector('input#txNumero')

    if (num.value == '') {
        alert('Preencha o campo com um número.')
    } else {
        let res
        document.querySelector('div#res').innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            res = Number(num.value)*i
            document.querySelector('div#res').innerHTML += `${num.value}x${i} = ${res}<br>` 
        }
    }
}