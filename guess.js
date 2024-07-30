// setTimeout function inside a function

function func1(){
    setTimeout(()=>{
      console.log(x);
      console.log(y);
    },3000);
  
    var x = 2;
    let y = 12;
}
func1();

// At first sight everyone will think that console.log will return nan, I also thought the same at first
// But here the entire function runs before entering setTimeout function. So the function has access to x and y variables and their values.
// Now everyone can guess the output :) 
