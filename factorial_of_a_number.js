/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

/*
Pseudocode: solving using while! loop
1.take the num n and decrement the number dNum=(n-1)
2.multiply the decremented number with original num n*dNum
3.while dNum is greater than 0,keep decrementing and multiplyin dNum to n
4.log and return n
*/


function factorialize(num){

if(num==0){
    return 1;     //as factorial of 0 is 1
}

var n=num;
var dNum=n-1;
while(dNum>=1){

    n*=dNum;
    dNum--;
}
console.log(n);
return n;
}

factorialize(9);