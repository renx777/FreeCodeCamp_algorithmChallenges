// Reverse the provided string.



// Your result must be a string.


/*
Pseudocode:
1. separate the string with string.split() method
2. reverse the returned array by split method using array.reverse() method
3. combine the array elements to form reversed string using array.join() method
*/


function reverseString(str){

    var reverseString= str.split('').reverse().join('');

    console.log(reverseString);

    return reverseString;

   
}

reverseString('redemption')