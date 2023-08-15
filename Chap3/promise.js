// Promise 객체 생성, 500ms 후 실패 처리
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("I completed successfully");
        reject("I failed");
    }, 500);
});

// 성공시 실행될 코드
myPromise
.then(done => {
    console.log(done);
})
// 실패시 실행될 코드
.catch(err => {
    console.log(err); // "I failed" 출력
});