namespace InterfaceNamespace {
    // 'Thing' 인터페이스 정의: name 속성과 getFullName 메서드를 가지고 있음
    interface Thing {
        name: string;
        getFullName: () => string;
    }

    // 'Vehicle' 인터페이스 정의: 'Thing'을 확장하며, wheelCount 속성과 두 개의 메서드를 추가로 가지고 있음
    interface Vehicle extends Thing {
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void;
        showNumberOfWheels: () => void;
    }

    // 'Motorcycle' 클래스 정의: 'Vehicle' 인터페이스를 구현하며, name과 wheelCount 속성을 가지고 있음
    class Motorcycle implements Vehicle {
        name: string;
        wheelCount: number;

        constructor(name: string) {
            // 인터페이스는 생성자를 가지지 않으므로 'super' 호출이 없음
            this.name = name; // name 속성 초기화
        }

        // 바퀴 수를 업데이트하는 메서드
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Automobile has ${this.wheelCount}`); // 업데이트된 바퀴 수 출력
        }

        // 바퀴 수를 표시하는 메서드
        showNumberOfWheels() {
            console.log(`moved Automobile ${this.wheelCount} miles`); // 이동한 거리 출력
        }

        // 전체 이름을 반환하는 메서드
        getFullName() {
            return "MC-" + this.name; // "MC-" 접두어와 함께 이름 반환
        }
    }

    // 'Motorcycle' 클래스의 인스턴스 생성
    const moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName()); // 전체 이름을 콘솔에 출력: "MC-beginner-cycle"
}
