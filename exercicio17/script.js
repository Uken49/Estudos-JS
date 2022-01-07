document.querySelector('input#btn1').addEventListener('click', tabuada)

function tabuada() {
    let num = document.querySelector('input#txNumero')
    let tab = document.querySelector('select#seltab')

    if (num.value == '') {
        alert('Preencha o campo com um número.')
    } else {
        // let res
        // document.querySelector('div#res').innerHTML = ''
        // for (let i = 1; i <= 10; i++) {
        //     res = Number(num.value)*i
        //     document.querySelector('div#res').innerHTML += `${num.value}x${i} = ${res}<br>` 
        // }
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num.value}x${i} = ${num.value*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}