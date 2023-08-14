// 클래스 A 정의
var A = /** @class */ (function () {
    function A() {
        this.name = "A"; // name 프로퍼티 설정
    }
    A.prototype.go = function () {
        console.log(this.name); // name 프로퍼티 출력
    };
    return A;
}());
// 클래스 B 정의
var B = /** @class */ (function () {
    function B() {
        this.name = "B"; // name 프로퍼티 설정
    }
    B.prototype.go = function () {
        console.log(this.name); // name 프로퍼티 출력
    };
    return B;
}());
// A 인스턴스 생성 후 go 메소드 호출 (출력: "A")
var a = new A();
a.go();
// B 인스턴스 생성
var b = new B();
b.go();
// b의 go 메소드를 a의 컨텍스트로 바인딩
b.go = b.go.bind(a);
// 바인딩 된 b의 go 메소드 호출 (출력: "A")
b.go();
