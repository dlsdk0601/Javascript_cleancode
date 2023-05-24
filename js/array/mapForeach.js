/*
 * map vs forEach
 * */

const price = ["2000", "1000", "3000"];

// const newPricesForEach = price.forEach(price => price + "원");
// 익명 함수로 바꿔보면 더 명확
const newPricesForEach = price.forEach(function (price) {
  return price + "원";
});

const newPricesMap = price.map(function (price) {
  return price + "원";
});

console.log(newPricesForEach); // undefined
console.log(newPricesMap); // ["1000원" ...]

/*
 * forEach => return 이 없다. 매 요소마다 콜백 함수만 실행
 * map => return 이 있다. 매 요소마다 콜백을 실행하면서 return 값을 받는다.
 * */
