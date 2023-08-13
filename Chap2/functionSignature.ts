// 'Run'이라는 타입은 숫자를 매개변수로 받고 불리언을 반환하는 함수의 타입을 정의한다.
type Run = (miles: number) => boolean;

// 'runner'는 'Run' 타입의 함수로, 인자로 받은 'miles'가 10보다 크면 true를, 아니면 false를 반환한다.
let runner: Run = function (miles: number): boolean {
    if (miles > 10) {
        return true;
    }
    return false;
}

// 'runner' 함수에 9를 인자로 넘겨주면, 10보다 작으므로 false를 반환한다.
console.log(runner(9)); // 출력 결과: false 
