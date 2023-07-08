/*
 * Magic Number*/

setTimeout(() => {
  scrollToTop();
}, 3 * 60 * 1000); // => 시간 계산을 바로 넣으면 헷갈림

// => 상수로 뺀다 (이런게 추상화다)
export const COMMON_DELAY_MS = 3 * 60 * 1000;

// Numeric Perator
const PRICE = {
  MIN: 1_000_000, // 1백만원
  MAX: 100_000_000, // 1억
};
// => number 에 언더 스코어를 넣어줘도 number 타입 유지 되고 아무 문제 없다.

// 파라미터 Min, Max
getRandomPrice(PRICE.MIN, PRICE.MAX);
// 파라미터 바로 넣으면 추측만 될 뿐 바로 알지는 못한다.
// 이렇게 상수로 빼놓으면 명시적이다.

// 아래 코드들고 상수로 빼주면 관리 및 가독성이 좋아진다.
const CAR_NAME_LEN = Object.freeze({
  MIN: 1,
  MAX: 4,
});
// => 스네이크 케이스 덕분에 직관적으로 수정 금지라는걸 알겠지만 혹여나 불안하면 freeze 걸어둔다.

function isValid(carName) {
  return (
    carName.length >= CAR_NAME_LEN.MIN && carName.length <= CAR_NAME_LEN.MAX
  );
}

const notIsValid = (value) => {
  return !isValid(value);
};
