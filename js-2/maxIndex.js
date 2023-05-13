function maxIndex(numero){
    let maxIn = 0;
    let numeroMax = 0;
    if (numero.length !==0){
        for (let i=0; i < numero.length; i++){
            if (numeroMax < numero [i]){
                numeroMax = numero [i];
                maxIn = i;
            }
        }
        return maxIn;
    }else {
        return -1
    }
  }
    
    console.log(maxIndex([1, 3, 2])); // => index 1
    console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // => index 0
    console.log(maxIndex([])); // => -1