/*
Queremos representar uma escada com altura variável, utilizando um array de strings.

Por exemplo, uma escada com altura 3, representaremos com o seguinte array:
var escada3 = ["  #", " ##", "###"]
var escada5 = ["    #", "   ##", "  ###", " ####", "#####"] 

espaços é a quantidade do length - 1, porém, vem decrementando. O primeiro elemento no array deve receber
a maior quantidade de espaços. Por ex. Um array de de 5 elementos, terá seu length - 1 = a 4 que será o n passado
como parametro, neste caso 5, portanto, devem haver 4 espaços no primeiro elemento seguido por uma quantidade de
# equivalente ao n (5) incrementando. No primeiro elemento entao seriam 4 espaços e 1 #['    #'], no segundo 3 espaços e
2 # ['   ##'] e assim por diante.

Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente 
a escada correspondente.

*/

function escada(n) {
    var array = []
        
    for(var i = 1; i <= n; i++) {
        var degrau = "#".repeat(i)
        
        for(var j = n; j > n-1; j--) {
         var espaco = " ".repeat(j-i)
                    
         array.push(espaco + degrau)
        }
    }
    
    console.log(array)
    return array
}

escada(5)
