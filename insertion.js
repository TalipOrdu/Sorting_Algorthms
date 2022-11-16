// Insertion Sort
const unsorted = document.getElementById("unsorted");
const sorted = document.getElementById("sorted");

let dizi = new Array();
let boyut = prompt("eleman sayısı: ");

while(boyut>0){
    
    sayi = prompt("sayı gir: ");
    dizi.push(Number(sayi));
    boyut--;

}
console.log(dizi);
// const liste = [2, 4, 5, 3, 7, 12, 1, 16, 14];
dizi.forEach((item) => {
    unsorted.innerHTML += item + "  ";
});

let i, j, ekle;

function insertion() {

    for (i = 1; i < dizi.length; i++) {
        ekle = dizi[i];
        for (j = i - 1; j >= 0 && ekle <= dizi[j]; j--) {
            dizi[j + 1] = dizi[j];
        }
        dizi[j + 1] = ekle;
        
    }
}

insertion();
console.log("sorted list: "+ dizi);
// const sorted = dizi.map( element => console.log(element));

dizi.forEach((item) => {
    sorted.innerHTML += item + "  ";
});
