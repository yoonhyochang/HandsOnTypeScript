const callerObj = {
    name: "jon" // 객체에 이름 속성 설정
}

function checkMyThis(age) {    
    console.log(`What is this ${this}`); // 현재 this의 값 출력
    console.log(`Do I have a name? ${this.name}`); // this.name 값 출력
    this.age = age; // this에 age 속성 추가
    console.log(`What is my age ${this.age}`); // this.age 값 출력
}

checkMyThis(); // 일반 함수 호출, this는 전역 객체 (브라우저에서는 window)

checkMyThis.call(callerObj, 25); // callerObj를 this로 하고 함수 호출, age는 25로 전달
