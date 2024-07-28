// Write the code given If two strings are anagrams of one another, then return true else false.

var str1 = "Guru";
var str2 = "Shiva";

console.log(isAnagram(str1,str2));

function isAnagram(one,two){
    var a = one.toLowerCase();
    var b = two.toLowerCase();

    if (a.length != b.length){
        return false;
    }
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
    return a === b;
}