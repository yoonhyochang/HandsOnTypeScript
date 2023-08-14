function getEmployee(id) {
    // 주어진 ID에 해당하는 직원 정보 반환
    return {
        name: "John",
        age: 35,
        address: "123 St",
        country: "United States"
    }
}

const { name: fullName, age } = getEmployee(22); // 직원 정보에서 이름과 나이 추출
console.log("employee", fullName, age); // 직원의 이름과 나이 출력


function getEmployeeWorkInfo(id) {
    // 주어진 ID에 해당하는 직원의 업무 관련 정보 반환
    return [
        id,
        "Office St",
        "France"
    ]
}

const [id, officeAddress] = getEmployeeWorkInfo(33); // 직원의 업무 관련 정보에서 ID와 사무실 주소 추출

console.log("employee", id, officeAddress); // 직원의 ID와 사무실 주소 출력
