const num = 124323;
const reverse = (num) => parseInt(String(num)
    .split("")
    .reverse()
    .join(""), 10);
console.log(reverse(num));

// Reverse = function(num) {
//     var reversed_number = 0;
//     while (num != 0) {
//     reversed_number *= 10;
//     reversed_number += number % 10;
//     num -= num % 10;
//     num /= 10;
//     }
//     return reversed_number;
//     }