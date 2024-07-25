// how do you turn an Object into an Array []?

let a = { id: "1", name: "user22", age: "26", work: "programmer" };

//Method 1: Convert the keys to Array
console.log('Converting keys to arrays :',Object.keys(a))

//Method 2: Convert the values to Array
console.log("Converting values to arrays :",Object.values(a))

//Method 3: Convert both keys and values to Array
console.log("Converting both keys and values into arrays :",Object.entries(a))
