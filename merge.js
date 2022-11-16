//merge Sort
const unsorted = document.getElementById("unsorted");
const sorted = document.getElementById("sorted");

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }

    const mid = Math.floor(arr.length /2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    return mergeSortArray(mergeSort(left), mergeSort(right));
    
}

function mergeSortArray(left, right){

    const arr = [];
    while(left.length && right.length){

        if(left[0]< right[0]){
            arr.push(left.shift());
        }
        else{
            arr.push(right.shift());
        }
    }
    return arr.concat(left.slice()).concat(right.slice());
}

//testing
// const test = [1,3,4,5,2,11,8,-2,9,12];

let test = new Array();
let size = prompt("eleman sayısı: ");

while (size > 0) {

    num = prompt("sayı: ");
    test.push(Number(num));
    size--;

}

unsorted.innerHTML = `${test}`;
sorted.innerHTML = `${mergeSort(test)}`;