(function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
})();

// In this output order will vary since we have kept setTimeout functions having different time delays
// First we get 2,4,3,1 this will be our order
// Function executes first and then setTimeout function will be executed which is why in output we have 2 first before 1.