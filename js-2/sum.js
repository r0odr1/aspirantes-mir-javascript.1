function sum(numero){
    let total = 0
    for (let i = 0; i < numero.length; i++ ){
        total = total + numero[i]
    }return total
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0