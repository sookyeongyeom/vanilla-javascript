let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];
let arr3 = [...arr2, ...arr1]; // 1, 2, 3, 4, 5, 6
console.log(arr3);

let cd = "CD";
let alpha = ["A", "B", ...cd]; // A, B, C, D
console.log(alpha);
