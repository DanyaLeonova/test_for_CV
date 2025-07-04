/*
Codewars Challenge: https://www.codewars.com/kata/54dc6f5a224c26032800005c
Difficulty: 6 kyu
Completion date: 06.2025
Description: You will receive the bookseller's stocklist and a list of categories. 
Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. 
Note: the codes are in the same order in both lists.
Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).
If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).
*/

function stockList(books, categories) {
  if(books.length === 0 || categories.length === 0)
    {
      return ``
    }
  
  let count = {}
  
  categories.forEach(x => count[x] = 0)
  books.forEach(y => {
        const [code, quan] = y.split(' ');
        const category = code[0];
        const quantity = parseInt(quan);
        if (categories.includes(category)) {
            count[category] += quantity;
        }
    });
  let res = categories.map(x => {
        return `(${x} : ${count[x]})`;
    });
  return res.join(' - ');
}

console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],["A", "B", "C", "W"])) // must return (A : 20) - (B : 114) - (C : 50) - (W : 0)
console.log(stockList(["ABXART 201", "CDXQEF 59", "XKQWRK 25", "BTXSQZ 89", "QRTYM 60"],["A", "X", "C", "Q"])) // must return (A : 201) - (X : 25) - (C : 59) - (Q : 60)