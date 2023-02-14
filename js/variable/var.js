// var 는 함수 스코프를 가진다.
// let / const 는 블록 스코프를 가진다. TDZ (temporal dead zone) 을 가진다.

var name = "dlfma";
var name = "이름1";
var name = "이름2";
var name = "이름3";
var name = "이름4";

console.log(name); // 이름 4;

console.log(name1); // undefined


let name = "이름1";
let name = "이름2";
let name = "이름3";
// error => name 은 이미 선언 됐다는 에러가 난다.

const name = "이름1";
const name = "이름2";
const name = "이름3";
// error => name 은 이미 선언 됐다는 에러가 난다.

// let 과 const 의 차이 => 재할당

var global = "global";

if(global === "global"){
  var global = "local";

  console.log(global); //  "local"
}

console.log(global); // "local"
// global 이 오염됐다.
// 이는 var는 함수 스코프 이기 때문에, if 스코프도 전역에 영향을 끼친다.

let global = "global";

if(global === "global"){
  let global = "local";

  console.log(global); //  "local"
}

console.log(global); // "global"
// let 은 블록 스코프안에서만 영향을 받기에 안전하다.

// const > let 을 선호하자.
const person = {
  name: "name",
  age: 20
}

// person = {} // 값 자체를 바꾸기에 에러가 난다.

person.name = "change";
person.age = 30;
// 객체의 내부의 값만 바꾼것이기에 동작 가능하다.

// *** const 는 재할당만 금지된다.
// 객체, 배열 같은 레퍼런스 객체들을 조작 할 때는 이상이 없다.