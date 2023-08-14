var NamespaceA;
(function (NamespaceA) {
    class A {
        constructor() {
            this.aname = "A";
        }
    }
    class B {
        constructor() {
            this.bname = "B";
        }
    }
    const a = new A();
    const b = new B();
    const c = Object.assign(Object.assign({}, a), b); // a와 b를 결합한 새 객체
    const d = Object.assign(a, b); // a에 b의 속성을 병합
    console.log(c); // 초기 c 출력
    console.log(d); // 초기 d 출력
    a.aname = "a1"; // a 수정
    console.log(c); // 수정 전 c 출력
    console.log(d); // 수정된 a가 반영된 d 출력
})(NamespaceA || (NamespaceA = {}));
