// 금액과 포맷을 파라미터로 받고, 포맷이 적용된 문자열을 반환
function convertCurrencyFormat(amount, format) {
    let currencyUnit = ""; // 화폐 단위 표기
    if (format.substring(0, 1) != "#") {
        currencyUnit = format.substring(0, 1);
    }

    let groupingSeparator = ""; // 금액 3마리마다 구분자
    let maxFractionDigits = 0; // 소수점 이하 자릿수
    let decimalSeparator = ""; // 소수점 이하 구분자

    // 콤마의 인덱스 번호가 점 인덱스 번호보다 작으면 #,###.##과 같이 3자리마다 콤마 구분자를 사용함을 알 수 있음
    if (format.indexOf(".") == -1) {
        // 점이 없는 경우 소수점 이하는 없으며 3자리마다 콤마 구분자를 사용함
        groupingSeparator = ",";
    } else if (format.indexOf(",") == -1) {
        // 콤마가 없는 경우 소수점 이하는 없으며 3자리마다 점 구분자를 사용함
        groupingSeparator = ".";
    } else if (format.indexOf(",") < format.indexOf(".")) {
        // 소수점 이하 몇 번째 자리까지 표기해야하는지를 알기 위해 포맷의 전체 길이와 점 인덱스 번호를 이용
        groupingSeparator = ",";
        decimalSeparator = ".";
        maxFractionDigits = format.length - format.indexOf(".") - 1;
    } else {
        // 3자리마다 점 구분자를 사용하고 소수점 이하는 콤마 구분자를 사용함
        groupingSeparator = ".";
        decimalSeparator = ",";
        maxFractionDigits = format.length - format.indexOf(",") - 1;
    }

    // 음수인 경우 음수 부호를 분리하고, 소수 부분이 있는 경우 반올림을 적용
    let sign = ""; // 부호
    let dec = 1;
    // 소수점 1자리면 10, 소수점 2자리면 100, 소수점 3자리면 1000
    for (let i = 0; i < maxFractionDigits; i++) {
        dec *= 10;
    }

    // 포맷에서 지정한 소수점 자리를 기준으로 반올림 적용한 값을 구함
    let v = String(Math.round(parseFloat(amount) * dec) / dec);

    // amount값이 음수이면 음수 부호를 sign에 저장하고, 부호를 제외한 값을 v에 저장
    if (v.startsWith("-")) {
        sign = "-";
        v = v.substring(1);
    }

    // 정수 부분과 소수 부분을 분리
    // 포맷의 마지막 자리가 0이면, 소수점이 없는 금액 값도 해당 소수점 자릿수 만큼 보이도록 구현
    if (maxFractionDigits > 0 && format.substring(format.length - 1) == "0") {
        // 강제로 해당 소수점 자릿수까지 표기
        v = String(parseFloat(v).toFixed(maxFractionDigits));
    }

    // 파라미터로 전달된 금액이 소수점 이하 값을 포함하고 있는 경우
    let d = ""; // 소수점 이하 값

    if (maxFractionDigits > 0 && v.indexOf(".") > -1) {
        d = v.substring(v.indexOf("."));
        d = d.replace(".", decimalSeparator);
        v = v.substring(0, v.indexOf("."));
    }

    // 정수 부분을 3자리마다 포맷에서 지정한 구분자로 변경
    let r = /(\d+)(\d{3})/; // 숫자 1자리 이상, 숫자 3자리

    // 정규식을 통해 숫자 1자리 이상과 숫자 3자리 패턴이 발견되는 동안 반복문 수행
    while (r.test(v)) {
        // amount의 정수 값이 5421338이면
        // 첫 번째 루프: $1 = 5421, $2 = 338, v = 5421,338
        // 두 번째 루프: $1 = 5, $2 = 421, v = 5,421,338
        v = v.replace(r, "$1" + groupingSeparator + "$2");
    }

    return sign + currencyUnit + String(v) + String(d);
}

console.log(convertCurrencyFormat(5421338, "#,###")); // 5,421,338
console.log(convertCurrencyFormat(5421338, "₩#,###")); // ₩5,421,338
console.log(convertCurrencyFormat(5421338, "$#,###.##")); // $5,421,338
console.log(convertCurrencyFormat(5421338, "$#,###.#0")); // $5,421,338.00
console.log(convertCurrencyFormat(5421339.1, "$#,###.#0")); // $5,421,339.10
console.log(convertCurrencyFormat(5421339.12, "$#,###.#0")); // $5,421,339.12
