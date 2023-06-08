/*
 * Object freeze
 * 얼린다. 고정시킨다의 의미
 * */

const STATUS = Object.freeze({
  PEDING: "PEDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
});

STATUS.FAIL = "sss";
console.log(STATUS.FAIL); // "FAIL"
// => 변하지 않는다.

STATUS.NEW = "new";
console.log(STATUS); // STATUS 가 나오며 추가 되지 않는다.

// freeze 됐는지 확인
Object.isFrozen(STATUS); // true
Object.isFrozen(STATUS.FAIL); // true

// shallow copy vs deep copy
// 얕은 복사 vs 깊은 복사
// freeze 도 깊은 복사에는 관여 못한다.

const STATUS1 = Object.freeze({
  PEDING: "PEDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

Object.isFrozen(STATUS1.OPTIONS); // false

STATUS1.OPTIONS.GREEN = "G";
STATUS1.OPTIONS.YELLOW = "Y";

console.log(STATUS1.OPTIONS); // 새로 추가된 값, 수정된값 모두 반영되있음

/*
 * 이러한 깊은 복사에 대한 freeze 를 하기 위해서는
 * lodash 라는 라이브러리를 사용하거나
 * 직접 유틸 함수를 생성
 * ts 사용 할것 (readonly)
 * */

function deepFreeze(obj) {
  // 1. 객체를 순회
  // 2. 값이 객체 인지 확인
  // 3. 객체이면 재귀
  // 4. 그렇지 않으면 Object.freeze

  return Object.freeze(obj);
}

const a = [1, 2, 3, 4];
const b = [4, 3, 2, 1];
