// Create a function that takes an array of numbers. Return the largest number in the array.
// Examples
  // [4, 5, 1, 3] ➞ 5
  // [300, 200, 600, 150] ➞ 600
  // [1000, 1001, 857, 1] ➞ 1001
  // Notes
  // Expect either a positive integer or zero. Don't worry about negative integers.


  function findLargestNum(arr) {
    // create empty array and set it to zero
      var largestNum = 0;
    // create for loop to loop through arr
      for (i =0; i < arr.length; i++){
    // create conditional to compare if arr at the i index is larger than largestNum
        if( arr[i] > largestNum){
    // if arr is greater than largestNum, set largestNum equal to arr at the i index
          largestNum = arr[i];
        }
      }
    //  return largestNum
      return largestNum;
    }
    
    
    console.log(findLargestNum([4, 5, 1, 3]));
    console.log(findLargestNum([300, 200, 600, 150]));
    console.log(findLargestNum([1000, 1001, 857, 1]));