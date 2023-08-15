const widgets = [
    { id: 1, color: 'blue' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'orange' },
    { id: 4, color: 'blue' },
]

// 배열 내에 'blue' 색상이 하나라도 있는지 검사합니다. 결과는 true입니다.
console.log('some are blue', widgets.some(item => {
    return item.color === 'blue';
}));

// 배열 내의 모든 항목이 'blue' 색상인지 검사합니다. 결과는 false입니다.
console.log('every one is blue', widgets.every(item => {
    return item.color === 'blue';
}));
