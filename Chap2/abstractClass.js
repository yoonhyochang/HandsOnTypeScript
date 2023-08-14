var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractNamespace;
(function (AbstractNamespace) {
    var Vehicle = /** @class */ (function () {
        // 바퀴 수를 나타내는 보호된 멤버 변수
        function Vehicle(wheelCount) {
            this.wheelCount = wheelCount;
        }
        // 바퀴 수를 출력하는 일반 메서드
        Vehicle.prototype.showNumberOfWheels = function () {
            console.log("moved ".concat(this.wheelCount, " miles"));
        };
        return Vehicle;
    }());
    var Motorcycle = /** @class */ (function (_super) {
        __extends(Motorcycle, _super);
        function Motorcycle() {
            return _super.call(this, 2) || this;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Motorcycle has ".concat(this.wheelCount));
        };
        return Motorcycle;
    }(Vehicle));
    var Automobile = /** @class */ (function (_super) {
        __extends(Automobile, _super);
        function Automobile() {
            return _super.call(this, 4) || this;
        }
        Automobile.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has ".concat(this.wheelCount));
        };
        Automobile.prototype.showNumberOfWheels = function () {
            console.log("moved Automobile ".concat(this.wheelCount, " miles")); // 메서드 오버라이드
        };
        return Automobile;
    }(Vehicle));
    // 객체 생성 및 메서드 호출
    var motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(1);
    motorCycle.showNumberOfWheels(); // "moved 2 miles"를 출력
    var autoMobile = new Automobile();
    autoMobile.updateWheelCount(3);
    autoMobile.showNumberOfWheels(); // "moved Automobile 4 miles"를 출력 (Automobile 클래스에서 오버라이드함)
})(AbstractNamespace || (AbstractNamespace = {}));
