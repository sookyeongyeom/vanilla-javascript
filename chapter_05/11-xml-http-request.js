// 이름 때문에 XML 데이터 통신으로 오해할 수 있지만, 모든 종류의 데이터를 받아올 수 있음
// WebAPI이므로 브라우저에서만 정상적으로 동작함 (node.js 환경에서는 정상적으로 실행되지 않음)
// 주로 쓰이는 content-type: application/json, text/plain, multipart/form-data

// GET JSON 데이터
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("content-type", "application/json");

// POST 데이터
const xhr2 = new XMLHttpRequest();
xhr2.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr2.setRequestHeader("content-type", "application/json");

const data = {
    id: 1,
    title: "XMLHttpRequest",
    author: "Soo",
};

xhr2.send(JSON.stringify(data)); // 오브젝트 데이터를 문자열 형태로 변경하여 전송해야함 (request의 body에 담겨 전송됨)

// Response 처리
const xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr3.setRequestHeader("content-type", "application/json");
xhr3.send();

xhr3.onload = () => {
    if (xhr3.status === 200) {
        const res = JSON.parse(xhr3.response); // 응답 데이터를 JSON 객체로 변경
        console.log(res);
    } else {
        // 에러 발생
        console.error(xhr3.status, xhr3.statusText); // 응답 상태와 응답 메시지를 출력
    }
};

// 데이터 생성
const xhr4 = new XMLHttpRequest();
xhr4.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr4.setRequestHeader("content-type", "application/json;charset=UTF-8");
xhr4.send(JSON.stringify({ title: "foo", body: "bar", userId: 1 }));

xhr4.onload = () => {
    if (xhr4.status === 201) {
        // IsCreated
        const res = JSON.parse(xhr4.response); // 응답 데이터를 JSON 객체로 변경
        console.log(res);
    } else {
        // 에러 발생
        console.error(xhr4.status, xhr4.statusText); // 응답 상태와 응답 메시지를 출력
    }
};

// 데이터 수정
const xhr5 = new XMLHttpRequest();
xhr5.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
xhr5.setRequestHeader("content-type", "application/json;charset=UTF-8");
xhr5.send(JSON.stringify({ title: "foo", body: "bar", userId: 1 }));

xhr5.onload = () => {
    if (xhr5.status === 200) {
        const res = JSON.parse(xhr5.response); // 응답 데이터를 JSON 객체로 변경
        console.log(res);
    } else {
        // 에러 발생
        console.error(xhr5.status, xhr5.statusText); // 응답 상태와 응답 메시지를 출력
    }
};

// 데이터 삭제
const xhr6 = new XMLHttpRequest();
xhr6.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
xhr6.setRequestHeader("content-type", "application/json;charset=UTF-8");
xhr6.send();

xhr6.onload = () => {
    if (xhr6.status === 200) {
        const res = JSON.parse(xhr6.response); // 응답 데이터를 JSON 객체로 변경
        console.log(res);
    } else {
        // 에러 발생
        console.error(xhr6.status, xhr6.statusText); // 응답 상태와 응답 메시지를 출력
    }
};
