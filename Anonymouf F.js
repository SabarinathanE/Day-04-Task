//1. Print odd numbers in an array?
var arr = [0,1,2,3,4,5,6,7,8,9]
let res = [];
var odd = function(){
    for (var i=0; i < arr.length; i++){
    if (arr[i]%2 != 0){
    res.push(arr[i]);
    
    }
}
};
odd(arr);
console.log(res)

// 2. Convert all the strings to title caps in a string array?

var arr1 = ["apple", "banana", "cherry", "date"];

var convertToTitleCaps = function() {
  for (var i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
  }
};

convertToTitleCaps(arr1);
console.log(arr1);

// 3. Sum of all numbers in an array?

var arr2 = [0,1,2,3,4,5,6,7,8,9,10];
let total = arr2[0];
var sum = function (){
  for (let i=1; i < arr2.length; i++){
   total  = total + arr2[i]
  }
};
sum(arr2);
console.log(total)

// 4. Return all the prime numbers in an array?

var numbersArray = [2, 3, 5, 6, 7, 11, 13, 17, 19, 23];

var primeNumbers = function(arr3) {
  return arr3.filter(function(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
};
console.log(primeNumbers(numbersArray));

// 5. Return all the palindromes in an array?

var inputArray = ["level", "hello", "civic", "world", "deed"];
var isPalindrome = function(str) {
  return str === str.split('').reverse().join('');
};

var findPalindromesAnonymous = function(arr4) {
  return arr4.filter(function(element) {
    return isPalindrome(element);
  });
};
console.log(findPalindromesAnonymous(inputArray));

// 6. Return median of two sorted arrays of the same size?

var findMedian = function(arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  var sortedArray = mergedArray.sort(function(a, b) {
    return a - b;
  });

  var length = sortedArray.length;
  var mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
  } else {
    return sortedArray[mid];
  }
};
console.log(findMedian([1, 2, 3], [4, 5, 6])); 

// 7. Remove duplicates from an array?

var removeDuplicates = function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
};

var originalArray = [1, 2, 3, 4, 2, 5, 6, 1, 7];
var newArray = removeDuplicates(originalArray);

console.log(newArray);

// 8. Rotate an array by k times?
  
var rotateArrayByK = function(arr, k) {
  k = k % arr.length; 
  for (var i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
};
var myArray = [1, 2, 3, 4, 5];
rotateArrayByK(myArray, 2);
console.log(myArray);









