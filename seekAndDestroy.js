
function destroyer(arr) {
    
     var args=Array.from(arguments);
     console.log(args);
     var seekArr=args[0];
     console.log(seekArr);
     
     return seekArr.filter(function(num){
       
       var val;
       for(var i=1;i<args.length;i++){
         
          console.log(args[i]);       
         if(num==args[i]){
           
            val=1;
           
         }else{

            if(val==1){
                
            }else{
                val==0;
            }
          
         
         }
         
        

        }
        
       
    if(val==1){
           return false;
         }else{
           return true;
         }
       
     });
     
     
     
   }
   
   destroyer([1, 2, 3, 1, 2, 3], 2, 3);
   