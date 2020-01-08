function fatorial(n) {
    var factorial = 1
    for(let i = n; i > 1;i--) {
      factorial = factorial * i
    }
    return factorial
}

console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))