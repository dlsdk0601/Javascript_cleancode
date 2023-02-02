/*
 * *** 타입 체크! 타입스크립트를 사용한다면 null safety 하기 때문에 문제 없지만, 바닐라라면 필수로 체크 해야한다.*/

// type 체크에 제일 기본은 typeof 연산자이고, 이는 타입을 string 으로 반환한다.
console.log(typeof "abc"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof 123); // "number"
console.log(typeof Symbol()); // "symbol"

/*
 * typeof 연산자가 모든 타입에 대해 커버 가능 할 것같지만 단점이 있다.
 * PRIMITIVE vs REFERENCE
 * 타입은 크게 두가지로 나누면, 원시형 / 참조형이 있다.
 * 원시형은 위의 예제와 같은 애들이지만, 참조형은 array, function, object, Date 가 있다.
 * 참조형은 typeof 로 판단하기 어렵다.
 * */

function aaa() {}
console.log(typeof aaa); // "function"

class MyClass {}

console.log(typeof MyClass); // "function"

/*
 * 원시형 타입도 참조형을 사용해서 정의 할 수 있는데, 이도 판별하기 어렵다.*/
const str = new String("abs");
console.log(typeof str); // "object"

// *** 제일 치명적인 단점 null !!!
console.log(typeof null); // "object" => js 측에서도 인정한 js 내장 오류이다.

/*
 * js 는 동적으로 변하는 언어이기에, 타입도 동적으로 변한다. */

// *** 두번째로 type 을 체크 할 수 있는 방법이 instanceof 이다.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = {
  name: "test",
  age: 20,
};

const jung = new Person("jung", 20);

console.log(jung instanceof Person); // true
console.log(p instanceof Person); // false => 객체를 확인하기에 용이하다.

const arr = [];
const func = function () {};
const date = new Date();
console.log(arr instanceof Array); // true
console.log(func instanceof Function); // true
console.log(date instanceof Date); // true

// *** instanceof 의 큰 단점
console.log(arr instanceof Object); // true
console.log(func instanceof Object); // true
console.log(date instanceof Object); // true

/*
 * 결국 참조형이기 때문에 최상위 객체인 Object 를 탄다.
 * 이런 단점을 보완하기 위해 프로토타입을 사용한다.*/

console.log(Object.prototype.call(arr)); // "[object Array]";
console.log(Object.prototype.call(func)); // "[object Function]";
console.log(Object.prototype.call(date)); // "[object Date]";

// => 잘 쓰는 방법은 아니지만 이런 방법도 있다.
