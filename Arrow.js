//1. Print odd numbers in an array?

var arr = [0,1,2,3,4,5,6,7,8,9]
let res = [];
var odd = (arr) => {
    for (var i=0; i < arr.length; i++){
    if (arr[i]%2 != 0){
       //console.log(arr[i]);
    res.push(arr[i]);
    }
}
}
odd([0,1,2,3,4,5,6,7,8,9]);
console.log(res)


// 2. Convert all the strings to title caps in a string array?

var arr1 = ["apple", "banana", "cherry", "date"];

var convertToTitleCaps = () => {
  for (var i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
  }
};

convertToTitleCaps(arr1);
console.log(arr1);

// 3. Sum of all numbers in an array?

var arr2 = [0,1,2,3,4,5,6,7,8,9,10];
let total = arr2[0];
var sum =  () => {
  for (let i=1; i < arr2.length; i++){
   total  = total + arr2[i]
  }
};
sum(arr2);
console.log(total)

// 4. Return all the prime numbers in an array?

var numbersArray = [2, 3, 5, 6, 7, 11, 13, 17, 19, 23];

var primeNumbers = arr3 => arr3.filter(num => {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
  console.log(primeNumbers(numbersArray));

  // 5. Return all the palindromes in an array?

  var isPalindrome = (str) => str === str.split('').reverse().join('');

  var findPalindromesArrow = (arr4) => arr4.filter((element) => isPalindrome(element));
  
  // Example usage
  var inputArray = ["level", "hello", "civic", "world", "deed"];
  console.log(findPalindromesArrow(inputArray));
  
  
  

