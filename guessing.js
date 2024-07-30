function func1(){
  for(var i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),2000);
  }
}
func1();

// Here most of us wil be expecting 0 to 2, but we are not getting that output. why? Let me write it here...
// We know, var has function scope not block scope. Here SetTimeout function schedules a callback to run after every 2 sec for each iteration.
// By time these callbacks are executed the loop has already completed and now i = 3
// Since i was incremented in the loop and ended up being 3, all three callbacks logs 3 that is why we are getting 3 three times


// How to overcome this? 
// Just use 'let' instead of 'var'. why?
// Because let has block scope and function scope and not global scope whereas var does not have block scope instead it has function scope and global scope.

function func2(){
  for(let i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),2000);
  }
}
func2();