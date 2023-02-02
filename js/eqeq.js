// *** eqeq 는 동등 연산자이다.
/*
 * js 에는 동등 연산자가 두개 있다. == 과 === 이다.
 * == 는 그냥 동등 연산자라면, === 는 엄격한 동등연산자이다. */

console.log("1" == 1); // true
console.log(1 == true); // true
// => == 연산자를 사용하면 타입 변환이 일어난다. (type casting)

console.log("1" === 1); // false
console.log(1 === true); // false
// => 이렇게 형변환이 일어나지 않는 동등 연산자 사용을 지향해야한다.

/*
 * 제일 위험한 순간은 DOM 에서 데이터를 가져왔을때 이다. 아무리 number 타입을 대입했어도, querySelector 로 가져온다면 모두 string 으로 넘어온다*/
// <p id="value">0</p>
const p = document.querySelector("#value");
console.log(p.value == 0); // true
console.log(p.value === 0); // false
// => 이런 식으로 작성하게 될텐데 이건 지극히 잘못된 방식이다. 무조건을 형을 맞춰준다.

console.log(Number(p.value) === 0); // true
// => 이게 올바른 방식이다.
// eslint 에도 eqeqeq 가 있다. eslint 를 활용하자.
