namespace OptionalChainingNS {
    // 바퀴 수를 나타내는 인터페이스. count 프로퍼티가 있지만 선택적입니다.
    interface Wheels {
        count?: number;
    }

    // 차량을 나타내는 인터페이스. wheels 프로퍼티가 있지만 선택적입니다.
    interface Vehicle {
        wheels?: Wheels;
    }

    // 차량 인터페이스를 구현하는 클래스. wheels 프로퍼티를 선택적으로 받습니다.
    class Automobile implements Vehicle {
        constructor(public wheels?: Wheels) {
        }
    }

    // Automobile 인스턴스를 생성하되, count가 undefined인 wheels 객체를 전달합니다.
    const car: Automobile | undefined = new Automobile({
        count: undefined
    });
    console.log("car ", car); // car 객체 전체를 출력합니다.
    console.log("wheels ", car?.wheels); // 옵셔널 체이닝을 사용해 wheels 객체를 안전하게 접근합니다.
    console.log("count ", car?.wheels?.count); // 옵셔널 체이닝을 두 번 사용해 count 프로퍼티를 안전하게 접근합니다.

    // (주석 처리된 코드는 옵셔널 체이닝을 수동으로 구현한 예입니다.)
}

    // const count = !car ? 0 
    // : !car.wheels ? 0 
    // : !car.wheels.count ? 0
    // : car.wheels.count;
