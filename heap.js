// Heap Sorting
const unsorted = document.getElementById("unsorted");
const sorted = document.getElementById("sorted");

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function maxHeapify(array, index, length) {
    let left = 2 * index;
    let right = 2 * index + 1;
    let maximum;

    if (right < length) { //left child exists?
        if (array[left] >= array[right]) {
            maximum = left;
        } else {
            maximum = right;
        }
    } else if (left < length) {
        maximum = left;
    } else {
        return; //no-children
    }

    if (array[index] < array[maximum]) {
        swap(array, index, maximum);
        maxHeapify(array, maximum, length);
    }
}

function heapSort(array) {
    let length = array.length;

    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        maxHeapify(array, i, length);
    }
    for (let i = length - 1; i >= 0; i--) {
        swap(array, 0, i); //delete root element
        maxHeapify(array, 0, i); //build max heap again

    }
    return array;
}
// let test = [4,2,3,-1,12,32,24];
let test = new Array();
let size = prompt("eleman sayısı: ");

while (size > 0) {

    num = prompt("sayı: ");
    test.push(Number(num));
    size--;

}

unsorted.innerHTML = `${test}`;
sorted.innerHTML = `${heapSort(test)}`;

// https://dev.to/devlazar/sorting-algorithms-javascript-heap-sort-5e5b#intro