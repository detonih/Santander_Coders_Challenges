/*
Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três 
números:

na primeira posição, a fração de números que são positivos
na segunda posição, a fração de números que são zero
na última posição, a fração de números que são negativos
Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25], devido a que há 50% 
de positivos, 25% de zeros, e 25% de negativos.
*/

function maisMenos(arr) {
    var nPositivos = 0
    var nZeros = 0
    var nNegativos = 0
    var fracao = arr.length

    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            nPositivos++
        } else if (arr[i] < 0) {
            nNegativos++
        } else {
            nZeros++
        }
    }
    
    nPositivos /= fracao
    nZeros /= fracao
    nNegativos /= fracao
    

    var outroArray = [nPositivos, nZeros, nNegativos]

    return outroArray
    
}

console.log(maisMenos([1, 2, 0, -1]))

//descobrir quais sao negativos, positivos e eros
//para cada descoberta de um negativo, positivo ou zero adiciona +1 no contador
//