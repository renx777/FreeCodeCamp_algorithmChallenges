/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
https://www.freecodecamp.com/challenges/chunky-monkey
*/

/*
pseudocode:
1.declare a empty array "chunkdArr"
2.determine how many times you need to slice the array by dividing (round up the value in case when extra elements are left)
3.loop as many as calculated,each time increase begin and end arguments of .slice method by factor size
4.if end exceeds arr.length,set end to arr.length
*/

function chunkArrayInGroups(arr, size) {
 
  var chunkdArr=[];
  
  var slicenum=Math.ceil(arr.length/size);
  var begin=0;
  var end=size;
  
  for(var i=1;i<=slicenum;i++){
    
    if(end>arr.length){
      end=arr.length;
    }
    
    chunkdArr.push(arr.slice(begin,end));
    begin+=size;
    end+=size;
    
  }
  
  
  return chunkdArr;
  
  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // outputs:[[a,b],[c,d]]
