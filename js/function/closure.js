/*
 * closure
 * */

function add(num1) {
  return function sum(num2) {
    return num1 + num2;
  };
}

const addOne = add(1);
const addTwo = add(2);

// => 함수는 괄호 () 를 만나면 실행되며 끝이 난다.

addOne(3); // 4
// => 왜 4 냐면 윗줄에서 이미 한번 add(1) 를 넣고 이걸 addOne 이 받았기 때문에
// addOne은 sum 함수와 같다고 해도 무방하다.
// bind 메서드와 비슷하다.
// add(1)(3) 이렇게 적어도 같은 결과가 나온다.

function add(num1) {
  return function (num2) {
    return function (cal) {
      return calculateFn(num1, num2);
    };
  };
}

function sum(num1, num2) {
  return num1 + num2;
}

function multiple(num1, num2) {
  return num1 * num2;
}

const addOne = add(5)(2);
const sumAdd = addOne(sum);
const sumMultiple = addOne(multiple); // 10 이 나온다.

function log(value) {
  return function (fn) {
    fn(value);
  };
}

const loggg = log("foo");

logFoo((v) => console.log(v)); //  foo
logFoo((v) => console.info(v)); //  foo
logFoo((v) => console.error(v)); //  foo
logFoo((v) => console.warn(v)); //  foo
