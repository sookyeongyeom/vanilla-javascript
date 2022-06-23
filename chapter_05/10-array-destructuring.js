// 배열의 데이터를 내가 지정한 변수명으로 바로 담을 수 있으므로 변수명을 통해 어떤 데이터인지 쉽게 확인이 가능함
function getScores() {
    return [70, 80, 90, 100];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

// 배열이 반환하는 데이터가 많다면 특정 요소는 바로 변수에 할당하고, 나머지 요소는 모두 배열에 할당하는 것도 가능함
let [a, b, ...args] = getScores();
console.log(a); // 70
console.log(b); // 80
console.log(args); // [90, 100]

// 배열 안에 배열이 있는 경우도 분해 가능함
function getColor() {
    return [
        "white",
        "black", //
        ["pink", "yellow", "blue"],
    ];
}

let [
    c1,
    c2, //
    [c3, c4, c5],
] = getColor();

console.log(c1, c2, c3, c4, c5); // white black pink yellow blue
