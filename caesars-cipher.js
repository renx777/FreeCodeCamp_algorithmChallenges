/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
https://www.freecodecamp.com/challenges/caesars-cipher
*/

/*
PsuedoCode:
1.split the string argument into array of charcters
2.for each character find the character code using .charCodeAt() method
3.decode the character using String.fromCharCode() only if it is alphabetical character
4.push decoded character into decipher array
5.join and return the array of charcters 

*/

function rot13(str){

var string=str.split('');
var decipher=[];

for(var i=0;i<string.length;i++){

    var decode=string[i].charCodeAt();
    //A=65,Z=90
    if( (decode>=65 && decode <=90)){

    if(decode-13<65){
    decode=decode+26;
    }
    decipher.push(String.fromCharCode(decode-13));

    }else{
    decipher.push(String.fromCharCode(decode));

    }
}

var decoded=decipher.join('');


return decoded;

}

rot13("SERR PBQR PNZC"); // output: "FREE CODE CAMP"