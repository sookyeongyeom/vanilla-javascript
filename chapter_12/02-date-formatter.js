// 현재 날짜를 지정한 날짜 포맷으로 반환
function getCurrentDate(format) {
    let d = new Date();
    let year = d.getFullYear(); // 년도
    let month = d.getMonth() + 1; // 월
    month = month.toString().padStart(2, 0);
    let day = d.getDate(); // 일

    format = format.replace("YYYY", year);
    format = format.replace("MM", month);
    format = format.replace("DD", day);

    return format;
}

console.log(getCurrentDate("YYYY-MM-DD")); // 2022-06-24
console.log(getCurrentDate("MM.DD.YYYY")); // 06.24.2022

// 파라미터로 날짜(문자열 8자리)와 포맷을 받고, 해당 포맷이 적용된 날짜를 반환
function convertDateFormat(yyyymmdd, format) {
    let year = yyyymmdd.substr(0, 4);
    let month = yyyymmdd.substr(4, 2);
    let day = yyyymmdd.substr(6, 2);

    format = format.replace("YYYY", year);
    format = format.replace("MM", month);
    format = format.replace("DD", day);

    return format;
}

console.log(convertDateFormat("19980220", "YYYY년 MM월 DD일")); //1998년 02월 20일

// 현재 날짜를 기준으로 특정 일수만큼 며칠 전, 혹은 며칠 후를 반환
function getIntervalDate(intervalDay, format) {
    let now = new Date();
    let msOneDay = 60 * 60 * 24 * 1000;
    let d = new Date(now.getTime() + msOneDay * intervalDay);

    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    month = month.toString().padStart(2, 0);
    let day = d.getDate();

    format = format.replace("YYYY", year);
    format = format.replace("MM", month);
    format = format.replace("DD", day);

    return format;
}

console.log(getIntervalDate(5, "YYYY-MM-DD")); // 2022-06-29
console.log(getIntervalDate(-5, "YYYY-MM-DD")); // 2022-06-19
