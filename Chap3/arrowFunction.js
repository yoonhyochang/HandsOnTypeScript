// const myFunc = (message: string): void => {
//     console.log(message); // 전달된 문자열을 출력합니다.
// }
// myFunc("hello"); // "hello" 문자열을 myFunc 함수에 전달하고 호출합니다. 결과로 콘솔에 "hello"가 출력됩니다.


var func = function () { return console.log('func'); }; // 콘솔에 'func'을 출력하는 함수입니다.
console.log(func()); // 'func'을 출력하고 undefined를 반환합니다.
var func1 = function () { return ({ name: 'dave' }); }; // 객체 { name: 'dave' }를 반환하는 함수입니다.
console.log(func1()); // { name: 'dave' } 객체를 출력합니다.
var func2 = function () {
    var val = 20; // val 변수에 20을 할당합니다.
    return val; // val 값을 반환합니다.
};
console.log(func2()); // 20을 출력합니다.
