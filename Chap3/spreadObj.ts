namespace NamespaceA {
    class A { aname: string = "A"; }
    class B { bname: string = "B"; }
    const a = new A();
    const b = new B();
    const c = { ...a, ...b } // a와 b를 결합한 새 객체
    const d = Object.assign(a, b); // a에 b의 속성을 병합
    console.log(c); // 초기 c 출력
    console.log(d); // 초기 d 출력

    a.aname = "a1"; // a 수정
    console.log(c); // 수정 전 c 출력 (a와 b의 변경사항은 c에 반영되지 않음)
    console.log(d); // 수정된 a가 반영된 d 출력
}


//tsc spreadObj --target es6 으로 시작해야함
