// 1: 콘솔에 메시지 출력을 시작한다고 알립니다.
console.log("Let's begin.");

// 2: 3초 후에 콘솔에 메시지를 출력합니다. 비동기 함수이므로 즉시 실행되지 않습니다.
setTimeout(() => {
    console.log("I waited and am done now.");
}, 3000);

// 3: 2번의 setTimeout이 완료되기를 기다리지 않고 즉시 콘솔에 메시지를 출력합니다.
console.log("Did I finish yet?");
