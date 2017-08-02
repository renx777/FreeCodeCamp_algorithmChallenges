/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

/*
PseudoCode:
1.split the string into array of words
2.loop through the array and record the length of each word
3.return the length of longest word
*/

function findLongestWord(str){

  var str_copy=str.split(' ');
console.log(str_copy);

  var length=0;

  for(var i=0;i<str_copy.length;i++){
    
        if(str_copy[i].length > length){
            length=str_copy[i].length;
        }

    }

console.log(length);

}


findLongestWord("The quick brown fox jumped over the lazy dog");