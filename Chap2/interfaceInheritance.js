var InterfaceNamespace;
(function (InterfaceNamespace) {
    // 'Motorcycle' 클래스 정의: 'Vehicle' 인터페이스를 구현하며, name과 wheelCount 속성을 가지고 있음
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            // 인터페이스는 생성자를 가지지 않으므로 'super' 호출이 없음
            this.name = name; // name 속성 초기화
        }
        // 바퀴 수를 업데이트하는 메서드
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has ".concat(this.wheelCount)); // 업데이트된 바퀴 수 출력
        };
        // 바퀴 수를 표시하는 메서드
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("moved Automobile ".concat(this.wheelCount, " miles")); // 이동한 거리 출력
        };
        // 전체 이름을 반환하는 메서드
        Motorcycle.prototype.getFullName = function () {
            return "MC-" + this.name; // "MC-" 접두어와 함께 이름 반환
        };
        return Motorcycle;
    }());
    // 'Motorcycle' 클래스의 인스턴스 생성
    var moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName()); // 전체 이름을 콘솔에 출력: "MC-beginner-cycle"
})(InterfaceNamespace || (InterfaceNamespace = {}));
