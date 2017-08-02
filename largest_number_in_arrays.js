/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/

/*
Pseudocode:
1.declare variable called larger_array;
2.loop through array 
3.while looping through sub arrays
    a.declare variable "largest_num" and set to first array element and loop forward
    b.if array element is greater than "largest_num" replace "largest_num" with 
    c.push largest_num to larger_array
4.return "larger_array"     
*/

function largestOfFour(arr){
 
    var larger_array=[];

    for(var i=0;i<arr.length;i++){
        var largest_num=0;
        for(var j=0;j<arr[i].length;j++){
           
            if(arr[i][j]>largest_num){
                largest_num=arr[i][j];
            }
        
        
        }
    larger_array.push(largest_num); 

    }

  return larger_array;

}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // output: [5,27,39,1001]


