// Promise
function getDataPromise() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                const res = JSON.parse(xhr.response);
                resolve(res);
            } else {
                console.error(xhr.status, xhr.statusText);
                reject(new Error(xhr.status));
            }
        };
    });
}

getDataPromise() //
    .then((res) => {
        console.log(res);
        console.log("다음 코드를 실행합니다."); // 서버 응답이 완료된 후 코드가 실행됨
    });

// Async/Await
async function myFunction() {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const res1Json = await res1.json();
    console.log(res1Json);

    const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
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
    });
    const res2Json = await res2.json();
    console.log(res2Json);
}
