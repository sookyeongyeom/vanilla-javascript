fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
        // 전송할 데이터
        title: "My Home",
        author: "Soo",
    }),
    headers: {
        // 헤더 값 정의
        "content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
