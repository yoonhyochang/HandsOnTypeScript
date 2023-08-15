const items = [
    { name: "jon", age: 20 },
    { name: "linda", age: 22 },
    { name: "jon", age: 40 }
];

// 이름이 "jon"인 첫 번째 객체를 찾습니다.
const jon = items.find(item => item.name === "jon");

// 찾은 객체를 출력합니다. 결과는 { name: "jon", age: 20 }입니다.
console.log(jon);
