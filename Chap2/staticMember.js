// class ClassA {
//     static typeName: string; // 정적 멤버 변수 선언
//     constructor() {
//         // 생성자 함수
//     }
//     static getFullName() {
//         return "ClassA " + ClassA.typeName; // 정적 메서드, typeName 변수를 사용
//     }
// }
// const a = new ClassA(); // ClassA 인스턴스 생성
// console.log(ClassA.typeName); // 정적 멤버 변수 typeName 출력, undefined 반환
// // console.log(a.typeName); // 정적 멤버 변수 typeName 출력, 오류 발생
// //정적 멤버는 클래스 레벨에서 정의되므로 인스턴스 레벨에서는 접근할 수 없습니다
class Runner {
    constructor(typeName) {
        this.typeName = typeName;
    } // 생성자로 typeName 멤버 변수 초기화
    run() {
        Runner.lastRunTypeName = this.typeName; // run 메서드 호출 시, 정적 변수에 현재 인스턴스의 typeName 값 할당
    }
}
const b = new Runner("b"); // typeName을 "b"로 가진 Runner 인스턴스 생성
const a = new Runner("a"); // typeName을 "a"로 가진 Runner 인스턴스 생성
b.run(); // b의 run 메서드 호출, lastRunTypeName은 "b"가 됨
a.run(); // a의 run 메서드 호출, lastRunTypeName은 "a"가 됨
console.log(Runner.lastRunTypeName); // "a" 출력, 마지막으로 실행된 인스턴스의 typeName
