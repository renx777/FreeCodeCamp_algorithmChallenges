/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

https://www.freecodecamp.org/challenges/search-and-replace
*/

/*
PsuedoCode:
1.to preserve case,check if before has any
2.if before has case,then change the case of after string accordingly
3.use .replace method to replace before word with after
*/


function myReplace(str, before, after) {
  
    bfr=before.split('');
    aftr=after.split('');
    if(bfr[0]==bfr[0].toUpperCase()){
        aftr[0]=aftr[0].toUpperCase();
    }
   
    aftr=aftr.join('');
    bfr=bfr.join('');
  
    return str.replace(bfr,aftr);

}



  myReplace("Let us get back to more Coding", "Coding", "algorithms");