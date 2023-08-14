// val1은 undefined이므로 nullish 병합 연산자(??)가 val2의 값인 10을 반환합니다.
var val1 = undefined;
var val2 = 10;
var result = val1 !== null && val1 !== void 0 ? val1 : val2; // result의 값은 10입니다.
console.log(result); // 10을 출력합니다.
