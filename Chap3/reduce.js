const allTrucks = [2,5,7,10];
const initialCapacity = 0;

// 'allTrucks' 배열의 모든 값을 합산합니다.
const allTonnage = allTrucks.reduce((total, current) => {
    return total + current; // 현재 값과 누적 값을 더합니다.
}, initialCapacity);

// 총 톤수를 콘솔에 출력합니다. 결과는 24입니다.
console.log(allTonnage);
