const arr = [-2, 5, 3, -8, 10, -4]
// const arr = [];

function sumOfPositives(numsArray){
    let sum = 0;

    for(let i = 0; i < numsArray.length; i++){
        if(numsArray[i] > 0){
            sum += numsArray[i]
        }
    }

    return sum;
}

if(arr.length == 0){
    console.log("Array is empty")
}else{
    const result01 = sumOfPositives(arr);
    console.log(result01);
}



// need some channges