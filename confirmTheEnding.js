/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

/*
1.extract the end of the string using .substring() or substr()
2.compare target and extracted string
3.return true if target and string extract are equal else return false
*/

function confirmEnding(str, target) {
 
 var end_char=str.substring(str.length-target.length);
  
  if(target===end_char){
    return true;
  }
  
  return false;
}

confirmEnding("Bastian", "n");  // output: true
