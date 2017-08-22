/*
Return the remaining elements of an array after chopping off n elements from the head.
*/

/*
pseudocode:
1.use splice method to extract elements equal to second argument
2.return the arr 
*/


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0,howMany);
  
  console.log(arr);

  return arr;
}

slasher([1, 2, 3], 2);
