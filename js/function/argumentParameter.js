/*
 * argument vs parameter
 * parameter는 함수를 정의 할때,
 * argument(actual parameter) 는 함수를 싱행 시킬때 넘기는 인자값을 얘기한다.
 * */

function axios(parameter) {
  // some code
}

const a = axios(argument);

/*
 * 복잡한 인자 관리하기
 * */

function toggle(isToggle) {
  // boolean 이 들어와서 다음 로직이 예상이 된다.
  // some code
}

function sum(sum1, sum2) {
  // sum1, sum2 가 더해질것이라는 로직이 파악된다.
  // some code
}

function genRandomNumber(min, max) {
  // some code
}

function timer(start, stop, end) {
  // some code
}

function genSquare(top, right, bottom, left) {
  // some code
}

// 파라미터는 많다고 무조건 나쁜건 아니다. 로직에 맞게 알맞게 들어가면 된다.

function createCar(name, brand, color, type) {
  // 파라미터가 순서며 관계성이 너무 헷갈린다.
  // 때문에 이럴 경우에는 구조 분해로 {name, brand, color, type} 이렇게 정의하는게 더 낮다.
  // 명시적으로 중요한 인자는 빼도 된다. name, {brand, color, type} 이렇게
}

function create({ name, brand, color, type }) {
  if (!name) {
    throw new Error("name is a required");
  }

  if (!brand) {
    throw new Error("brand is a required");
  }
  // => 이렇게 에러를 던져서 인자를 관리 할 수 있다.
}
