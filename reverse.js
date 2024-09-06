const numbers = [11,22,33,44,55,66,77,88,99];
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
const rev_numbers = [];
// for(let i = 0; i < numbers.length; i++){
//     rev_numbers.unshift(i)

// }
// console.log(rev_numbers);
for(let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    rev_numbers.push(num)
}
console.log(rev_numbers);