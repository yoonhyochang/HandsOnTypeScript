const filterItems = [
    { name: "jon", age: 20 },
    { name: "linda", age: 22 },
    { name: "jon", age: 40 }
];
// 'filter' 메서드를 사용해 "name"이 "jon"인 모든 객체를 "results"에 저장합니다.
// 동시에 'index'를 콘솔에 출력해 각 반복의 인덱스를 확인합니다.
const results = filterItems.filter((item, index) => {
    console.log(index); // 현재 인덱스 출력
    return item.name === "jon"; // 이름이 "jon"인 객체만 반환
});
// 이름이 "jon"인 객체들의 배열을 출력합니다.
console.log(results);
