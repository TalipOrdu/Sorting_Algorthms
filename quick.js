
// Quick Sort
const sorted = document.getElementById("sorted");

function swap(arr, i, j){
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j]= temp;
}
function partition(arr, low, high){
    let pivot = arr[high];
    let i = (low -1);

    for(let j=low; j<=high-1; j++){

        if(arr[j]<pivot){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,high);
    return (i+1);
}
function quickSort(arr,low,high){
    
    if(low<high){
        
        let pi = partition(arr,low,high);

        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
    }
}

function printArray(arr) {
    arr.forEach(element => {
        sorted.innerHTML += element + "  ";
    });
}

const test = [12,3,2,1,4,8,6,9];
let n = test.length;

test.forEach((item)=>{
    unsorted.innerHTML += item + "  ";
});

quickSort(test,0,n-1);
printArray(test);
