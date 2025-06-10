/*
Codewars Challenge: https://www.codewars.com/kata/542c0f198e077084c0000c2e
Difficulty: 7 kyu
Completion date: 05.2025
Description: Count the number of divisors of a positive integer n.
Random tests go up to n = 500000, but fixed tests go higher.
*/

function getDivisorsCnt(n){
    let arr = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            arr.push(i);
            if (i !== n / i) {
                arr.push(n / i);
            }
        }
    }
    return arr.length;
}