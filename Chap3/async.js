// 500ms 후에 성공 메시지를 반환하는 Promise를 반환하는 비동기 함수
async function delayedResult() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I completed successfully"); // 500ms 후 성공
        }, 500);
    });
}

// 위에서 정의한 비동기 함수를 호출하고 결과를 출력하는 즉시 실행 함수
(async function execAsyncFunc() {
    const result = await delayedResult(); // 비동기 함수를 기다림
    console.log(result); // "I completed successfully" 출력
})();
