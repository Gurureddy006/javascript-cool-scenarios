// Guessing the output and understanding it.

// This has an outer IIFE(immediately invoked funciton expression) which has another inner IIFE.

(function(a){
    return (function(){
      console.log(a); // a = 45
      a = 23;
      // console.log(a)  //a = 23
    })()
})(45);

// In the outer iife, function has parameter a that takes 45 as an argument.
// Inner iife has no parameters so the immediate console.log(a) stores 45 which inturn returns a = 45.
// After logging, the value of a will be assigned with 23. If we have another console.log after assigning with 23 then value of a will be 23.
