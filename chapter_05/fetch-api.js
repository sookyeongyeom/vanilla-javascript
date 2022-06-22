// XHR에 비해 코드가 훨씬 간결함
// GET은 따로 HTTP 요청 방법을 명시하지 않아도 됨

// GET
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
});

// FormData 파일 업로드
let formData = new FormData(); // 파일을 포함한 데이터를 전송할 수 있도록 해주는 객체
let fileField = document.querySelector('input[type="file"]'); // 사용자가 선택한 파일

formData.append("username", "abc123"); // 텍스트 데이터
formData.append("attachment", fileField.files[0]); // 파일

fetch("url", {
    method: "POST",
    body: formData,
})
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", JSON.stringify(response)));

// 2개 이상의 다중 파일
let formData2 = new FormData();
let photos = document.querySelector('input[type="file"][multiple]'); // 다중 파일 선택 HTML 요소

formData2.append("title", "My photos"); // 텍스트 데이터
for (let i = 0; i < photos.files.length; i++) {
    formData.append("photos", photos.files[i]); // 파일
}

fetch("url", {
    method: "POST",
    body: formData2,
})
    .then((response) => response.json())
    .then((response) => console.log("Success:", JSON.stringify(response)))
    .catch((error) => console.error("Error:", error));
