// BubbleSort
const unsorted = document.getElementById("unsorted");
const sorted = document.getElementById("sorted");


let arr = new Array();
let size = prompt("kaç eleman: ");

while (size > 0) {
    let sayi = prompt("sayi gir: ");
    arr.push(Number(sayi));
    size--;
}
arr.forEach((item) => {

    unsorted.innerHTML += item + "  ";
});
// console.log(arr);

function bubbleSort() {
    let i, j;
    for (i = 0; i < (arr.length - 1); i++) {

        for (j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {

                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; //swapping 
            }
        }
    }
}

bubbleSort();

arr.forEach((item) => {

    sorted.innerHTML += item + "  ";
});