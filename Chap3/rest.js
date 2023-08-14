function doSomething(a, ...others) {
    // 첫 번째 인수는 'a'에, 나머지 인수들은 'others' 배열에 저장
    console.log(a, others, others[others.length - 1]); // 'a', 'others' 배열, 'others' 배열의 마지막 요소 출력
}

doSomething(1,2,3,4,5,6,7); // 1은 'a'로, 나머지 숫자들은 'others' 배열로 전달
