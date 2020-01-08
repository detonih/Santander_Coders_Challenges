/*
Ela representa a entrada dos estudantes como um array de tempos de chegada tarde, em minutos. Por exemplo, 
se um estudante chegou 10 minutos atrasado, outro 5 minutos antes da hora, outro com 3 minutos de atraso, e
 outro pontual, poderá representar assim:
 var alunosDaSegunda = [10, -5, 3, 0];
 //Ou seja, numeros positivos no array representa os atrasados
 //numeros negativos representa os adiantados
 //zeros representam os pontuais
 */
 //o parametro entrada será passado na chamada da funcao como alunosDaSegunda, alunosDaTerça... esses arrays 
 //ja devem ter sido criados pelo mumuki
 //para a aula acontecer uma quantiade minima ou maior de estudantes devem ter chegado na hora ou mais cedo
 //essa quantidade minima é passada como parametro

 /*
 2. aberturas, que utiliza um array com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima 
 de estudantes, e diga quais os dias em que as aulas aconteceram e quais não. Por exemplo:
 aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
[true, false, false]

 */
 var alunosDaSegunda = [10, -5, 3, 0]
 var alunosDaTerça = [10, 15, 20, 0]
 var alunosDaQuarta = [3, -5, 10, 5]
 
 

 function acontece(entrada, quantidade) {
    var contagemAlunos = 0
    for(var i = 0; i < entrada.length; i++) {
        if(entrada[i] <= 0) {
            contagemAlunos++
        }
    }
    
    return contagemAlunos >= quantidade
    
    

 }

 function aberturas(diaAula, quantidade) {
    var contagemAulas = []
    for(var j = 0; j < diaAula.length; j++) {
        acontece(diaAula[j], quantidade) ? contagemAulas.push(true) : contagemAulas.push(false)
    }   

    return contagemAulas
    
 }
 
 //console.log([alunosDaSegunda, alunosDaTerça, alunosDaQuarta].length)
 //console.log(acontece(alunosDaSegunda, 2))
 console.log(aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2))

 /*
 for(var j = 0; j < diaAula.length; j++) {
       // acontece(diaAula[j]) ? contagemAulas.push(true) : contagemAulas.push(false)
        if(acontece(diaAula[j], quantidade)) {
            contagemAulas.push(true)
        } else {
            contagemAulas.push(false)
        }
    }
    */