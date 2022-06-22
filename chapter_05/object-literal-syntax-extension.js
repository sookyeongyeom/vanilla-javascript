let firstname = "John";
let lastname = "Doe";

let person = {
    firstname: "John",
    lastname: lastname,
};

console.log(person);

// Object Literal Syntax Extension 사용 시 Objectd의 키로 변수에 할당된 문자열 값 사용 가능
let type = "student";

let score = {
    [type]: "John", // student를 Object의 키로 사용
    score: 95,
};

console.log(score);
