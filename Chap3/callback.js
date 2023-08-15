function letMeKnowWhenComplete(size, callback) {
    var reducer = 0;
    // 'size' 만큼 반복하며 복잡한 계산을 수행합니다.
    for (var i = 1; i < size; i++) {
        reducer = Math.sin(reducer * i);
    }
    callback(); // 계산이 완료되면 콜백 함수를 호출합니다.
}

// 100000000번의 반복 계산 후 "Great it completed."라고 출력합니다.
letMeKnowWhenComplete(100000000, function () { console.log("Great it completed."); });
