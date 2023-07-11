/*
 * 사용자에게 알려주기
 * - 동료 개발자
 * - 내가 만든 앱을 이용하는 사용자
 * */

// 동료 개발자에게 어떤 에러인지 알려 줄때
function React() {
  // 생성자로 사용하길 바랄때!
  if (!new.target) {
    throw new ReferenceError("생성자입니다.");
  }
}

React(); // Error 가 난다.
const react = new React(); // 에러 안남

// 사용자에게 알려주기
/*
 * 1. error 가 나는 input 에 focus 주기
 * 2. alert 창으로 알려주기
 * */
