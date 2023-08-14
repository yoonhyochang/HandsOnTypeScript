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
var Vehicle = /** @class */ (function () {
    function Vehicle(wheelCount) {
        this.wheelCount = wheelCount;
    } // 부모 클래스에서 wheelCount를 설정하는 생성자
    Vehicle.prototype.showNumberOfWheels = function () {
        console.log("moved ".concat(this.wheelCount, " miles")); // wheelCount를 출력하는 메서드
    };
    return Vehicle;
}());
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super.call(this, 2) || this;
    }
    return Motorcycle;
}(Vehicle));
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super.call(this, 4) || this;
    }
    return Automobile;
}(Vehicle));
var motorCycle = new Motorcycle();
motorCycle.showNumberOfWheels(); // "moved 2 miles"를 출력
var autoMobile = new Automobile();
autoMobile.showNumberOfWheels(); // "moved 4 miles"를 출력
