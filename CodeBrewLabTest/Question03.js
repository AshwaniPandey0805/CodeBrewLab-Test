// converting number to array
let numArray = []
let n = 8046957321;

let sum = 0;

while (n > 0) {
    let num = n % 10;
    n = Math.floor(n / 10);
    
    numArray.push(num);
}

// function to sort array sorting an array

function sortArrayInAscending(array){
    
    for(let i = 0; i < array.length; i++){
         for(let j = 0; j < array.length - i; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

            }
         }
    }

    return array;
    
}

const result04 =  sortArrayInAscending(numArray);

console.log("Sorted Array is: ",result04)

