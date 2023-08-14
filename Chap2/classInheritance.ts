class Vehicle {
    constructor(protected wheelCount: number) {} // 부모 클래스에서 wheelCount를 설정하는 생성자

    showNumberOfWheels() {
        console.log(`moved ${this.wheelCount} miles`); // wheelCount를 출력하는 메서드
    }
}

class Motorcycle extends Vehicle { // Motorcycle 클래스는 Vehicle 클래스를 상속
    constructor() {
        super(2); // 부모 클래스의 생성자를 호출하여 wheelCount를 2로 설정
    }

    updateWheelCount(newWheelCount: number){
        this.wheelCount = newWheelCount; // wheelCount 값을 업데이트하는 메서드
    }
}

class Automobile extends Vehicle { // Automobile 클래스도 Vehicle 클래스를 상속
    constructor() {
        super(4); // 부모 클래스의 생성자를 호출하여 wheelCount를 4로 설정
    }
}

const motorCycle = new Motorcycle();
motorCycle.showNumberOfWheels(); // "moved 2 miles"를 출력

const autoMobile = new Automobile();
autoMobile.showNumberOfWheels(); // "moved 4 miles"를 출력
