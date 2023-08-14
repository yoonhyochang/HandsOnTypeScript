namespace AbstractNamespace {
    abstract class Vehicle {
        // 바퀴 수를 나타내는 보호된 멤버 변수
        constructor(protected wheelCount: number) {}

        // 추상 메서드, 파생 클래스에서 반드시 구현해야 함
        abstract updateWheelCount(newWheelCount: number): void;

        // 바퀴 수를 출력하는 일반 메서드
        showNumberOfWheels() {
            console.log(`moved ${this.wheelCount} miles`);
        }
    }

    class Motorcycle extends Vehicle {
        constructor() {
            super(2); // 오토바이는 2개의 바퀴를 가짐
        }
        updateWheelCount(newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
    }

    class Automobile extends Vehicle {
        constructor() {
            super(4); // 자동차는 4개의 바퀴를 가짐
        }
        updateWheelCount(newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`Automobile has ${this.wheelCount}`);
        }
        showNumberOfWheels() {
            console.log(`moved Automobile ${this.wheelCount} miles`); // 메서드 오버라이드
        }
    }

    // 객체 생성 및 메서드 호출
    const motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(1);
    motorCycle.showNumberOfWheels(); // "moved 2 miles"를 출력

    const autoMobile = new Automobile();
    autoMobile.updateWheelCount(3);
    autoMobile.showNumberOfWheels(); // "moved Automobile 4 miles"를 출력 (Automobile 클래스에서 오버라이드함)
  
}
