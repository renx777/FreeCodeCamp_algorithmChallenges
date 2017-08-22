/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

https://www.freecodecamp.com/challenges/falsy-bouncer
*/


/*
psuedocode:
1.use .filter method to filter out only those values which evalutate to true in if condition
*/

function bouncer(arr) {
  
  return arr.filter(function(i){
    
    if(i){
      return true;
    }
    
  });
}

bouncer([7, "ate", "", false, 9]); // Outputs:[7,"ate,9"]
