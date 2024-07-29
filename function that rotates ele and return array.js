// Implement a function that returns an updated array with r right rotations on an array of integers a

function rotateRight(arr, rotations){
    if (rotations == 0) return arr;
    for (let i = 0; i < rotations; i++){
        let ele = arr.pop();
        arr.unshift(ele);
    }
    return arr;
}
arr = [4,5,7,6,2,3]
rotations = 3
console.log(rotateRight(arr, rotations));