// converting number to array
let numArray = []
let n = 8046957321;
let sum = 0;

while (n > 0) {
    let num = n % 10;
    sum = (sum * 10) + num;
    n = Math.floor(n / 10);
    
    numArray.push(num);
}

// function to sort array sorting an array

function sortArrayInAscending(array){
    let sortedArray = array[0]
    for(let i = 0; i < array.length; i++){
         for(let j = 0; j < array.length; j++){
            if(array[j] > array[j+1]){
                let temp = array[i];
                ar

            }
         }
    }
    
}

sortArrayInAscending(numArray);

