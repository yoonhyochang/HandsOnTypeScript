const mappedEmp = new Map();

// 키와 값을 매핑하여 추가합니다.
mappedEmp.set("linda", { fullName: 'Linda Johnson', id: 1 });
mappedEmp.set("jim", { fullName: 'Jim Thomson', id: 2 });
mappedEmp.set("pam", { fullName: 'Pam Dryer', id: 4 });

console.log(mappedEmp); // 전체 맵 출력

console.log('get', mappedEmp.get("jim")); // 'jim'의 값을 가져옵니다.

console.log('size', mappedEmp.size); // 맵의 크기를 출력합니다. 결과는 3입니다.

for(let [key, val] of mappedEmp) {
    console.log('iterate', key, val); // 맵의 모든 키와 값을 반복하며 출력합니다.
}
