namespace SpreadArray {
    const a = [1,2,3]; // 배열 a 선언
    const b = [4,5,6]; // 배열 b 선언

    const c = [...a, ...b]; // 배열 a와 b를 합친 새 배열 c
    const d = a.concat(b); // 배열 a와 b를 합친 새 배열 d (concat 메서드 사용)
    console.log('c before', c); // c의 초기값 출력
    console.log('d before', d); // d의 초기값 출력

    a.push(10); // a에 10을 추가
    console.log('a', a); // 변경된 a 출력
    console.log('c after', c); // a의 변경이 c에 영향을 주지 않으므로 c는 변하지 않음
    console.log('d after', d); // a의 변경이 d에 영향을 주지 않으므로 d는 변하지 않음
}
