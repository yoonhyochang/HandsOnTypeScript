// 'oldEnough' 함수는 나이를 매개변수로 받고, 특정 조건에 따라 에러를 발생시키거나 불리언 값을 반환한다.
function oldEnough(age) {
    if (age > 59) { // 나이가 59보다 크면 에러를 발생시킨다.
        throw Error("Too old!");
    }
    if (age <= 18) { // 나이가 18 이하면 false를 반환한다.
        return false;
    }
    return true; // 그 외의 경우 true를 반환한다.
}
console.log(oldEnough(26));
