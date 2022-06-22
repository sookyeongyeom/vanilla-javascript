// 정의되지않은 함수의 호출
try {
    nonExFunc();
} catch (error) {
    console.error(error); // Reference Error
} finally {
    console.log("결과와 무관하게 무조건 실행됨");
}

// 오류 정보
Error.prototype.message;
Error.prototype.name;

// throw 의도적으로 예외 발생시킴
try {
    throw "myException";
} catch (e) {
    console.log(e); // myException
}
