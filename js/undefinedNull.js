/*
 * undefined 와 null 의 정의는 반드시 알아야한다.
 * 대한민국은 자바 공화국인데, java 에는 undefined 가 존재하지 않는다.
 * API 통신할때 실수로 undefined 를 보내는 짓을 하지말아야한다.*/

console.log(!null); // true
console.log(!!null); // false
console.log(null === false); // false
console.log(!null === true); // true
console.log(null + 13); // 13 => 이거 되게 치명적이다.
// null 이 수학적으로는 0 이다.

let aaa;
console.log(aaa); // undefined
console.log(typeof aaa); // "undefined"
// => 선언했지만 값은 할당하지 않았다.

console.log(undefined + 10); // NaN
console.log(!undefined); // true => 이것때문에 어쩌면 null 과 굉장히 헷갈릴 수 있다.

console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(!undefined === !null); // true

// 회사 컨벤션에 맞춰서 null / undefined 의 사용을 맞출 필요가 있다.

/*
 * 내가 생각하는 둘의 차이는
 * undefined 는 메모리에 공간을 차지하지만, null 은 메모리에 할당 조차 되지 않는 상태라고 생각한다.*/
