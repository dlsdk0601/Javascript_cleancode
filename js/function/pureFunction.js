/*
 * 순수 함수 => 사이드 이펙트가 생기지 않는 함수
 * 사이드 이펙트의 예제: console, save file, async, AJAX, random ....
 * */
let num1 = 10;
let num2 = 20;

function impureSum1() {
  return sum1 + sum2;
}

function impureSum2(newNum) {
  return sum1 + newNum;
}

impureSum1(); // 30
num1 = 30;

impureSum1(); // 50 => 호출할때마다 값들이 달라진다. => 순수 함수가 아니다.

impureSum2(30); // 40
// => 이 또한 순수함수가 아니다.

/*
 * num1, num2 나 파라미터는 누군가의 의해 조작 가능하기 때문에 항상 같은 겨로가가 나온다는 보장이 없다.*/

function pureSum(num1, num2) {
  return num1 + num2;
}

pureSum(1, 2); // 3
pureSum(1, 2); // 3
// => 값만 같은 값을 넣는다면 동일한 데이터가 나오기 때문에 이는 순수함수이다.

function changeValue(num) {
  num++;
  return num;
}

changeValue(1);
changeValue(3);
changeValue(1); // 이는 순수함수가 맞다. 언제나 파라미터의 + 1 의 값을 반환한다.

const obj = { one: 1 };

function changeObj(targetObj) {
  return { ...targetObj, one: 100 };
}

changeObj(obj); // {one: 100} => 이거는 원시 타입을 건드리기 때문에 원시 값이 바뀐다.
// => 이는 항상 새롭게 만들어서 리턴해라
