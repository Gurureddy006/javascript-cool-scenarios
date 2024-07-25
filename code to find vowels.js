// Write the code to find the vowels in a string

const findVowels = (str) => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()){
        if (vowels.includes(char)){
            count++
        }
    }
    return count
}
let str = "Guru SRInivAsula Reddy";
// let str = prompt("Enter a string :"); prompt function is not available in node js as it is a browser specific feature.
console.log(findVowels(str));