// 다국어를 적용할 문자열의 특정 부분을 데이터베이스에서 가져온 값으로 변경

const i18n = {
    en: {
        "My name is {fullName}. I am from {city}.":
            "My name is {fullName}. I am from {city}.",
    },
    ko: {
        "My name is {fullName}. I am from {city}.":
            "제 이름은 {fullName} 입니다. 저는 {city} 출신입니다.",
    },
};

// 중괄호 안의 key와 동일한 오브젝트 데이터의 key를 찾아서 치환
function t(form, params = {}) {
    // 정규식: 열린 중괄호 등장 후 닫는 중괄호를 제외한 문자열이 0회 이상 반복된 후 닫는 중괄호 등장
    return form.replace(/{[^}]*}/g, (match) => {
        return params[match.slice(1, -1)]; // 중괄호 잘라낸 후 param에서 검색하여 치환
    });
}

let data = {
    id: "1",
    fullName: "SooKyeong Yeom",
    city: "Seoul",
    company: "Yonsei",
};

const enText = t(i18n["en"]["My name is {fullName}. I am from {city}."], data);

const koText = t(i18n["ko"]["My name is {fullName}. I am from {city}."], data);

console.log(koText); // 제 이름은 SooKyeong Yeom 입니다. 저는 Seoul 출신입니다.
