/*
Necessitamos uma função produto que receba um array de números e retorne o produto: 
o resultado de multiplicar todos os elementos entre si.

Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.
*/

function produto(arr) {
    let contador = 1
    for(let i = 0; i < arr.length; i++) {
        contador *= arr[i]
    }
    return contador
}

console.log(produto([1, 4, 7]))