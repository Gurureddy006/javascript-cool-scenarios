let a = 0;
let b = false;
console.log((a == b)); 
console.log((a === b));

// Here we are using two == once and then === signs.
// Two == means loose equality, here b = false will be converted by javascript to a number which is 0 then this returns true as 0 == 0.
// In general, we mostly consider true = 1 and false = 0 
// Three === means strict equality, since the types of a and b are different it will check 0 === false which is false because both are not same.
