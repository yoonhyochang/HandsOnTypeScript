// 클래스 A 정의
class A {
    name: string = "A"; // name 프로퍼티 설정
    go() {
        console.log(this.name); // name 프로퍼티 출력
    }
}

// 클래스 B 정의
class B {
    name: string = "B"; // name 프로퍼티 설정
    go() {
        console.log(this.name); // name 프로퍼티 출력
    }
}

// A 인스턴스 생성 후 go 메소드 호출 (출력: "A")
const a = new A();
a.go();

// B 인스턴스 생성
const b = new B();

b.go();

// b의 go 메소드를 a의 컨텍스트로 바인딩
b.go = b.go.bind(a);

// 바인딩 된 b의 go 메소드 호출 (출력: "A")
b.go();
