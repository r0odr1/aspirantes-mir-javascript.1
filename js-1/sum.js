function suma(numero){
    let total = numero
    for(let i = 1; i < numero; i++){
        total = total + i
    }return total
}
console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120