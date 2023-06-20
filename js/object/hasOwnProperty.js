/*
 * hasOwnProperty
 * => 해당 property 를 가지고 있는냐 판별해주는 빌트인 함수
 * => boolean 을 return 한다.
 * */

const person = {
  name: "ina",
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false

// 보통은 for ~ in 에서 많이 사용
// 공식 문서에서 확인 해보면 해당 함수를 바로 사용하면 다른 객체의 property 를 가져올 수도 있다. (확률이 얼마나 큰지는 모르겠다)
// 때문에 prototype 으로 접근해서 확인하는게 좋다.
console.log(Object.prototype.hasOwnProperty.call(person, "name")); // true

const foo = {
  hasOwnProperty: function () {
    return "hasOwnProperty";
  },
  bar: "here",
};

foo.hasOwnProperty("bar"); // "hasOwnProperty"
// 위의 예제와는 다르게 동작하는걸 알수 있다.

// 다 적기 귀찮으니까 스니팻이나 모듈로 만든다
function hasOwnProp(obj, prop) {
  return Object.prototype.call(obj, prop);
}

console.log(hasOwnProp(foo, "bar")); // true
