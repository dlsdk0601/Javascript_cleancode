/*
 * 불변성 (immutable)
 *
 * 불변성을 지키는 방법
 * 1. 배열을 복사
 * 2. 새로운 배열을 반환하는 메서드을 활용 (map, filter, slice)
 * 이 모든걸 외울 수는 없으니 MDN 을 참고해서 확인 할 수 있다.
 * */

const originArray = ["123", "456", "789"];

const newArray = originArray;

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

console.log(originArray);
console.log(newArray);
// => 원본 배열만 조작했는데도 새로운 배열도 같이 조작된다. 그래서 같은 결과가 나온다.

const newNewArray = [...originArray];

originArray.push(2);
originArray.push(3);
originArray.push(4);
originArray.unshift(10);

console.log(originArray);
console.log(newNewArray);
// => 얕은 복사를 하였기에 원본 배열만 조작되고 복사된 배열은 그대로 이다.
