// Selection Sort 
const unsorted = document.getElementById("unsorted");
const sorted = document.getElementById("sorted");

let array = new Array();
let size = prompt("eleman sayısı: ");

while (size > 0) {

    num = prompt("sayı: ");
    array.push(Number(num));
    size--;

}
array.forEach((item) => {
    unsorted.innerHTML += item + "  ";
})

function selectionSort(){

    let i, j;
    for(i=0; i<array.length; i++){

        let lowest=i;
        for(j=i+1; j<array.length; j++){
            if(array[j]<array[lowest]){
                lowest=j;
            }
        }

        if(lowest!==i){
            [array[i],array[lowest]] = [array[lowest],array[i]];
        }
    }
}

selectionSort();
console.log(array);

array.forEach((item) => {
    sorted.innerHTML += item + "  ";
})