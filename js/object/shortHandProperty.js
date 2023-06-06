/*
 * Shorthand properties
 * Concise Method
 * */

const couterApp = combineReducers({
  counter,
  extra,
  // ... 계속 추가하게 된다.
});

const first = "ina";
const last = "jung";

const person = {
  // first: "ina",
  // last: "jung",
  // => 아래와 같이 줄여 사용 가능하다. key 와 변수의 이름이 같을 경우에.
  // 이거를 shorthand property 라고 한다.
  first,
  last,
  getFullName: function () {
    return this.first + " " + this.last;
  },
};
