fetch("http://localhost:3000/posts/2", {
    method: "PUT",
    body: JSON.stringify({
        // 전송할 데이터
        id: 2,
        title: "My Lovely Home",
        author: "Soo",
    }),
    headers: {
        // 헤더 값 정의
        "content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
