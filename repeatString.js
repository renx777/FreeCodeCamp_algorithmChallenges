/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

/*
Pseudocode:
1.declare empty sting called repeatStr
2.loop given number of times i.e second argument
3.concat the first argument with repeatStr for each loop
4.return repeatStr
*/

function repeatStringNumTimes(str, num) {
  
  var repeatStr='';
  
  for(var i=0;i<num;i++){
    repeatStr+=str;
  }
  
  console.log(repeatStr);
  return repeatStr;
}

repeatStringNumTimes("abc", 3); //output: abcabcabc