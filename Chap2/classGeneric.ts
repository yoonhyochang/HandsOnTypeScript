namespace GenericNamespace {
    // Wheels 인터페이스는 자동차의 바퀴에 대한 정보를 정의합니다.
    interface Wheels {
        count: number; // 바퀴의 개수
        diameter: number; // 바퀴의 지름
    }

    // Vehicle 인터페이스는 일반적인 차량을 나타내며, 제네릭 타입 T로 바퀴 정보를 받습니다.
    interface Vehicle<T> {
        getName(): string; // 차량의 이름을 반환하는 메서드
        getWheelCount: () => T; // 바퀴 정보를 반환하는 메서드
    }

    // Automobile 클래스는 Vehicle 인터페이스를 구현하며, Wheels 타입의 바퀴 정보를 사용합니다.
    class Automobile implements Vehicle<Wheels> {
        // 차량의 이름과 바퀴 정보를 저장합니다.
        constructor(private name: string, private wheels: Wheels) { 
            
        }

        // 차량의 이름을 반환하는 메서드
        getName(): string {
            return this.name;
        }

        // 바퀴 정보를 반환하는 메서드
        getWheelCount(): Wheels {
            return this.wheels;
        }
    }

    // Chevy 클래스는 Automobile 클래스를 확장하며, 특정 차량 모델을 나타냅니다.
    class Chevy extends Automobile {
        constructor() {
            // "Chevy"라는 이름과 4개의 18인치 바퀴로 초기화합니다.
            super("Chevy", { count: 4, diameter: 18 });
        }
    }

    // Chevy 인스턴스를 생성하고, 이름과 바퀴 정보를 출력합니다.
    const chevy = new Chevy();
    console.log("car name ", chevy.getName()); // "car name Chevy"
    console.log("wheels ", chevy.getWheelCount()); // "wheels { count: 4, diameter: 18 }"
}
