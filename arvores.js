/*
As árvores utópicas  crescem de uma forma particular, em dois ciclos:

cada primavera dobram seu tamanho
cada verão crescem um metro
Se Laura planta uma árvore utópica com um metro, no final do outono, qual seria sua altura depois 
de N ciclos?
Alguns exemplos:

si N = 0, sua altura será 1 metro (não cresceu nada)
si N = 1, sua altura será de 2 metros (dobrou a altura na primavera)
si N = 2, sua altura será de 3 metros (cresceu um metro mais no verão)
si N = 3, sua altura será de 6 metros (dobrou a altura na primavera seguinte)
E assim ...
Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento, e 
retorne a altura resultante da árvore de Laura.
*/
//outono, privamera, verão, inverno - ao passar por primavera dobra e tamanho e ao passar por verão
//acrescenta um metro.
//sabendo que foi plantada no outono já com um metro, ao passar pela primavera dobra de tamanho
//ao passar pelo verao acrescenta um metro
//primeiro ciclo dobra de tamanho, segundo ciclo cresce um metro...
//um ciclo seria verão+outono e inverno+primavera *** pode ser

function alturaArvoreUtopica(n) {
    var crescimento = 1
    
    for(var i = 0; i < n; i++) {
        if(i % 2) {
            crescimento++
        } else {
            crescimento *= 2
        }
    }

    return crescimento
}

console.log(alturaArvoreUtopica(0))
console.log(alturaArvoreUtopica(1))
console.log(alturaArvoreUtopica(2))
console.log(alturaArvoreUtopica(3))
console.log(alturaArvoreUtopica(4))
console.log(alturaArvoreUtopica(5))