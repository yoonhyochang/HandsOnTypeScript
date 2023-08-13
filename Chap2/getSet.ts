class Speaker {
    private message: string; // Speaker의 메시지 저장
    constructor(private name: string) {} // Speaker의 이름 초기화

    // 메시지를 가져올 때 호출되는 Getter
    // 이름이 메시지에 포함되지 않으면 에러 발생
    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error("message is missing speaker's name");
        }
        return this.message;
    }

    // 메시지를 설정할 때 호출되는 Setter
    // 이름이 메시지에 포함되지 않으면 이름을 추가
    set Message(val: string) {
        let tmpMessage = val;
        if (!val.includes(this.name)) {
            tmpMessage = this.name + " " + val;
        }
        this.message = tmpMessage;
    }
}

const speaker = new Speaker("john"); // Speaker 인스턴스 생성
speaker.Message = "hello"; // 메시지 설정
console.log(speaker.Message); // 메시지 출력, 결과는 "john hello"
