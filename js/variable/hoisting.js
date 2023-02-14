// *** hoisting
// => 호이스팅이란 바로 선언과 할당이 분리된 것을 뜻한다.
/*
 * 코드를 작성 하면 스코프의 액션이 어떻게 될지 파악 할 수 있지만
 * 런타임에서 예측 못하는 상황이 생기는데, 호이스팅이 그중 하나의 원인이다.
 *
 * 호이스팅이란 선언부만 모두 최상단으로 끌어 올려지는 것을 얘기한다.
 * let & const 를 사용 하면 이런 현상이 나타나지 않는다. (TDZ)
 * var 에서만 겪는 상황이라서 사실 모던 개발을 하고 있다면 굳이 겪지 않을 일이다.
 * */

var global = 0;

const outer = () => {
  console.log(global); // undefined
  var global = 5;

  /*
   * 15번 라인에서 global 에서 에러가 아니라 undefined 로 나타나는 이유는 호이스팅이 일어났기 때문이다.
   * 15, 16번 라인은
   * var global;
   * console.log(global);
   * global = 5
   * 와 동일한 코드가 된다.
   * */

  const inner = () => {
    var global = 10;

    console.log(global); // 10
  };

  inner();

  global = 1;

  console.log(global); // 1
};

outer();

var sum;

console.log(sum()); // 3
/*
 * 이게 가능한 이유는 함수도 호이스팅이 되기 때문이다.
 * 함수가 호이스팅 되면서 sum 변수에 할당된다.
 * */

function sum() {
  return 1 + 2;
}

var sum1;
// var sum1 = 10; => 이렇게 할당까지 해버리면, 함수의 호이스팅이 아니니 최상단에 초기화되어있는 변수가 콘솔에 찍힌다.

console.log(sum1()); // 13
function sum1() {
  return 1 + 2;
}

function sum1() {
  return 1 + 2 + 3;
}
function sum1() {
  return 1 + 2 + 4 + 5;
}

/*
 * => *** 때문에 함수는 cosnt 에 할당 하는게 베스트.
 * 위에서 확인한 에러들은 모두 막아준다.
 * */

// 이를 함수 표현식이라고 한다. 익명 함수를 변수에 할당하는 것이다.
const sum3 = function () {
  return 2 + 2;
};

console.log(sum3());
