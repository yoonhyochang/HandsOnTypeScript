//fech 패카자 설치 npm i node-fetch

// 'node-fetch' 라이브러리를 가져옵니다.
const fetch = require('node-fetch');

// 즉시 실행 비동기 함수로, 특정 URL에서 데이터를 가져옵니다.
(async function getData() {
    // 주어진 URL에서 응답을 기다립니다.
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");

    // 응답이 성공적인 경우
    if(response.ok) {
        // 응답을 JSON 형식으로 변환하고 결과를 출력합니다.
        const result = await response.json();
        console.log(result);
    } else {
        // 실패한 경우 에러 메시지를 출력합니다.
        console.log("Failed to get anything");
    }
})();


// URL 또는 기타 예외 사항으로 인해 발생하는 오류는 
//HTTP 상태 코드로 캡처되지 않음

// catch (error) {
//     // 네트워크 오류 또는 기타 예외를 처리합니다.
//     console.log("An error occurred:", error);
// }