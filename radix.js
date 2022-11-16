// radix sort

//1.Count digit
//2.Get digit
//3.Most digit

const countDigit = (num) => {

    if (num === 0) return 1;
    else{
        return Math.floor(Math.log10(num)) + 1;
    }
    
}
// console.log(countDigit(-1));

const getDigit = (num, i) => { //get value of current digit

    return Math.floor(num / Math.pow(10, i)) % 10;
}
// console.log(getDigit(-987, 2)); //return 7

const mostDigit = (arr) => { //max digit of array
    let max = -Infinity;

    for(let el of arr){
        max = Math.max(max,countDigit(el));
    }
    return max;
}
// console.log(mostDigit([1,22,333,-4444,-555555])); 

const radixSort = (nums)=>{
    
    let maxDigitCount = mostDigit(nums);

    for(let i=0; i<maxDigitCount; i++){

        let digitBucktes = Array.from({length: 10}, ()=> []);//created 10 empty array

        for(let j=0; j<nums.length; j++){
            let digit = getDigit(nums[j],i);

            digitBucktes[digit].push((nums[j]));
        }

        nums = [].concat(...digitBucktes);
    }
    return nums;
}

// console.log(radixSort([55555,22,1,333,4444,666666]));

let test = new Array();
let size = prompt("eleman sayısı: ");

while (size > 0) {

    num = prompt("sayı: ");
    test.push(Number(num));
    size--;

}

unsorted.innerHTML = `${test}`;
sorted.innerHTML = `${radixSort(test)}`;