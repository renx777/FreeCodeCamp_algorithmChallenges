/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/


/*

1.split the string into array of words
2.turn all words into lowercase
3.turn first letter of word into uppercase
4.join the array to reform the sentence
5.return the altered string

*/

function titleCase(str){

  var titlecased=str.split(" ");
   
  for(var i=0;i<titlecased.length;i++){
       
      titlecased[i]=titlecased[i].toLowerCase().replace(titlecased[i][0].toLowerCase(),titlecased[i][0].toUpperCase());
     
    }

  titlecased=titlecased.join(' ');

  return titlecased;
}

titleCase("i'm A little tea pot");