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