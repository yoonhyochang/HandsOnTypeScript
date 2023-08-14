if (true) {
    var val1 = 1; // 전역 범위에서 변수 val1을 1로 초기화
}

function go() {
    var val2 = 2; // 함수 범위에서 변수 val2를 2로 초기화
}

console.log(val1); // val1은 전역 범위이므로 출력 가능
// console.log(val2); // 에러! val2는 go 함수 내부에서만 접근 가능
