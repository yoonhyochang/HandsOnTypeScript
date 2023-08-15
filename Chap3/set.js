const userIds = [
    1,2,1,3
]

// 'Set' 객체를 사용해 중복된 값이 없는 고유한 ID 집합을 생성합니다.
const uniqueIds = new Set(userIds);
console.log(uniqueIds); // 중복 없는 ID 출력

uniqueIds.add(10); // 10을 집합에 추가합니다.
console.log('add 10', uniqueIds); // 업데이트된 집합 출력

console.log('has', uniqueIds.has(3)); // 3이 집합에 있는지 확인합니다. 결과는 true입니다.

console.log('size', uniqueIds.size); // 집합의 크기를 출력합니다. 결과는 5입니다.

for (let item of uniqueIds) {
    console.log('iterate', item); // 집합의 모든 요소를 반복하며 출력합니다.
}
