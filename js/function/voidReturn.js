/*
 * void & return
 * */

function handleClick() {
  return setState(false);
}

function showAlert(message) {
  return alert(message);
}

// => 위의 두 함수는 return 타입이 void 가 아니다.
// => 굳이 특정한 return 값이 없으면 위와 같은 방법을 지양하자
// alert 와 같은 내장함수의 return 값이 뭐인지 잘 확인해보자

// ** push 도 return 값이 있다.
// 새로운 배열의 length 를 반환한다.

const arr = [1, 2];
const test = arr.push(3);
console.log(test); // 3
