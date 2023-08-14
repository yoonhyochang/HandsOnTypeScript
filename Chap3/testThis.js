function MyFunction() {
    console.log(this); // 'this'는 호출 방식에 따라 달라집니다.
}
MyFunction(); // 여기서 'this'는 전역 객체를 가리킵니다. (브라우저에서는 'window')
var test = new MyFunction(); // 'new' 키워드를 사용하면, 'this'는 새로 생성된 객체를 가리킵니다.
