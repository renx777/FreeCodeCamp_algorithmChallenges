/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
https://www.freecodecamp.com/challenges/where-do-i-belong
*/

/*
pseudocode:
1.copy the argument array "arr" into "arrray" variable
2.push the "num" to the array
3.sort the array using .sort method
4.find and return the indexOf of num in array
*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  var array=arr;
  array.push(num);
  
  array.sort(function(a,b){
    return a-b;
  });
 
  console.log(array);
  
  return array.indexOf(num);
}

getIndexToIns([2,20,10], 19); // outputs:2