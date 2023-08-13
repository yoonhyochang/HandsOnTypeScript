// 'Points' 타입은 20, 30, 40, 50 중 하나의 값을 가져야 함
type Points = 20 | 30 | 40 | 50;
let score: Points = 20; // 'score' 변수는 'Points' 타입이므로 위의 값 중 하나만 할당 가능
console.log(score); // 20 출력

// 'ComplexPerson' 타입은 여러 속성을 가진 객체를 정의
type ComplexPerson = {
    name: string,      // 문자열 타입의 이름
    age: number,       // 숫자 타입의 나이
    birthday: Date,    // 날짜 타입의 생일
    married: boolean,  // 부울 타입의 결혼 여부
    address: string    // 문자열 타입의 주소
}
