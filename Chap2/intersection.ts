// obj는 name 프로퍼티 (문자열 타입)와 age 프로퍼티 (숫자 타입)를 모두 가져야 하는 객체
let obj: { name: string } & { age: number } = {
    name: 'tom', // 이름 설정
    age: 25      // 나이 설정
}
console.log(obj); // obj 출력
