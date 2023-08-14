namespace A {
    class FirstClass {
        // 네임스페이스 A 내에서 정의된 클래스
    }
}

namespace B {
    class SecondClass {
        // 네임스페이스 B 내에서 정의된 클래스
    }

    // 아래의 코드는 오류가 발생합니다. FirstClass는 네임스페이스 A 내에 있으므로 여기서는 접근할 수 없습니다.
    // const test = new FirstClass(); 
}
