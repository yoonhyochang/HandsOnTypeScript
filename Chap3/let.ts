namespace lets {
    let val1 = 1; // val1 초기화
    val1 = 2; // val1 값을 변경

    if(true) {
        let val2 = 3; // val2 초기화, 이 블록 내에서만 사용 가능
        val2 = 3; // val2 값을 변경
    }

    console.log(val1); // val1 출력, 결과는 2
    // console.log(val2); // 에러! val2는 if 블록 내에서만 접근 가능
}
