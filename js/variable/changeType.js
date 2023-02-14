// *** type 변환

console.log("1" == 1); // true
/*
 * 위의 예제를 봤을때는 느슨한 검사같지만 암묵적으로 형변환이 일어난거다.
 * */
const a = 1;
const ex = 11 + "문자와 결합";
console.log(ex); // "11문자와 결합"
console.log(!!"문자열"); // true;
console.log(!!""); // false

console.log(parseInt("9.9999", 10)); // 9
/*
 * 위의 3개의 콘솔로그는 암묵적 형변환이고, 아래에 parseInt 는 명시적으로 변환시킨것이다.
 * 암묵적인 형변환보다 명확한 형변환을 지향하자.*/

console.log(String(ex)); // "11문자와 결합"
console.log(Boolean("문자열")); // true
console.log(Number("11")); // 11
console.log(Boolean("")); // false
