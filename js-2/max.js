function max(numero){
    let numeroMax = 0;
    if (numero.length !==0){
        for (let i=0; i < numero.length; i++){
            if (numeroMax < numero [i]){
                numeroMax = numero [i];
            }
        }
        return numeroMax;
    }else {
        return undefined
    }
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined