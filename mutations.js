/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
https://www.freecodecamp.com/challenges/mutations
*/

/*
pseudocode:
1.convert first element to lower case and store in variable str1
2.split the second into array of characters using .split()
3.for each element of second element array check if it exists in str1 using indexOf() method
4.return true if all element exists of str2 exists in str1 otherwise return false
*/

function mutation(arr) {
  var str1=arr[0].toLowerCase();
  var str2=arr[1].split('');
  
  var val=1;
  
  for(var i=0;i<str2.length;i++ ){
    
        if(str1.indexOf(str2[i].toLowerCase()) != -1 ){
        
        val*=1;
        }else{
        val*=0;
        }
    
    }
 
    if(val ==1){
        return true;
    }else{
        return false;
    }
  
}

mutation(["hello", "hey"]); // Outputs:true