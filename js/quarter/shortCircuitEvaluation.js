/*
 * 단축평가
 * and 나 or 연산자들을 가지고 제일 오른쪽 값에 도달하는 법*/

// AND
console.log(true && true && "도달"); // 도달
console.log(true && fasle && "도달"); // false

// OR
console.log(false || fasle || "도달"); // 도달
console.log(true || true || "도달"); // true
// => or 은 중간에 하나라도 참이면 거기서 끝난다.

/*
 * else ~ if 피하기
 * */

let x = 1;

if (x > 0) {
  console.log("here");
} else if (x >= 0) {
  console.log("here1");
} else {
  console.log("here2");
}
/*
 * 위의 예제를 보면 promise ~ then 처럼 흐름을 탄다고 생각 할 수 있지만, 아니다.
 * 첫번째 if 에서 이미 걸러져서 그 뒤의 로직은 실행되지 않는다.
 * else ~ if 를 써야하는 상황은 차라리 switch ~ case 를 활용하는게 효과적이다.*/

// 이렇게 사용하는게 더 효과적임
if (x > 0) {
  console.log("here");
}
if (x >= 0) {
  console.log("here1");
}
console.log("here2");

// else if 는
/*
 * if(){
 * } else {
 *   if(){}
 * }
 * 의 형태가 줄여져서 나온거다.
 * */
//
// if (condition) {
//   console.log("ddd");
// } else {
//   if (condition2) {
//     console.log("ddfffff");
//   }
// }
