/*
 * JavaScript 의 배열은 객체다.*/

const arr = [1, 2, 3];

arr[3] = "test";
arr["property"] = "string";
arr["obj"] = {};
arr[{}] = [1, 2, 3];
arr["func"] = function () {
  return "hello";
};

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  // 1
  // 2
  // 3
}

console.log(arr);
/*
 * [
 * 1, 2, 3,
 * "test",
 * property: "string",
 * obj: {},
 * "[object Object"]: [1, 2, 3],
 * func: [a]
 * ]*/

// 위에서 7 ~ 12 라인 까지의 값들이 다 들어갔다.
// 객체의 형태와 전혀 다를게 없다.

const obj = {
  0: 1,
  1: 2,
  2: 3,
};

// 배열은 위의 obj 와 같은 객체처럼 작동한다.
/*
 * array 는 그래서 typeof 로 판단하기 힘들다. 결과가 "object" 로 나오기 때문에.
 * 예전에는 instanceof Array, in Array 와 같은 방식으로 확인 했었다.
 * 요즘에는 Array.isArray(arr) 로 확인 가능하니까 꼭 이걸 사용하기*/
