function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const ina = new Person("ina", 30, "korea");

// 만약 age 를 넘기고 싶지 않을때는 파라미터의 순서 때문에 undefined 로 넘겨야한다
const ina2 = new Person("ina", undefined, "korea");

// 이걸 좀더 리펙토링 하려면 Person 파라미터를 구조분해 할당으로 처리하면 된다.

function PersonRefactor({ name, age, location }) {
  this.name = name ?? "";
  this.age = age ?? 0;
  this.location = location ?? "";
}

const test = new PersonRefactor({
  location: "korea",
  name: "ina",
  age: 30,
});
// 순서가 바껴도 됨.

const test2 = new PersonRefactor({
  location: "korea",
});
// 안넣고 싶으면 안넣어도되지만, contructor 에서 초기값 설정은 해줘야함

//  ======== 무저건 name 을 받고싶을때,
function Person2(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const test3 = new Person2("name", { age: 10 });
// 이런식으로 name 만 따로 받는다. 라이브러리를 사용하면 이런 형태의 파라미터 형식이 많음

// ======== 배열 구조분해 할당

const orders = [1, 2, 3];
const st = orders[0];
const rd = orders[2];
const [first, , third] = orders; // 배열은 이렇게 구조 분해가 가능하나 중간에 빈 공간이 거슬린다.

// js 에서는 배열도 object 이다.
const { 0: st2, 2: rd2 } = orders;
console.log(st2); // 1
console.log(rd2); // 3
