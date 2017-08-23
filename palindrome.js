/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

*/

/*
PseudoCode:
1.strip the test string of all alphanumeric characters using regular experssions
2.split the string to convert into array of characters
3.make a copy of array and reverse it
4.loop through both the arrays and check if individual elements are equal

*/

function palindrome(str) {

  var strs=str.toLowerCase().replace(/[^a-z0-9]+/g, " ").split('').filter(function(e) {
    return String(e).trim();
  }).join('');
 
var val=1;

var strReverse=strs.split('').reverse().join('');

console.log(strs);
console.log(strReverse);

  for(var i=0;i<strReverse.length;i++){
    if(strs[i]==strReverse[i]){
       val*=1;
    }else{
      val*=0;
    }
  }

if(val==1){
  return true;
}else{
  
  return false;
}
  



}


palindrome("1 eye 1"); //output:"true";