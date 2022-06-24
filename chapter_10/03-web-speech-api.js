// 음성 정보를 텍스트로 변환해주는 API

// API 지원 여부 체크
let recognition = null;

function checkCompatibility() {
    recognition = new SpeechRecognition();

    if (!recognition) {
        alert("You cannot use speech api.");
    }

    recognition.lang = "en";
    recognition.maxAlternatives = 3;
}

window.addEventListener("load", checkCompatibility);

// 음성 인식 시작
function startSpeechRecognition() {
    recognition.addEventListener("speechstart", () =>
        console.log("Speech Start")
    );

    recognition.addEventListener("speechend", () => {
        console.log("Speech End");
    });

    recognition.addEventListener("result", (event) => {
        console.log("Speech Result", event.results);
        const text = event.results[0][0].transcript;
        document.getElementById("speech_result").value = text;
    });

    recognition.start();
}

// 음성 인식 종료
function endSpeechRecognition() {
    recognition.stop();
}
