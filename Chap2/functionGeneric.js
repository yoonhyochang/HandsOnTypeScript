// // 제네릭 함수 getLength: 길이가 있는 객체를 받아 그 길이를 반환하거나, 길이가 없으면 0을 반환합니다.
// function getLength<T>(arg: T): number {
//     if(arg.hasOwnProperty("length")) {
//         return arg["length"];
//     }
//     return 0;
// }
// getLength 함수: HasLength 인터페이스를 확장하는 제네릭 타입을 사용하여, 인수로 전달된 객체의 길이를 반환
function getLength(arg) {
    return arg.length;
}
// 아래 줄은 컴파일 에러를 발생시킬 것입니다. number 타입은 HasLength 인터페이스를 충족시키지 않기 때문입니다.
console.log(getLength(22));
// 문자열은 length 속성을 가지고 있으므로, 이 호출은 문자열의 길이인 13을 출력합니다.
console.log(getLength("Hello world."));
