const employees = [
    { name: "tim", id: 1 },
    { name: "cindy", id: 2 },
    { name: "rob", id: 3 },
];
// 'map' 메서드를 사용해 각 직원의 'id'와 'name'을 이용하여 HTML div 요소를 생성합니다.
// 결과는 문자열로 이루어진 배열이며, 각 요소는 "<div>id - name</div>" 형태입니다.
const elements = employees.map((item, index) => {
    return `<div>${item.id} - ${item.name}</div>`;
});
// 생성된 HTML 문자열 배열을 콘솔에 출력합니다.
console.log(elements);
