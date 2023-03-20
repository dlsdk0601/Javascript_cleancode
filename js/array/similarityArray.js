/*
 * 유사 배열 객체*/

const arrayLikeObject = {
  0: "hello",
  1: "world",
  length: 2,
};

// js 에서의 배열은 객체이다.

const arr = Array.from(arrayLikeObject);
console.log(arr); // ["hello", "world"]
console.log(Array.isArray(arrayLikeObject)); // false
console.log(Array.isArray(arr)); // true

// document.querySelectAll 로 가져오는 node list 는 유사 배열이다.
// 대표적으로 arguments (내장) 도 유사 배열이다.

function generatePriceList() {
  console.log(Array.isArray(arguments)); // false
  // 매개변수를 선언하지 않아도 파라미터를 넘기면 이 arguments 가 받는다.
  return arguments.map((arg) => arg + "원"); // arguments 는 유사 배열이기 때문에 map 이 돌지 않는다.
}

console.log(generatePriceList(100, 200, 300));
